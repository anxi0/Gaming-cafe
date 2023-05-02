import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckAdminDto, CreateAdminDto } from 'src/dtos/admin-dto';
import { Admin } from 'src/entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  async checkAdmin(checkAdminDto: CheckAdminDto): Promise<boolean> {
    const admin = await this.adminRepository.findOne({
      where: { name: checkAdminDto.name },
    });
    return admin ? admin.password === checkAdminDto.password : null;
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }

  async updateAdmin() {
    return 'Admin updated';
  }

  async deleteAdmin() {
    return 'Admin deleted';
  }

  async loginAdmin() {
    return 'Admin logged in';
  }

  async logoutAdmin() {
    return 'Admin logged out';
  }

  async changePasswordAdmin() {
    return 'Admin password changed';
  }

  async resetPasswordAdmin() {
    return 'Admin password reset';
  }

  async forgotPasswordAdmin() {
    return 'Admin password forgot';
  }

  async changeEmailAdmin() {
    return 'Admin email changed';
  }

  async resetEmailAdmin() {
    return 'Admin email reset';
  }

  async forgotEmailAdmin() {
    return 'Admin email forgot';
  }

  async changeNameAdmin() {
    return 'Admin name changed';
  }

  async resetNameAdmin() {}
}
