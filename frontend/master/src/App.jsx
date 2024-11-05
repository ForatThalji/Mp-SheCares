import './App.css';
import Header from './assets/Header.jsx';
import Header_2 from './assets/Header_2.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './assets/Footer.jsx';
import Test from './pages/TestSkin/Test.jsx';
import Reg from './pages/Reg/Reg.jsx';
import Flipbook from '../../flipbook-main/src/Maga/Flipbook.jsx';
import Login from './pages/Login/Login.jsx';
import Experts from './pages/Experts/Experts.jsx';
import TestSkin from './pages/TestSkin/TestSkin.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Products from './pages/Products/Products.jsx';
import Search from './pages/Search/Search.jsx';
import ProdDetails from './pages/ProdDetails/ProdDetails.jsx';
import ProdDetailshand from './pages/MarketPlace/ProdDetailshand.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import About from './pages/About/About.jsx';
import Appointment from './pages/Consultation/Appointment.jsx';
import Consuult1 from './pages/Consultation/Consuult1.jsx';
import Services from './pages/Services/Services.jsx';
import OrderRev from './pages/OrderRev/OrderRev.jsx';
import Pop from './pages/TestSkin/Pop.jsx';
import Alternative from './pages/Search/Alternative.jsx';
import AddRequest from './pages/MarketPlace/AddRequest.jsx';
import AddHandMadeProduct from './pages/MarketPlace/AddHandMadeProduct.jsx';
// import Loginasseller from './pages/MarketPlace/Loginasseller.jsx';
import Loginasseller from './pages/MarketPlace/Loginasseller.jsx';
import Bazar from './pages/MarketPlace/Bazar.jsx';
import HandMadeProducts from './pages/MarketPlace/HandMadeProducts.jsx';
import { Provider } from 'react-redux';
import store from './store';
import UserProfile from './pages/User/UserProfile.jsx';
import SkeletonLoader from '../../flipbook-main/src/Maga/SkeletonLoader';
import PayPalCheckoutButton from "./Components/PasswordStrengthBar.jsx";
// import LogoutPage from './pages/LogoutPage.jsx';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // قائمة الصفحات التي لا تريد عرض الهيدر فيها
  const hideHeaderPages = ['/'];

  return (
    <>
      <Provider store={store}>
        <div className='root'>
          {/* إظهار الهيدر إذا لم يكن المسار في قائمة الصفحات التي تريد إخفاء الهيدر فيها */}
          {!hideHeaderPages.includes(location.pathname) && <Header />}

          <Routes>
            <Route path="/Reg" element={<Reg />} />
            <Route path="/" element={<Home />} />
            <Route path="/Header_2" element={<Header_2 />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/SkeletonLoader" element={<SkeletonLoader />} />
            {/* <Route path="/LogoutPage" element={<LogoutPage />}/> */}  
            <Route path="/Loginasseller" element={<Loginasseller />} />
            <Route path="/AddHandMadeProduct" element={<AddHandMadeProduct />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/TestSkin" element={<TestSkin />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/AddRequest" element={<AddRequest />} />
            <Route path="/Bazar" element={<Bazar />} />
            <Route path="/HandMadeProducts" element={<HandMadeProducts />} />
            <Route path="/Experts" element={<Experts />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/About" element={<About />} />
            <Route path="/Flipbook" element={<Flipbook />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Consuult1" element={<Consuult1 />} />
            <Route path="/ProdDetails/:id" element={<ProdDetails />} />
            <Route path="/ProdDetailshand/:id" element={<ProdDetailshand />} />

            <Route path="/OrderRev" element={<OrderRev />} />
            <Route path="Pop" element={<Pop />} />
            <Route path="Alternative" element={<Alternative />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

// لف الوصول إلى موقع الصفحة
export default function Wrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
