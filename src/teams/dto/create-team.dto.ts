import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Подбор', description: 'Название команды' })
  name: string;
}
