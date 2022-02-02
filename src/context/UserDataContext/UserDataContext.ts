import { createContext } from 'react';

import { UserDataContextType } from '../../interfaces';

export const UserDataContext = createContext<UserDataContextType>({});
