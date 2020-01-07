export interface NewUser {
    id: number;
    name: string;
    job: string;
    description: string;
    imgs: string[];
    repo: string;
}

export interface User extends NewUser {
    id: number;
}