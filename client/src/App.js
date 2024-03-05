import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import My from './Pages/My';
import Cb from './Pages/Cb';
import BlogDetails from './Pages/BlogDetails';

function App() {
  return (
    <>
      <Headers/>
      <Routes className="App">
      
      <Route path="/" element={<Blogs/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/my-blogs" element={<My/>}></Route>
      <Route path="/blog-details/:id" element={<BlogDetails/>}></Route>
      <Route path="/create-blogs" element={<Cb/>}/>
      
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
