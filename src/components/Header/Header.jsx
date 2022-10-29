import React from 'react';
import { HeaderContainer, Nav } from './headerElements';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderContainer>
			<h1>React Redux Hello World</h1>

			<Nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : '')}
							to="/users"
						>
							Users
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : '')}
							to="/posts"
						>
							Posts
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : '')}
							to="/comments"
						>
							Comments
						</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/all">
							All
						</NavLink>
					</li>
				</ul>
			</Nav>
		</HeaderContainer>
	);
};

export default Header;
