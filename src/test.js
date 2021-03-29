import React, {useState} from 'react';
function App() {
	const [test, setTest] = useState(undefined)

  return (
    <>
			<input onChange={(e)=>{setTest(e.target.value)}}/>
			<h1>{test}</h1>
		</>
  );
}

export default App;