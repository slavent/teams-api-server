import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async get(id: string) {
        return this.userRepository.findOne({ where: { id }, attributes: ["email"] })
    }

    async getAllUsers() {
        return await this.userRepository.findAll({attributes:  ["email"]})
    }

    async create (dto: CreateUserDto) {
        return await this.userRepository.create(dto)
    }

    async update (dto: CreateUserDto, id: string) {
        return await this.userRepository.update(dto, {where: {id}})
    }

    async remove (id: string) {
        return await this.userRepository.destroy({where: {id}})
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}})
    }
}
