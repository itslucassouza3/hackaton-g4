import { lazy } from "react";
import { JobListContent } from '../../components/candidateComponents/JoblistContent'
const Container = lazy(() => import("../../common/Container"));

const JobList = () => {
    return (
        <Container>
            <JobListContent />
        </Container>
    );
};

export default JobList;
