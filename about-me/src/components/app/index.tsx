import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../store';
import UserList from '../user/user-list';
import UserCreate from '../user/user-create';
import UserProfile from '../user/user-profile';
import './styles.scss';

const App: React.FC = () => {
	return (
        <Provider store={store}>
			<Router>
				<div>
					<nav>
						<ul>
							<li><Link to="/users/new">New User</Link></li>
							<li><Link to="/">Users</Link></li>
						</ul>
					</nav>
	
					{/* A <Switch> looks through its children <Route>s and
					renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/users/new">
							<UserCreate />
						</Route>
						<Route path="/users/:userId">
							<UserProfile />
						</Route>
						<Route path="*">
							<UserList />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}

export default App;
