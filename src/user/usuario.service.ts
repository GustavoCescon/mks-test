import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { email } });
  }

  async create(email: string, name: string, password: string): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = this.usuariosRepository.create({ email, name, password: hashedPassword });
    return this.usuariosRepository.save(usuario);
  }

  async update(id: number, email: string, name: string, password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usuariosRepository.update(id, { email, name, password: hashedPassword });
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
  async verifyEmail(email: string): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { email } });
  }
}
