import { lazy } from "react";

import { HomeContent } from "../../components/HomeContent";

const Container = lazy(() => import("../../common/Container"));

const Home = () => {
  return (
    <Container>
      <HomeContent />
    </Container>
  );
};

export default Home;
