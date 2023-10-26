import { Controller, Post, Request as Req, Response as Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('user')
export class UserController {
    constructor() { }

    @Post('sign-up')
    async signUp(@Req() req: Request, @Res() res: Response) {
        const { input } = req.body;
        console.log(req.body);
        res.status(200).send({ id: 1 })
    }
}