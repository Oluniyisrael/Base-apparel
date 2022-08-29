import './App.css';
import About from './Components/About/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from './Pages/Page';

function App() {
   
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
