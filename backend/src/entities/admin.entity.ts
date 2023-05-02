import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spot } from './spot.entity';

@Entity()
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Spot, (spot) => spot.admin, { nullable: true })
  spots: Spot[];
}
