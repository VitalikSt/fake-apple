import React from 'react';
import styled, { css } from 'styled-components';

const PhoneLink = ({ small, medium }) =>
	<Phone href="tel:+380800307775" color={ color }>0 800 30 777 5</Phone>

export default PhoneLink;

const Phone = styled.a`
	font-size: 13px;
	font-weight: 600;
	line-height: 12px;
  color: #${props => props.color && `${color}` || '999'}
`;