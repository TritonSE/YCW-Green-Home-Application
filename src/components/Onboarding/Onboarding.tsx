import React, { Fragment, useEffect, useState } from "react";
import Page1 from "./Onboarding-page1";
import Page2 from "./Onboarding-page2";

const Onboarding = () => {
  const [page, setPage] = useState("page1");
  const [homeData, setHomeData] = useState({});

  return (
    <Fragment>
      {page === "page1" && (
        <Page1
          setPage={setPage}
          setHomeData={setHomeData}
          homeData={homeData}
        />
      )}
      {page === "page2" && (
        <Page2 setPage={setPage} setHomeData={setHomeData} />
      )}
    </Fragment>
  );
};

export default Onboarding;
