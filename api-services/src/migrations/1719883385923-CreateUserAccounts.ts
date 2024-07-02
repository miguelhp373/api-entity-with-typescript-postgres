import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserAccountsTable1719882935878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_accounts",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "userEmail",
                        type: "varchar",
                    },
                    {
                        name: "accountType",
                        type: "varchar"
                    },
                    {
                        name: "accountName",
                        type: "varchar"
                    },
                    {
                        name: "accountIcon",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "accountBalance",
                        type: "float",
                        default: 0
                    },
                    {
                        name: "showOnDashBoard",
                        type: "boolean",
                        default: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_accounts");
    }

}
