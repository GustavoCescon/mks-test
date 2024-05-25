import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user")
export class Usuario {
  @ApiProperty({ description: 'The id of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The email of the user' })
  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ description: 'The name of the user' })
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The password of the user' })
  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;
}
