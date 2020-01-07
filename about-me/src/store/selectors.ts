import { createSelector } from 'reselect';
import { UsersState } from './reducers';

const selectUserId = (state: UsersState, userId: number) => userId;  
export const getUsers = (state: UsersState) => state.users;
export const getUser = createSelector(
    [getUsers, selectUserId],
    (users, userId) => users.find(u => u.id === userId)
)