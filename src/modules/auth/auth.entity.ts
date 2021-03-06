/**
 * @author: YouJie
 * @date: 2020-04-12 20:47:46
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: '手机号' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @IsString()
  mobile: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString()
  password: string;
}
