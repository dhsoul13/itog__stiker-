import { $api } from '..';

export const logout = () => $api.post('/logout');
