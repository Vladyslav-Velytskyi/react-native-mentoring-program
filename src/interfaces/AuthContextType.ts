export type AuthContexType = {
  state: {
    isLoading: boolean,
    isSignout: boolean,
    userToken: string | null,
  },
  signIn: (data: any) => Promise<void>,
  signOut: () => void,
  signUp: (data: any) => Promise<void>,
};
