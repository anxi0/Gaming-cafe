import { IsByteLength, IsString } from 'class-validator';

export class CheckAdminDto {
  @IsString()
  @IsByteLength(3, 50)
  name: string;

  @IsString()
  password: string;
}

export class CreateAdminDto extends CheckAdminDto {}
