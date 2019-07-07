import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	appHeader: {
		textAlign: 'center',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

function App() {
	const classes = useStyles()
  return (
    <div>
      <header className={classes.appHeader}>
				<h2>Experiments in React</h2>
				<p>A personal playground for trying new things in React.js</p>
      </header>
    </div>
  );
}

export default App;
