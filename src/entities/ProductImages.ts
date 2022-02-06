import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from './Products';
import { v4 as uuid } from 'uuid';
@Entity('product_images')
class ProductImages {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  product_id: string;

  @ManyToMany(() => Products)
  @JoinColumn({ name: 'product_id' })
  productId: Products;

  @Column()
  filename: string;

  @Column()
  original_filename: string;

  @Column()
  url: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ProductImages }