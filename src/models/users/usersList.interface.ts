import { UserInterface } from './user.interface';
export interface UsersListInterface {
    name:string,
    users: Array<Array<UserInterface>>
}