import "./App.css";
import Header from "./layouts/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

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
    </div>
    </Router>
  );
}

export default App;