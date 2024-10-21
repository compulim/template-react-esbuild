import { createContext, type Dispatch, type SetStateAction } from 'react';

export type AppContextType = Readonly<{
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}>;

const AppContext = createContext<AppContextType>(
  new Proxy({} as AppContextType, {
    get() {
      throw new Error('This hook can only be used under <AppProvider>.');
    }
  })
);

export default AppContext;
