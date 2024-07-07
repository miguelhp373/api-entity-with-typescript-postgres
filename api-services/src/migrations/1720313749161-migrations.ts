import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1720313749161 implements MigrationInterface {
    name = 'Migrations1720313749161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "authType" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" SERIAL NOT NULL, "userId" uuid NOT NULL, "accountType" character varying NOT NULL, "accountName" character varying NOT NULL, "accountIcon" integer, "accountBalance" double precision NOT NULL DEFAULT '0', "showOnDashBoard" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_transactions" ("id" SERIAL NOT NULL, "userId" uuid NOT NULL, "accountId" uuid NOT NULL, "transactionType" character varying NOT NULL, "value" double precision NOT NULL, "timeStamp" TIMESTAMP NOT NULL, "category" character varying NOT NULL, "isPayed" boolean NOT NULL DEFAULT true, "installments" integer NOT NULL DEFAULT '1', CONSTRAINT "PK_21325240e8a1f55f22a6f35df4f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_transactions"`);
        await queryRunner.query(`DROP TABLE "user_accounts"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
