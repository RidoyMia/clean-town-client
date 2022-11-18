import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/pages/Blog/Blog';
import Details from './Components/pages/details/Details';
import Home from './Components/pages/Home/Home';
import Mypage from './Components/pages/My-page/Mypage';
import Portfulio from './Components/pages/Portfulio/Portfulio';
import Login from './Components/pages/Register/Login';
import Register from './Components/pages/Register/Register';
import Services from './Components/pages/Services/Services';
import Treatment from './Components/pages/Treatment/Treatment';
import Footer from './Components/Shred/footer/Footer';
import Header from './Components/Shred/Header/Header';
import Privet from './Components/Shred/Privet/Privet';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={
          <Privet>
            <Services></Services>
          </Privet>
        }></Route>
        <Route path='/my-requested' element={<Mypage></Mypage>}></Route>
        <Route path='/causes/:id' element={<Details></Details>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/treatment' element={<Treatment></Treatment>}></Route>
        <Route path='/portfulio' element={<Portfulio></Portfulio>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/portfulio' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
