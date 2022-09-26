import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@ApiTags("Пользователи")
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor( private userService: UsersService ) {
    }

    @ApiOperation({summary: "Получение пользователя"})
    @ApiResponse({status: 200, type: User})
    @Get(":id")
    async get(@Param("id") id){
        return await this.userService.get(id)
    }

    @ApiOperation({summary: "Получение всех пользователей"})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create (@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

    @ApiOperation({summary: "Обновление пользователя"})
    @Put(":id")
    update (@Param("id") id, @Body() dto: CreateUserDto) {
        return this.userService.update(dto, id)
    }

    @ApiOperation({summary: "Удаление пользователя"})
    @Delete(":id")
    remove (@Param("id") id) {
        return this.userService.remove(id)
    }
}
