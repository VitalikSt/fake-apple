import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar/NavBar";
import Location from "./Location/Location";
import ContactInfo from "./ContactInfo/ContactInfo";
import PhoneLink from "../common/PhoneLink";
import { black } from '../../assets/styles/variables.js'

const Header = () => {
  return (
    <>
      <HeaderTop>
        <Location />
        <NavBar />
        <PhoneLink color={ black } />
      </HeaderTop>
    </>
  );
};

export default Header;

const HeaderTop = styled.div`
	max-width: 1430px;
  padding: 0 15px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
