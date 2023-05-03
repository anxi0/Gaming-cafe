// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryColumn,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Seat } from './seat.entity';
// import { Menu } from './menu.entity';

// @Entity()
// export class Order {
//   @PrimaryGeneratedColumn()
//   compositeKey: number;

//   @ManyToOne(() => Seat, (seat) => seat.orders)
//   seat: Seat;

//   @ManyToOne(() => Menu, (menu) => menu.orders)
//   menu: Menu;

//   @Column({ type: 'tinyint' })
//   resolved: boolean;
// }
