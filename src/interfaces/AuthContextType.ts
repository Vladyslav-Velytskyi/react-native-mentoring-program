import { Dispatch } from 'react';

import { AuthStateType } from '.';

export type AuthContexType = {
  state: AuthStateType,
  dispatch: Dispatch<any>,
};
