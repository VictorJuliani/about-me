import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import {
	Layout
} from 'antd';
import { store } from '../../store';
import UserList from '../user/user-list';
import UserCreate from '../user/user-create';
import UserProfile from '../user/user-profile';
import './styles.scss';
import Menu from '../menu';

const App: React.FC = () => {
	return (
        <Provider store={store}>
			<Router>
				<Layout>
					<Layout.Header className="header">
						<Menu />
					</Layout.Header>
					{/* A <Switch> looks through its children <Route>s and
					renders the first one that matches the current URL. */}
					<Layout.Content style={{ padding: '25px' }}>
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
					</Layout.Content>
				</Layout>
			</Router>
		</Provider>
	)
}

export default App;
