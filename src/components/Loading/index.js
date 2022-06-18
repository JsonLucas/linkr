import { LoadingIconSection } from "./style";
import { ThreeCircles } from 'react-loader-spinner';

export default function Loading () {
    return (
        <LoadingIconSection>
            <div>
                <ThreeCircles color='#FFFFFF' width={50} height={50} />
            </div>
        </LoadingIconSection>
    );
}