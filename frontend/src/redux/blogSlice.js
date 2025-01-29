import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	AllBlogs: [
		{
			title: 'Mastering React.js',
			content:
				'React.js is a powerful UI library that makes building modern applications easy and efficient...',
			tags: ['React', 'JavaScript', 'WebDev'],
			author: 'John Doe',
		},
		{
			title: 'Understanding JavaScript Closures',
			content:
				'Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope...',
			tags: ['JavaScript', 'Closures', 'Programming'],
			author: 'Jane Smith',
		},
		{
			title: 'CSS Grid Layout',
			content:
				'CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns...',
			tags: ['CSS', 'Grid', 'WebDesign'],
			author: 'Alice Johnson',
		},
		{
			title: 'Getting Started with TypeScript',
			content:
				'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type checking...',
			tags: ['TypeScript', 'JavaScript', 'Programming'],
			author: 'Bob Brown',
		},
		{
			title: 'Building RESTful APIs with Node.js',
			content:
				"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications...",
			tags: ['Node.js', 'API', 'Backend'],
			author: 'Charlie Davis',
		},
		{
			title: 'Introduction to GraphQL',
			content:
				'GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data...',
			tags: ['GraphQL', 'API', 'Backend'],
			author: 'Diana Evans',
		},
		{
			title: 'State Management with Redux',
			content:
				'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently...',
			tags: ['Redux', 'StateManagement', 'React'],
			author: 'Eve Foster',
		},
		{
			title: 'Building Mobile Apps with React Native',
			content:
				"React Native lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native components...",
			tags: ['React Native', 'Mobile', 'JavaScript'],
			author: 'Frank Green',
		},
		{
			title: 'Introduction to Docker',
			content:
				'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure...',
			tags: ['Docker', 'DevOps', 'Containers'],
			author: 'Grace Harris',
		},
		{
			title: 'Building Serverless Applications',
			content:
				'Serverless computing allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks...',
			tags: ['Serverless', 'AWS', 'Cloud'],
			author: 'Henry Irving',
		},
	],
	userBlogs: [{
            title: 'Building Serverless Applications',
            content:
                  'Serverless computing allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks...',
            tags: ['Serverless', 'AWS', 'Cloud'],
            author: 'Henry Irving',
      }],
};
const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		setAllBlogs: (state, action) => {
			state.AllBlogs = action.payload;
		},
		setUserBlogs: (state, action) => {
			state.userBlogs = action.payload;
		},
	},
});

export const {setAllBlogs, setUserBlogs} = blogSlice.actions;
export default blogSlice.reducer;
