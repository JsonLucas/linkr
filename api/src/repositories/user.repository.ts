import { prisma } from "src/constants/prisma";
import { IUser, IUserRepository, User } from "src/entities/user";

export class UserRepository implements IUserRepository {
    async create (user: User): Promise<IUser> {
        return await prisma.users.create({ data: user });
    }

    async getById (id: number): Promise<IUser | null> {
        return await prisma.users.findUnique({ where: { id } });
    }
    
    async getByEmail (email: string): Promise<IUser | null> {
        return await prisma.users.findUnique({ where: { email } });
    }
    
    async getByNickname (nickname: string): Promise<IUser | null> {
        return await prisma.users.findUnique({ where: { nickname } });
    }
    
    async getByPhoneNumber (phone: string): Promise<IUser | null> {
        return await prisma.users.findUnique({ where: { phone } });
    }
}