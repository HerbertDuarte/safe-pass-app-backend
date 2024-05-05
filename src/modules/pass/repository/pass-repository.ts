import { PassEntity } from "../entity/pass-entitie";

export interface PassRepository {
  findAll(): Promise<PassEntity[]>;
  findById(passId: string): Promise<PassEntity>;
  findBypassId(passId: string): Promise<PassEntity[]>;
  create(pass: Omit<PassEntity, 'id'>): Promise<PassEntity>;
  delete(passId: string): Promise<void>;
  update(
    passId: string,
    pass: Omit<PassEntity, 'id'> | PassEntity,
  ): Promise<void>;
}