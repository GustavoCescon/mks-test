import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from './../user/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });
    if (usuario && await bcrypt.compare(pass, usuario.password)) {
      const { password, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }

  async register(email: string, name: string, password: string): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = this.usuariosRepository.create({ email, name, password: hashedPassword });
    return this.usuariosRepository.save(usuario);
  }
}
