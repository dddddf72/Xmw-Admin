/*
 * @Description: 查询角色管理列表参数 Dto
 * @Version: 2.0
 * @Author: Cyan
 * @Date: 2022-10-28 17:47:10
 * @LastEditors: Cyan
 * @LastEditTime: 2022-11-09 09:42:56
 */
import { ApiProperty } from '@nestjs/swagger';

export class ListRoleManagementDto {
  @ApiProperty({
    type: String,
    description: '角色名称',
    default: '超级管理员',
    required: false,
  })
  role_name?: string;

  @ApiProperty({
    type: String,
    description: '角色编码',
    default: 'Super Admin',
    required: false,
  })
  role_code?: string;

  @ApiProperty({
    type: Number,
    description: '角色状态',
    default: 1,
    required: false,
  })
  status?: number;

  @ApiProperty({
    type: Number,
    description: '条数',
    default: 10,
  })
  pageSize: number;

  @ApiProperty({
    type: Number,
    description: '当前页码',
    default: 1,
  })
  current: number;

  @ApiProperty({
    type: Date,
    description: '开始日期',
    default: '2022-10-01 00:00:00',
    required: false,
  })
  start_time?: Date;

  @ApiProperty({
    type: Date,
    description: '结束日期',
    default: '2022-10-02 23:59:59',
    required: false,
  })
  end_time?: Date;
}
