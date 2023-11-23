import React from 'react';
import {LocationWrapper} from './Location.styled';

const Location = () => {
	
  return (
		<>
			<LocationWrapper>
				<img src="public/Images/location.svg" alt="location" />
				<span>Київ</span>
				<img src="public/Images/down-icon.svg" alt="arrow" />
			</LocationWrapper>
		</>
	)
}

export default Location;