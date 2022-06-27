import { $api } from '..';

export const registration = (email:string, password:string, name:string) => $api.post('/register', { email, name, password });
