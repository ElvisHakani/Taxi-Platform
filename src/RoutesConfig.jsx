import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx'
import MainView from "./views/MainView.jsx";
import Reserve from "./components/Reserve.jsx";
import Register from "./components/Register.jsx";
import Contact from "./components/Contact.jsx";
import AdminView from "./views/AdminView.jsx";
import About from "./components/About.jsx";
import Order from "./components/Order.jsx";
import AdminInfo from "./components/AdminInfo.jsx";
import AdminTaxi from "./components/AdminTaxi.jsx";
import TaxiCard from "./components/TaxiCard.jsx";
import Luxury from "./components/Luxury.jsx";
import Common from "./components/Common.jsx";
import Economic from "./components/Economic.jsx";
import AdminSearch from "./components/AdminSearch.jsx";
import AddTaxiForm from "./components/AddTaxiForm.jsx";
import Ordered from "./components/Ordered.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<MainView />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<AdminView />}>
                <Route path="info" element={<AdminInfo />} />
                <Route path="taxis" element={<AdminTaxi />} />
                <Route path="search" element={<AdminSearch />} />
                <Route path="addtaxi" element={<AddTaxiForm />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="ordered" element={<Ordered />} />
            <Route path="order" element={<Order />}>
                <Route path="VIP" element={<TaxiCard />} />
                <Route path="luxury" element={<Luxury />} />
                <Route path="common" element={<Common />} />
                <Route path="economic" element={<Economic />} />
            </Route>
        </Route>
    )
)