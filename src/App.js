import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import Nav from './components/Header/Nav';
import Footer from './components/Footer/Footer';
import Userpage from './components/Pages/Userpage';
import MyProfile from './components/Pages/userSettings/Myprofile';
import Usermessage from './components/Pages/userSettings/Usermessage';
import Detail from './components/Pages/Detail';
import CreateProductForm from './components/Pages/CreateAuctionForm';
import Category from './components/Pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<Userpage />}/>
          <Route path='/user/myprofile' element={<MyProfile/>}/>
          <Route path='/user/mesasge' element={<Usermessage/>}/>
          <Route path='/product/detail' element={<Detail/>}/>
          <Route path='/auction/create' element={<CreateProductForm/>}/>
          <Route path='/product' element={<Category/>}/>
          <Route path=''/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
