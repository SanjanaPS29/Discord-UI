import "./App.css";
import Header from "./layouts/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        {
        routes?.map(({ path, element }) => (
          <Route key={path} exact path={path} element={element} />
        ))
        }
      </Routes>
      {/* footer changes */}
      {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
