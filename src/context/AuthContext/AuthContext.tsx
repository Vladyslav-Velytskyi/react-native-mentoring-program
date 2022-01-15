import { createContext } from 'react';

import { AuthContexType } from '../../interfaces';

export const AuthContext = createContext<AuthContexType>({});
