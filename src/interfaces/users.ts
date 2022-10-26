export interface IUsers{
	id?: number,
	nickname: string, 
	email: string,
	password: string,
	picture?: string,
	createdAt?: Date,
	updatedAt?: Date
}

export type SignUp = Omit<IUsers, 'createdAt' | 'updatedAt' | 'id'> & { confirmPassword: string };
export type SignIn = Pick<IUsers, 'email' | 'password'>;