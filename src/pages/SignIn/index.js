import LinkrPreviewBlock from "../../components/LinkrPreviewBlock";
import LoginForm from "../../components/LoginForm";
import { Wrapper } from "./style";

export default function SignIn(){
    return (
        <Wrapper>
            <LinkrPreviewBlock />
            <LoginForm />
        </Wrapper>
    );
} 