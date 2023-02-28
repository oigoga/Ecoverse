import React from "react";

import Onboarding1 from "./onboardingscreen1"
import Onboarding2 from "./onboardingscreen2";
import Onboarding3 from "./onboardingscreen3";
import Onboarding4 from "./onboardingscreen4";
import Signup from "./Signup";
import Signupverification from "./Signupverification";
import QnA from "./Qna1";
import QnA2 from "./Qna2"
import QnA3 from "./Qna3"
import Signin from "./Signin";
import Forgotpassword1 from "./Forgotpassword1";
import Forgotpassword2 from "./Forgotpassword2";
import Location from "./Location";
const AppContent = () => {
  return (
    <>
      <Onboarding1 />
      <Onboarding2 />
      <Onboarding3 />
      <Onboarding4 />
      <Signup />
      <Signupverification />
      <QnA/>
      <QnA2/>
      <QnA3/>
      <Signin/>
      <Forgotpassword1/>
      <Forgotpassword2/>
      <Location/>
    </>
  );
};

export default AppContent;
