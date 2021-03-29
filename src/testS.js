
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`  

body {
    margin: 0;
    padding: 0;
		min-height:100vh;
		min-width:100vw;
		background: linear-gradient(115deg, rgb(171, 196, 255) 0%, rgb(237, 242, 251) 25%, rgb(239, 183, 234) 50%, rgb(249, 231, 187) 100%) no-repeat;
		background-size:400% 400%;
		z-index: -1;
    font-family: Open-Sans, Helvetica, Sans-Serif;
		animation: anim 25s infinite ease;
		display:flex;
		justify-content:center;
		align-items:center;
		text-align:center;
		flex-direction:column;
  }
	input{
		width:300px;
		height:30px;
		border-radius:8px;
		border: 2px solid rgba( 255, 255, 255, 0.15 );
		background: linear-gradient(115deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
		backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
		box-shadow: 8px 10px 24px 0 rgba( 10, 10, 10, 0.3 );
	outline:none;
	transition: all 0.35s ease;

	}
	&:focus{
		border:2px solid rgba(179,137,239,0.75);
		box-shadow: 
		0 10px 24px 0 rgba( 10, 10, 10, 0.3 ),
		0 0 10px 0 rgba(179,137,239,0.5);
		
		
	}
	h1{
		
		color: transparent;
		background: linear-gradient(115deg, #10002b, #c19ee0);
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		text-shadow: 4px 4px 7px rgba(10, 10, 10, 0.4);
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

