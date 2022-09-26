import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Team, TeamSkills } from '../teams/teams.model';

interface SkillCreateAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'skills' })
export class Skill extends Model<Skill, SkillCreateAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Сила',
    description: 'Название навыка',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Измеряется в нютонах',
    description: 'Описание навыка',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Team, () => TeamSkills)
  teams: Team[];
}
