import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from './admin.entity';

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
}
