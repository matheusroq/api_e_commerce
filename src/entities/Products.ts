import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';

@Entity('products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0.00 })
  price: number;

  @Column()
  category_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Products }