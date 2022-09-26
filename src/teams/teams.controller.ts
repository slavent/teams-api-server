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
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Team } from './teams.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Команды')
// @UseGuards(JwtAuthGuard)
@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @ApiOperation({ summary: 'Получение команды' })
  @ApiResponse({ status: 200, type: Team })
  @Get(':id')
  get(@Param('id') id: string) {
    return this.teamsService.get(id);
  }

  @ApiOperation({ summary: 'Получение всех команд' })
  @ApiResponse({ status: 200, type: [Team] })
  @Get()
  getAll() {
    return this.teamsService.getAll();
  }

  @ApiOperation({ summary: 'Создание команды' })
  @ApiResponse({ status: 200, type: Team })
  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamsService.create(dto);
  }

  @ApiOperation({ summary: 'Обновление команды' })
  @Put(':id')
  update(@Body() dto: CreateTeamDto, @Param('id') id: string) {
    return this.teamsService.update(dto, id);
  }

  @ApiOperation({ summary: 'Удаление команды' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
