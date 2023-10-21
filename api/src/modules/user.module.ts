import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { UserRepository } from "src/repositories/user.repository";
import { UserService } from "src/services/user.service";

@Module({
    imports: [UserRepository],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}