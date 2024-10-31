import { BrowserRouter as Router } from "react-router-dom"
import Paths from "../routes/routes"
import NavBar from "../templates/navbar/NavBar.jsx"

function App() {
    return (
        <Router>
            <NavBar />
            <Paths />
        </Router>       
    )
}

export default App