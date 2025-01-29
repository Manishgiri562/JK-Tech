import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/models/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(
      await this.authService.validateUser(body.email, body.password),
    );
  }

  @Post('/signup')
  createUser(@Body() body: { name: string; email: string, age: number, password: string }): Promise<User> {
    return this.usersService.createUser(body.name, body.email, body.age, body.password);
  }
}
