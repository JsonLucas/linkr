import { Module } from "@nestjs/common";
import { Crypto } from "src/common/crypto";
import { AuthToken } from "src/common/token";
import { UserController } from "src/controllers/user.controller";

@Module({
    imports: [Crypto, AuthToken],
    providers: [],
    controllers: [UserController]
})
export class UserModule {}