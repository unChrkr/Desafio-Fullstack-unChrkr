import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);
    if (user) {
      const passwordMatch = await compare(userPassword, user.password);
      if (passwordMatch) {
        return { email: user.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const user: User = await this.userService.findByEmail(email);
    return {
      user,
      token: this.jwtService.sign({ email }, { subject: String(user.id) }),
    };
  }
}
