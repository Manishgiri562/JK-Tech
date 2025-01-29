import React from "react";
import BlogList from "./BlogList";
import { useSelector } from "react-redux";

const Home = () => {
      const blogs = useSelector(state => state.blog.AllBlogs);
  return <>
      <h1>Welcome to the Home Page</h1>
      <BlogList blogs={blogs} />
  </>
};

export default Home;
