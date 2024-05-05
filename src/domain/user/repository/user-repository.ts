import { UserEntity } from "../entity/user-entitie";

export interface UserRepository {
  findAll(): Promise<UserEntity[]>;
  findById(userId: string): Promise<UserEntity>;
  create(user: Omit<Omit<UserEntity, 'id'>, 'id'>): Promise<UserEntity>;
  delete(userId: string): Promise<void>;
  update(
    userId: string,
    user:  Omit<Omit<UserEntity, 'id'>, 'id'>,
  ): Promise<UserEntity>;
}