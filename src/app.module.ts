import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Skill } from './skills/skills.model';
import { SkillsModule } from './skills/skills.module';
import { Team, TeamSkills } from './teams/teams.model';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: +process.env.PG_PORT,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [User, Skill, Team, TeamSkills],
      autoLoadModels: true,
    }),
    UsersModule,
    SkillsModule,
    TeamsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
