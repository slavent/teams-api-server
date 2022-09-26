import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './teams.model';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team) private teamsRepository: typeof Team) {}

  async get(id: string) {
    return await this.teamsRepository.findOne({ where: { id } });
  }

  async getAll() {
    return await this.teamsRepository.findAll();
  }

  async create(dto: CreateTeamDto) {
    return await this.teamsRepository.create(dto);
  }

  async update(dto: CreateTeamDto, id: string) {
    return await this.teamsRepository.update(dto, { where: { id } });
  }

  async remove(id: string) {
    return await this.teamsRepository.destroy({ where: { id } });
  }
}
