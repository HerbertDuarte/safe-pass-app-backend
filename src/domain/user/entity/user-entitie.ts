import { EventEntity } from "src/domain/event/entity/event-entitie";

export class UserEntity {
  id: string;
  name: string;
  email : string;
  password : string;
  events ?: EventEntity[]
}
