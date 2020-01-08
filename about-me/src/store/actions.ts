import { Action } from 'redux';
import { User, NewUser } from '../models';

export type UserAction = Action<string> & { payload: User };

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LIKE_USER = 'LIKE_USER';

export function addUser(user: NewUser) {
    return {
        type: ADD_USER,
        payload: user
    };
}

export function updateUser(user: User) {
    return {
        type: UPDATE_USER,
        payload: user
    };
}

export function likeUser(user: User) {
    return {
        type: LIKE_USER,
        payload: user
    };
}
