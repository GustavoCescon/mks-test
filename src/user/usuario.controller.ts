import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { AuthService } from './../auth/auth.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Usuario } from './usuario.entity';
@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: Usuario })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(@Body() body: { email: string, name: string, password: string }) {
    const { email, name, password } = body;
    const existEmail = this.usuarioService.verifyEmail(email);
    if (existEmail) {
      return { message: 'Email already exists' };
    }
    return this.usuarioService.create(email, name, password);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: Usuario })
  @ApiResponse({ status: 200, description: 'The user has been successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  async login(@Body() body: { email: string, password: string }) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the user' })
  @ApiResponse({ status: 200, description: 'Return the user with the given ID.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({ name: 'id', description: 'The ID of the user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  update(@Param('id') id: number, @Body() body: { email: string, name: string, password: string }) {
    const { email, name, password } = body;
    return this.usuarioService.update(id, email, name, password);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', description: 'The ID of the user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }
}
