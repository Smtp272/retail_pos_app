import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter,
    Route,
    Routes,
    Redirect,
    Navigate,
} from "react-router-dom";

import CartItems from "./components/cart/CartItems";
import Products from "./components/Products/Products";
import SideBar from "./components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/pages/NotFound";
import HomePage from "./components/pages/HomePage";
import AnalyticsPage from "./components/pages/AnalyticsPage";
import DashboardPage from "./components/pages/DashboardPage";

function App() {
    return (
        <div className="App">            
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<DashboardPage/>} />          
                    <Route path="/analytics" element={<AnalyticsPage/>} />          
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/home" element={<Navigate to="/"/>} />
                    <Route path="/not-found" element={<NotFound/>} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
