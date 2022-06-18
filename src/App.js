import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/pages/footer/Footer';
import Home from './components/pages/homepage/Home';
import Products from './components/pages/products/Products';
import Service from './components/pages/services/Service';
import Signup from './components/pages/sign-up/Signup';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/services" exact element={<Service />} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/sign-up" exact element={<Signup />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
