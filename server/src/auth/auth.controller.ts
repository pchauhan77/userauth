import { AuthService } from './auth.service';
import { Controller, Request, UseGuards, Post, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post(`/login`)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('logout')
  async logout(@Req() req) {
    console.log("🚀 ~ file: auth.controller.ts:16 ~ AuthController ~ logout ~ req:", req.session)
    req.session.destroy(); // Logout from the session
    return { message: 'Logout successful' };
  }
}
