import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seat } from './seat.entity';
import { Menu } from './menu.entity';

@Entity()
export class Order {
  @PrimaryColumn()
  seat_id: number;

  @PrimaryColumn()
  menu_id: number;

  @ManyToOne(() => Seat, (seat) => seat.orders)
  @JoinColumn({ name: 'seat_id', referencedColumnName: 'number' })
  seat: Seat;

  @ManyToOne(() => Menu, (menu) => menu.orders)
  @JoinColumn({ name: 'menu_id', referencedColumnName: 'id' })
  menu: Menu;

  @Column()
  resolved: boolean;
}
