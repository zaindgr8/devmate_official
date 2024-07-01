import React from "react";
import SEO from "../common/seo";
import HomeThree from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"DEVMATE"} />
       <HomeThree />
    </Wrapper>
  );
};

export default Home;
