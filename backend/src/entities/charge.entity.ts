import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TagHistory } from './tag_history.entity';
import { User } from './user.entity';

@Entity()
export class Charge {
  @PrimaryColumn()
  history_id: number;

  @ManyToOne(() => TagHistory, (history) => history.charges)
  @JoinColumn({ name: 'history_id', referencedColumnName: 'id' })
  history: TagHistory;

  @ManyToOne(() => User, (user) => user.charges)
  user: User;
}
