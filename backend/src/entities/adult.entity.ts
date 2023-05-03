import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Spot } from './spot.entity';
import { User } from './user.entity';

@Entity()
export class Adult {
  @PrimaryColumn()
  spot_key: number;

  @PrimaryColumn()
  user_key: string;

  @ManyToOne(() => Spot, (spot) => spot.adult_checks)
  @JoinColumn({ name: 'spot_key', referencedColumnName: 'id' })
  spot: Spot;

  @ManyToOne(() => User, (user) => user.is_adult)
  @JoinColumn({ name: 'user_key', referencedColumnName: 'id' })
  user: User;
}
