import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tag.entity';
import { Charge } from './charge.entity';

@Entity()
export class TagHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seconds: number;

  @Column()
  price: number;

  @ManyToOne(() => Tag, (tag) => tag.histories)
  tag: Tag;

  @OneToMany(() => Charge, (charge) => charge.history)
  charges: Charge[];
}
