import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserDTO } from 'src/user/dto/user.dto';
import { UserLoginDTO } from 'src/user/dto/user.login.dto';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
  ) { }

  @Post('signin')
  async signIn(@Body() userLoginDTO: UserLoginDTO) {
    const user = await this.authService.signIn(userLoginDTO);
    return user;
  }

  @Post('signup')
  async signUp(@Body() userDTO: UserDTO) {
    const user = await this.authService.signUp(userDTO);
    return user;
  }
}
