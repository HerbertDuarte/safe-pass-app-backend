import { UserEntity } from "src/domain/user/entity/user-entitie";

export type CreateUserDto = Omit<Omit<UserEntity, 'id'>, 'events'>;
