import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Spot } from './spot.entity';
// import { Order } from './order.entity';

@Entity()
export class Seat {
  @PrimaryColumn()
  number: number;

  @ManyToOne(() => Spot, (spot) => spot.seats)
  @JoinColumn({ name: 'number' })
  spot: Spot;

  @Column()
  x: number;

  @Column()
  y: number;

  // @OneToMany(() => Order, (order) => order.seat)
  // orders: Order[];
}
