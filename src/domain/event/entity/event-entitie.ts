import { PassEntity } from "src/domain/pass/entity/pass-entitie";
import { UserEntity } from "src/domain/user/entity/user-entitie";

export class EventEntity {
  id: string;
  name: string;
  createdAt: string;

  passes?: PassEntity[];

  userId: string;
  user?: UserEntity
}
