import './App.css';
import Header from './Header'
import Home from './Home'
import Videos from './Videos'
import Blogs from './Blogs'
import Pictures from './Pictures'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
