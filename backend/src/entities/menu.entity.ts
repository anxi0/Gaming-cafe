import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spot } from './spot.entity';
// import { Order } from './order.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Spot, (spot) => spot.menus)
  spot: Spot;

  //   @OneToMany(() => Order, (order) => order.menu)
  //   orders: Order[];
}
