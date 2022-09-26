import { forwardRef, Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './teams.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController],
  imports: [SequelizeModule.forFeature([Team]), forwardRef(() => AuthModule)],
})
export class TeamsModule {}
