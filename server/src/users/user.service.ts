import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from './hash.service';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private hashService: HashService,
  ) {}

  async getUserByUsername(username: string) {
    return this.userModel
      .findOne({
        username,
      })
      .exec();
  }
  async getUserByEmail(email: string) {
    return this.userModel
      .findOne({
        email,
      })
      .exec();
  }

  async registerUser(createUserDto: CreateUserDto) {
    // validate DTO
    const createUser = new this.userModel(createUserDto);
    // check if user exists
    const user = await this.getUserByEmail(createUser.email);
    if (user) {
      throw new BadRequestException('bad request', 'user already exists');
    }
    // Hash Password
    createUser.password = await this.hashService.hashPassword(
      createUser.password,
    );

    const newUser = await createUser.save();
    delete newUser.password;
    return newUser;
  }
}
