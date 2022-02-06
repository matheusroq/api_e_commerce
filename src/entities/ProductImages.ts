import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from './Products';

@Entity('product_images')
class ProductImages {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

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
}

export { ProductImages }