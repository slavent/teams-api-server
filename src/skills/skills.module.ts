import { forwardRef, Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Skill } from './skills.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [SkillsService],
  controllers: [SkillsController],
  imports: [SequelizeModule.forFeature([Skill]), forwardRef(() => AuthModule)],
})
export class SkillsModule {}
