import React from 'react';
import UserInfo from '../user/user-info';
import UserAbout from '../user/user-about';
import { User } from '../../models';
import './styles.scss';

const user: User = {
	name: 'Victor Juliani',
	job: 'Software Engineer and Web Developer in São Carlos, SP, Brasil',
	description: `
		Greetings, I’m Victor. I’m a software engineer living in São Carlos, SP, Brasil.
		I am a fan of technology, design, and web development.
		I’m also interested in movies and sports.
		You can view my repo with a click on the button above.
	`,
	repo: 'https://github.com/VictorJuliani/about-me',
	imgs: [ '/img/user.png', '/img/user2.png', '/img/user3.png' ]
}

const App: React.FC = () => {
	return (
		<div className="container">
			<div className="user-card">
				<UserInfo user={user} />
				<UserAbout user={user} />
			</div>
		</div>
	)
}

export default App;
