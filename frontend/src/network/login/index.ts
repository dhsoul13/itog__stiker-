import { $api } from '..';

export const login = (email:string, password:string) => $api.post('/login', { email, password });
