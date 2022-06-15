import { Container, LinkrSlogan, LinkrTitle, RowLinkrSlogan } from "./style";

export default function LinkrPreviewBlock(){
    return (
        <Container>
            <RowLinkrSlogan>
                <LinkrTitle>linkr</LinkrTitle>
                <LinkrSlogan>save, share, and discover the best linkr on the web</LinkrSlogan>
            </RowLinkrSlogan>
        </Container>
    );
}