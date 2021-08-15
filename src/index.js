import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from './components/common/footer';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
