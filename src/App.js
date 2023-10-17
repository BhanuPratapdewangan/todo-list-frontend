
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp.js';
import SingIn from './component/SignIn/SingIn.js';
import HomeComponent from './component/HomeComponent/HomeComponent.js';
import InvalidComponent from './component/InvalidComponent/InvalidComponent.js';
import LandingComponent from './component/LandingComponent/LandingComponent.js';
import PrivateComponent from './component/PrivateComponent/PrivateComponent.js';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <LandingComponent />
        <Routes className="">

          <Route element={<PrivateComponent />}>
            {/* <Route path="/" element={<SingIn />}></Route> */}
            <Route path='home' element={<HomeComponent />}></Route>
            <Route path='invalid' element={<InvalidComponent />}></Route>
          </Route>

          <Route path="signin" element={<SingIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
