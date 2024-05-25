import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
@Entity("movie")
export class Movie {
  @ApiProperty({ description: 'The id of the movie' })
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty({ description: 'The title of the movie' })
  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;
  
  @ApiProperty({ description: 'The description of the movie' })
  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;
  
  @ApiProperty({ description: 'The director of the movie' })
  @Column()
  @IsNotEmpty()
  @IsString()
  director: string;
  
  @ApiProperty({ description: 'The release date of the movie' })
  @Column()
  @IsNotEmpty()
  @IsString()
  releaseDate: string;
}
