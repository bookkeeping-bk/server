/**
 * @author: YouJie
 * @date: 2020-04-16 22:06:00
 * 用户表
 */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1586419973378 implements MigrationInterface {
  private usersTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'username',
        type: 'varchar',
        length: '32',
        isNullable: false,
        comment: '用户名',
      },
      {
        name: 'nickname',
        type: 'varchar',
        length: '32',
        isNullable: true,
        comment: '昵称',
      },
      {
        name: 'password',
        type: 'varchar',
        length: '64',
        isNullable: false,
        comment: '密码',
      },
      {
        name: 'mobile',
        type: 'char',
        length: '11',
        isUnique: true,
        isNullable: false,
        comment: '手机号',
      },
      {
        name: 'avatar',
        type: 'varchar',
        length: '255',
        isNullable: true,
        comment: '头像',
      },
      {
        name: 'login_ip',
        type: 'varchar',
        length: '255',
        isNullable: true,
        comment: '登录IP',
      },
      {
        name: 'register_ip',
        type: 'varchar',
        length: '255',
        isNullable: true,
        comment: '注册IP',
      },
      {
        name: 'latest_online_at',
        type: 'timestamp',
        isNullable: true,
        comment: '最后一次在线时间',
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isNullable: false,
        comment: '创建时间',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isNullable: false,
        comment: '更新时间',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.usersTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.usersTable);
  }
}
