import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Admin } from './admin.entity';
import { Seat } from './seat.entity';
import { Menu } from './menu.entity';
import { Adult } from './adult.entity';
import { Tag } from './tag.entity';

@Entity()
export class Spot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  x: number;

  @Column()
  y: number;

  @Column({})
  name: string;

  @ManyToOne(() => Admin, (admin) => admin.spots)
  admin: Admin;

  @OneToMany(() => Seat, (seat) => seat.spot)
  seats: Seat[];

  @OneToMany(() => Menu, (menu) => menu.spot)
  menus: Menu[];

  @OneToMany(() => Adult, (adult) => adult.spot)
  adult_checks: Adult[];

  @OneToMany(() => Tag, (tag) => tag.spot)
  tags: Tag[];
}
