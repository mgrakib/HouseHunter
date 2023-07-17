
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

function App() {
  
  return (
		<>
			<div className='border-b'>
				<Container>
					<NavBar />
				</Container>
			</div>
			<Outlet />
		</>
  );
}

export default App
