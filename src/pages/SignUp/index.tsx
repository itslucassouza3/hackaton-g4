import { lazy } from "react";
import { SignUpContent } from "../../components/candidateComponents/SignUp";

const Container = lazy(() => import("../../common/Container"));


function SignUp() {
    return (
        <Container>
            <SignUpContent />
        </Container>
    )
}

export default SignUp;