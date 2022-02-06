import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoryTable1644027629305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
