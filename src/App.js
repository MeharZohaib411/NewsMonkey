import "./App.css";
import Navbar from "./components/Navbar";
import Newsbox from "./components/News";

import { BrowserRouter as Router, Routes,  Route, } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Newsbox key='general' pageSize={12} country='us' category='general' />}></Route>
        <Route exact path='/business' element={<Newsbox key='business' pageSize={12} country='us' category='business' />}></Route>
        <Route exact path='/entertainment' element={<Newsbox key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
        <Route exact path='/general' element={<Newsbox key='general' pageSize={12} country='us' category='general' />}></Route>
        <Route  exact path='/health' element={<Newsbox key='health' pageSize={12} country='us' category='health' />}></Route>
        <Route exact path='/science' element={<Newsbox key='science' pageSize={12} country='us' category='science' />}></Route>
        <Route exact path='/sports' element={<Newsbox key='sports' pageSize={12} country='us' category='sports' />}></Route>
        <Route  exact path='/technology' element={<Newsbox key='technology' pageSize={12} country='us' category='technology' />}></Route>
      </Routes>
      </Router>
    
  </div>
  );
}

export default App;
