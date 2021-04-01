import React from 'react'
import ReactDOM from 'react-dom'
import App from "./test"
import Global from "./testS.js"

ReactDOM.render(
  <React.StrictMode>
	<Global/>
		<App/>
  </React.StrictMode>,
  document.getElementById('root')
)