import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductImagesTableAddIncrementConfigToIdColumn1644180011099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('product_images', 'id', new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('product_images', 'id', new TableColumn({
            name: 'id',
            type: 'int',
            isPrimary: true
        }))
    }

}
