import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<nav>
				<ul className="nav-links">
					<li>
						<a href="home">Home</a>
					</li>
					<li>
						<a href="blogs">My Blogs</a>
					</li>
					<li>
						<a href="/create">Create Blog</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
