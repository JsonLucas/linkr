import { Wrapper } from "../SignIn/style";
import LinkrPreviewBlock from '../../components/LinkrPreviewBlock';
import SignUpForm from "../../components/SignUpForm";
export default function SignUp(){
    return (
        <Wrapper>
            <LinkrPreviewBlock />
            <SignUpForm />
        </Wrapper>
    );
}