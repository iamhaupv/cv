import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
const AppRouter = () => {
    return ( 
    <Router>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    )
}
export default AppRouter