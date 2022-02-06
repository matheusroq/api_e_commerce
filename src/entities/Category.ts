import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  name: string;
}

export { Category }