import { gql } from 'graphql-tag';

export const CREATE_USER = gql`
    mutation MyMutation($object: users_insert_input!) {
        insert_users_one(object: $object) {
            id
        }
    }
`;