import { Request, Response, Get, Post, Put, Controller } from "@nestjs/common";


@Controller('user')
export class UserController {
    constructor(){}

    @Post('sign-in')
    async signIn(@Request() req, @Response() res) {
        const { body } = req;
    }

    @Post('sign-up')
    async signUp(@Request() req, @Response() res) {
        const { body } = req;
    }
}

