import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Skill } from './skills.model';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill) private skillRepository: typeof Skill) {}

  async get(id: string) {
    return await this.skillRepository.findOne({ where: { id } });
  }

  async getAll() {
    return await this.skillRepository.findAll();
  }

  async create(dto: CreateSkillDto) {
    return await this.skillRepository.create(dto);
  }

  async update(dto: CreateSkillDto, id: string) {
    return await this.skillRepository.update(dto, { where: { id } });
  }

  async remove(id: string) {
    return await this.skillRepository.destroy({ where: { id } });
  }
}
