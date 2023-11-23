import React from 'react';
import NavBar from './NavBar/NavBar';
import Location from './Location/Location';
import ContactInfo from './ContactInfo/ContactInfo';
import {HeaderTop} from './Header.styled';

const Header = () => {
	
  return (
		<>
			<header>
				<HeaderTop>
					<Location />
					<NavBar />
					<ContactInfo />
				</HeaderTop>
			</header>
		</>
	)
}

export default Header;