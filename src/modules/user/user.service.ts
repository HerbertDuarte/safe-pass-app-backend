import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserEntity } from 'src/domain/user/entity/user-entitie';
import { UserRepository } from 'src/domain/user/repository/user-repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService implements UserRepository{

  constructor(private readonly prismaService : PrismaService) {}
  
  async findAll () : Promise<UserEntity[]>{
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      throw new ConflictException("Erro ao buscar os usuarios.")
    }
  }

  async create(user: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.prismaService.user.create({
        data : user,
      })
    } catch (error) {
      throw new ConflictException("Erro ao criar o usuario.")
    }
    
  }

  async delete(userId: string): Promise<void> {
    try {
      await this.prismaService.user.delete({
        where : {
          id : userId
        }
      })
    } catch (error) {
      throw new ConflictException("Erro ao deletar o usuario.")
    }
    
  }
  
  async findById(userId: string): Promise<UserEntity> {
    try {
      return await this.prismaService.user.findUnique({
        where: {
          id : userId
        }
      })
    } catch (error) {
      throw new ConflictException("Erro ao buscar o usuario.")
    }
      
  }

  async update(userId: string, user: UpdateUserDto): Promise<UserEntity> {
      try {
        return await this.prismaService.user.update({
          where: {
            id: userId
          },
          data : user
        })
      } catch (error) {
        throw new ConflictException("Erro ao atualizar o usuario.")
      }
  }
}

