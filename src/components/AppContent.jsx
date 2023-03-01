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
import Mainhome from "./Mainhome";
import Home from "./Home";
import Location from "./Location";
import Store from "./Store";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Newpost from "./Newpost";
import Salepost from "./Salepost";
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
              <Route path='/main-home' element={<Mainhome/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/location' element={<Location/>}/>
              <Route path='/store' element={<Store/>}/>
              <Route path='/notification' element={<Notifications/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/newpost' element={<Newpost/>}/>
              <Route path='/sale-post' element={<Salepost/>}/>
              
       </Routes>
      
      {/* <Newpost/> */}
      
     
      
      {/* <Location/> */}
    </>
  );
};

export default AppContent;
