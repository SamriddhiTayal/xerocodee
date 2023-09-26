// import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Content from './components/Content';

function App() {
	return (
		<div>
			<Header />
			<div className='flex'>
				<List />
				<Content />
			</div>
		</div>
	);
}

export default App;
