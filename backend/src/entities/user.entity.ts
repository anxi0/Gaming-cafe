import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Adult } from './adult.entity';
import { Charge } from './charge.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  second: number;

  @OneToMany(() => Adult, (adult) => adult.user)
  is_adult: Adult[];

  @OneToMany(() => Charge, (charge) => charge.user)
  charges: Charge[];
}
