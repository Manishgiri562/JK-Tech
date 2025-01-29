import logo from './logo.svg';
import './App.css';
import BlogInfo from './components/BlogInfo';
import BlogList from './components/BlogList';
import Header from './components/Header';
import store from './redux/store';
import { Provider, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/HomeComponent';
import MyBlogs from './components/MyBlogComp';
import BlogForm from './components/CreateBlog';
import Login from './components/LoginComponent';

function App() {
  const blogs = useSelector(state => state.blog.AllBlogs);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<MyBlogs />} />
        <Route path="/create" element={<BlogForm/>} />
        <Route path="/blog/:id" element={<BlogInfo />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;