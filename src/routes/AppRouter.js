import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
const AppRouter = () => {
    return ( 
    <Router>
        <Routes>
            <Route index path="/cv" element={<Home />} />
        </Routes>
    </Router>
    )
}
export default AppRouter