import { lazy } from "react";
import { ProfileContent } from "../../components/candidateComponents/Profile";

const Container = lazy(() => import("../../common/Container"));


function Profile() {
    return (
        <Container>
            <ProfileContent />
        </Container>
    )
}

export default Profile;