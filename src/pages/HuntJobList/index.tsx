import { lazy } from "react";
import { HuntJobListContent } from "../../components/HuntComponents/HuntJobListContent";
const Container = lazy(() => import("../../common/Container"));

const HuntJobList = () => {
    return (
        <Container>
            <HuntJobListContent />
        </Container>
    );
};

export default HuntJobList;
