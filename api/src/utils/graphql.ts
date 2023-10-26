import axios from "axios";
import { ASTNode, print } from "graphql";


export default async function hasuraAdminRequest(query: ASTNode, variables: Object) {

    return await axios.post(
        process.env.HASURA_URL!,
        {
            query: print(query),
            variables
        },
        {
            headers: {
                'Content-Type': 'application/json',
                // 'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET!
            }
        }
    )

}