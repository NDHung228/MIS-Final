import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ShoesListPage from "./pages/ShoesListPage"
import ShoesDetail from "./pages/ShoesDetail"
import Account from "./pages/Account"
import OrderDetail from "./pages/OrderDetail"
import Auth from "./pages/Auth"
import AboutUsPage from "./pages/AboutUsPage"
import TradeIn from "./pages/TradeIn"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/shoes/2hand" element={<ShoesListPage />} />
        <Route path="/shoes/new" element={<ShoesListPage />} />
        <Route path="/shoes/trade-in" element={<TradeIn />} />
        <Route path="/shoes/id" element={<ShoesDetail />} />
        <Route path="/account-manage" element={<Account />} />
        <Route path="/account-manage/your-order/id" element={<OrderDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
