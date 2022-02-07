import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDescriptionColumnProductsTable1644232376112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('products', new TableColumn({
            name: 'description',
            type: 'text',
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'description');
    }

}
