import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spot } from './spot.entity';
import { TagHistory } from './tag_history.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seconds: number;

  @Column()
  price: number;

  @ManyToOne(() => Spot, (spot) => spot.tags)
  spot: Spot;

  @OneToMany(() => TagHistory, (history) => history.tag)
  histories: TagHistory[];
}
