import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductsTablePriceColumnType1644171720419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'price', new TableColumn({
            name: 'price',
            type: 'decimal(10,2)'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'price', new TableColumn({
            name: 'price',
            type: 'decimal'
        }))
    }

}
