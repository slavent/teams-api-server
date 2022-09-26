import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Skill } from '../skills/skills.model';

interface TeamCreateAttrs {
  name: string;
}

@Table({ tableName: 'teams' })
export class Team extends Model<Team, TeamCreateAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Подбор',
    description: 'Название команды',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Skill, () => TeamSkills)
  skills: Skill[];
}

@Table({ tableName: 'teams_skills' })
export class TeamSkills extends Model {
  @ForeignKey(() => Team)
  @Column
  teamId: number;

  @ForeignKey(() => Skill)
  @Column
  skillId: number;
}
