import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class MovieService {
  private redisClient: Redis;

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @Inject(RedisService) private readonly redisService: RedisService,
  ) {
    this.redisClient = this.redisService.getClient();
  }

  async findAll(): Promise<Movie[]> {
    const cacheKey = 'movies';
    const cachedMovies = await this.redisClient.get(cacheKey);

    if (cachedMovies) {
      return JSON.parse(cachedMovies);
    }

    const movies = await this.movieRepository.find();
    await this.redisClient.set(cacheKey, JSON.stringify(movies), 'EX', 3600);
    return movies;
  }

  async findOne(id: number): Promise<Movie> {
    const cacheKey = `movie:${id}`;
    const cachedMovie = await this.redisClient.get(cacheKey);

    if (cachedMovie) {
      return JSON.parse(cachedMovie);
    }

    const movie = await this.movieRepository.findOne({ where: { id } });
    if (movie) {
      await this.redisClient.set(cacheKey, JSON.stringify(movie), 'EX', 3600);
    }
    return movie;
  }

  async create(movie: Movie): Promise<Movie> {
    const newMovie = await this.movieRepository.save(movie);
    await this.redisClient.del('movies');  
    return newMovie;
  }

  async update(id: number, movie: Movie): Promise<void> {
    await this.movieRepository.update(id, movie);
    await this.redisClient.del('movies');  
    await this.redisClient.del(`movie:${id}`);  
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
    await this.redisClient.del('movies');  
    await this.redisClient.del(`movie:${id}`); 
  } 

 
}