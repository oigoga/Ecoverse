import React from "react";
import { Route, Routes} from "react-router-dom";
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
  
      <Routes>

      <Route path='/' element={<Onboarding1/>}/>
              <Route path='/message2' element={<Onboarding2/>}/>
              <Route path='/message3' element={<Onboarding3/>}/>
              <Route path='/message4' element={<Onboarding4/>}/>
              <Route path='/sign-up' element={<Signup/>}/>
              <Route path='/sign-in' element={<Signin/>}/>
              <Route path='/verification' element={<Signupverification/>}/>
              <Route path='/qna1' element={<QnA/>}/>
              <Route path='/qna2' element={<QnA2/>}/>
              <Route path='/qna3' element={<QnA3/>}/>
              <Route path='/forgot-password1' element={<Forgotpassword1/>}/>
              <Route path='/forgot-password2' element={<Forgotpassword2/>}/>
              
       </Routes>
      
      
      
     
      
      {/* <Location/> */}
    </>
  );
};

export default AppContent;
