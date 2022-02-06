import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  name: string;
}

export { Category }