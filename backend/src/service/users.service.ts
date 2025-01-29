import { ConflictException, Injectable } from '@nestjs/common';
import { User, UserDocument } from '../models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec(); // Get all users
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec(); // Get user by ID
  }

  async createUser(name: string, email: string, age: number, password: string): Promise<User> {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    return this.userModel.create({ name, email, password, age });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }
}
