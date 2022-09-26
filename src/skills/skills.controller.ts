import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Skill } from './skills.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Навыки')
// @UseGuards(JwtAuthGuard)
@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @ApiOperation({ summary: 'Получение навыка' })
  @ApiResponse({ status: 200, type: Skill })
  @Get(':id')
  get(@Param('id') id: string) {
    return this.skillsService.get(id);
  }

  @ApiOperation({ summary: 'Получение всех навыков' })
  @ApiResponse({ status: 200, type: [Skill] })
  @Get()
  getAll() {
    return this.skillsService.getAll();
  }

  @ApiOperation({ summary: 'Создание навыка' })
  @ApiResponse({ status: 200, type: Skill })
  @Post()
  create(@Body() dto: CreateSkillDto) {
    return this.skillsService.create(dto);
  }

  @ApiOperation({ summary: 'Обновление навыка' })
  @Put(':id')
  update(@Body() dto: CreateSkillDto, @Param('id') id: string) {
    return this.skillsService.update(dto, id);
  }

  @ApiOperation({ summary: 'Удаление навыка' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
