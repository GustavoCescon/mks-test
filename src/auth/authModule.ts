/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Usuario } from './../user/usuario.entity';
import { UsuarioService } from 'src/user/usuario.service';
import { UsuarioController } from 'src/user/usuario.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Usuario]),
    PassportModule,
    JwtModule.register({
      secret: "7cdaf26e8790b57e775a8bf758fc17718bd082e4c1bc3f2010bd0ffd5432f2f5fcb7cb2357df8c6ae5eec5966833381713da2a72b184faeedbd6ce7d272530166286558b1eea9d20aac8a5ae91a21836a7b2d04ae8924932181f34a5b43dcb00717e50089a41a94643d41580480ce4230b4be61fa3c8c6d65c86876682cb76cb03dbaf2d2822b2977823a522a46a14bbcbfbf929dc949048eeb018328e6e07c73ef81e59a4775b966003aab1f1934868e42e8877b426a16167910ac240ed0b08d67a1f8fa45b1d9aaef2ee1aebce75beefa1edba39c4aedaaa3a31f3b067af04ff373cd67ccbafa06ba09aec61dff88f953a3c83deaf0a3bdfd1b242b95712e8", 
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsuarioService],
  controllers: [AuthController, UsuarioController],
})
export class AuthModule {}
