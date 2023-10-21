export interface IUser {
    id: number
    name: string
    nickname: string
    email: string
    password: string
    phone: string
    created_at?: Date
    updated_at?: Date
    picture?: string
}

export type User = Omit<IUser, 'id' | 'created_at' | 'updated_at'>;

export interface IUserRepository {
    create: (user: User) => Promise<IUser>; 
    getById: (id: number) => Promise<IUser | null>;
    getByEmail: (email: string) => Promise<IUser | null>;
    getByNickname: (nickname: string) => Promise<IUser | null>;
    getByPhoneNumber: (phone: string) => Promise<IUser | null>;
}