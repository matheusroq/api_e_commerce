import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';

@Entity('products')
class Products {
  @PrimaryColumn()
  readonly id: string;

  @Column()
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