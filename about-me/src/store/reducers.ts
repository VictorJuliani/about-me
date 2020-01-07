import { combineReducers } from 'redux';
import { User } from "../models";
import { ADD_USER, UPDATE_USER, UserAction } from "./actions";

let nextUserId = 1;
export type UsersState = Readonly<{
    users: ReadonlyArray<User>;
}>;

const user: User = {
    id: nextUserId++,
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
};

const initialState: UsersState = {
    users: [ user ]
};

export default combineReducers<UsersState, UserAction>({
    users: (state = initialState.users, action: UserAction) => {
        switch (action.type) {
            case ADD_USER:
                const user = {
                    ...action.payload,
                    id: nextUserId++
                };
                return [ ...state, user ];

            case UPDATE_USER:
                return state.map(user =>
                    user.id === action.payload.id ? action.payload : user
                );

            default:
                return state;
        }
    }
});