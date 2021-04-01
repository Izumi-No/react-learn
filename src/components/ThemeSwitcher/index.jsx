import React from 'react';
import styled from 'styled-components';

const Style = styled.button`
    position:fixed;
    top:5px;
    left:5px;
    color:rgb(117, 117, 117);
    width: 100px;
    height: 50px;
    border-radius: 30px;
    border: rgba(255, 255, 255, 0.05) solid 1pt;
		background: linear-gradient(115deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
		backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
		box-shadow: 8px 10px 16px 0 ${props => props.theme.theme.shadow};
	outline:none;
	will-change: border box-shadow;
	transition: all 0.35s ease;
    :hover{
        border:2px solid rgba(179,137,239,0.75);
		box-shadow: 
		0 10px 16px 0 ${props => props.theme.theme.shadow},
		0 0 10px 0 rgba(179,137,239,0.5);
    }
`



const ThemeSwitcher = ({ sla, men }) => {

    return (
        <>
            <Style onClick={sla} >
            {men}
            </Style>
        </>
    );
}

export default ThemeSwitcher;
