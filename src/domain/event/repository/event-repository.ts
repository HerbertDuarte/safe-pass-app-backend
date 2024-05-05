import { EventEntity } from '../entity/event-entitie';

export interface EventRepository {
  findAll(): Promise<EventEntity[]>;
  findById(eventId: string): Promise<EventEntity>;
  findByUserId(userId: string): Promise<EventEntity[]>;
  create(event: Omit<EventEntity, 'id'>): Promise<EventEntity>;
  delete(eventId: string): Promise<void>;
  update(
    eventId: string,
    event: Omit<EventEntity, 'id'> | EventEntity,
  ): Promise<void>;
}
