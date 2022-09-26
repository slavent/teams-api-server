import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto {
  @ApiProperty({ example: 'Сила', description: 'Название навыка' })
  name: string;

  @ApiProperty({
    example: 'Измеряется в нютонах',
    description: 'Описание навыка',
  })
  description: string;
}
