import { gql } from "@apollo/client"

export const SIGN_UP_ACTION = gql`
    mutation MyMutation(
        $confirmPassword: String!, 
        $email: String!, 
        $name: String!, 
        $nickname: String!, 
        $password: String!, 
        $phone: String!, 
        $picture: String
    ) {
        signUp(
            confirmPassword: $confirmPassword, 
            email: $email, 
            name: $name, 
            nickname: $nickname, 
            password: $password, 
            phone: $phone, 
            picture: $picture
        ) {
            id
        }
    }
`;