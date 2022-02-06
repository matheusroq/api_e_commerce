import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProductTable1644028617695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'category_id',
                    type: 'int'
                }
            ]
        }));

        await queryRunner.createForeignKey("products", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('category_id', 'products')
        await queryRunner.dropTable('products');

    }

}
