import Home from "./pages/Home";
import Category from "./pages/Category";
import Navegation from "./components/Navegation";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="bg-light text-dark min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">FakeStore</Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
              <Navegation />
            </div>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
