"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var tasks_module_1 = require("./tasks/tasks.module");
var comments_module_1 = require("./comments/comments.module");
var sequelize_1 = require("@nestjs/sequelize");
var users_model_1 = require("./users/users.model");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                sequelize_1.SequelizeModule.forRoot({
                    dialect: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'slavent77',
                    database: 'pomodoro',
                    models: [users_model_1.User],
                    autoLoadModels: true
                }),
                users_module_1.UsersModule,
                tasks_module_1.TasksModule,
                comments_module_1.CommentsModule,
            ],
            controllers: [],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
