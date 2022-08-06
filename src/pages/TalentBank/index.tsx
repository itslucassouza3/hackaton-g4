import { lazy } from "react";
import TalentBankContent from "../../components/HuntComponents/TalentBankContent";
const Container = lazy(() => import("../../common/Container"));

const TalentBank = () => {
    return (
        <Container>
            <TalentBankContent />
        </Container>
    );
};

export default TalentBank;
