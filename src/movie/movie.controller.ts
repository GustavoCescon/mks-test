import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@ApiBearerAuth()
@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'Return all movies.' })
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the movie' })
  @ApiResponse({ status: 200, description: 'Return the movie with the given ID.' })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  findOne(@Param('id') id: number): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() movie: Movie): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a movie' })
  @ApiParam({ name: 'id', description: 'The ID of the movie' })
  @ApiResponse({ status: 200, description: 'The movie has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Param('id') id: number, @Body() movie: Movie): Promise<void> {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Delete a movie' })
  @ApiParam({ name: 'id', description: 'The ID of the movie' })
  @ApiResponse({ status: 200, description: 'The movie has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.movieService.remove(id);
  }
}
