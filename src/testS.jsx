
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`  

body {
	will-change: background-position;
    margin: 0;
    padding: 0;
		min-height:100vh;
		min-width:100vw;
		background: linear-gradient(115deg, ${props => props.theme.theme.Pcolor1} 0%, ${props => props.theme.theme.Scolor1} 25%, ${props => props.theme.theme.Pcolor2} 50%, ${props => props.theme.theme.Scolor2}) no-repeat;
		background-size:400% 400%;
		z-index: -1;
    font-family: Open-Sans, Helvetica, Sans-Serif;
		animation: anim 20s infinite ease;
		display:flex;
		justify-content:center;
		align-items:center;
		text-align:center;
		flex-direction:column;
  }
	input{
		width:300px;
		height:30px;
		border:rgba(255, 255, 255, 0.05) solid 1pt;
		border-radius:30px;
		background: linear-gradient(115deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
		backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
		box-shadow: 8px 10px 24px 0 rgba( 10, 10, 10, 0.3 );
	outline:none;
	will-change: border box-shadow;
	transition: all 0.35s ease;

	}
	input:focus{
		border:2px solid rgba(179,137,239,0.75);
		box-shadow: 
		0 10px 24px 0 rgba( 10, 10, 10, 0.3 ),
		0 0 10px 0 rgba(179,137,239,0.5);
		
		
	}
	input:hover{
		
        border:2px solid rgba(179,137,239,0.75);
		box-shadow: 
		0 10px 24px 0 ${props => props.theme.theme.shadow},
		0 0 10px 0 rgba(179,137,239,0.5);
    
	}
	h1{
		
		color: transparent;
		background: ${props => props.theme.theme.Text};
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		text-shadow: 4px 4px 7px ${props => props.theme.theme.shadow};
	}

	@keyframes anim{
		0%{
			background-position: 0% 50%
		}
		50%{
			background-position: 100% 50%
		}
		100%{
			background-position: 0% 50%
		}
	}
`;
 
export default GlobalStyle;

