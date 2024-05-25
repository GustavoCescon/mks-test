import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsuarioService],
  controllers: [AuthController, UsuarioController],
})
export class AuthModule {}
