import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.conponent';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
// import SignIn from './routes/sign-in/sign-in.conponent';

const Shop = () => {
	return(
		<h1>Shop</h1>
	)
}

const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation/>}>
				<Route index element={<Home/>}/>
				<Route path='shop' element={<Shop/>} />
				<Route path='auth' element={<Authentication/>} />
			</Route>
		</Routes>
  );
}

export default App;
