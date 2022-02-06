import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateFileNameColumnOnProductImagesTable1644144066984 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('product_images', new TableColumn({
            name: 'filename',
            type: 'varchar'
        }))
        await queryRunner.addColumn('product_images', new TableColumn({
            name: 'original_filename',
            type: 'varchar'
        }))
        await queryRunner.addColumn('product_images', new TableColumn({
            name: 'url',
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('product_images', 'url')
        await queryRunner.dropColumn('product_images', 'original_filename')
        await queryRunner.dropColumn('product_images', 'filename')
    }

}
