import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "slav@mail.ru", description: "Email"})
    readonly email: string;

    @ApiProperty({example: "123456", description: "Пароль"})
    readonly password: string;
}
