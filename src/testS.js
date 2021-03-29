// globalStyles.js
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
		border: 2px solid rgba( 255, 255, 255, 0.25 );
		background: linear-gradient(115deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
		backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
		box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.37 );
	outline:none;
	transition: all 0.35s ease;

	}&:placeholder{
		
	}
	&:focus{
		border:2px solid rgba(179,137,239,0.75);
		transition: all 0.35s ease;
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

