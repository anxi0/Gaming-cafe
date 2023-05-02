import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CheckAdminDto } from 'src/dtos/admin-dto';
import { AdminService } from 'src/services/admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Post('check')
  async checkAdmin(@Body() checkAdminDto: CheckAdminDto) {
    const result = await this.adminService.checkAdmin(checkAdminDto);
    if (result) {
      return '로그인에 성공하였습니다';
    } else if (result === false) {
      return '비밀번호가 틀렸습니다';
    } else {
      return '존재하지 않는 계정입니다';
    }
  }
}
