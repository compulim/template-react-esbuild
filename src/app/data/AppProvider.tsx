import { memo, useMemo, useState, type ReactNode } from 'react';

import AppContext, { type AppContextType } from './private/AppContext';

type AppProviderProps = Readonly<{
  children?: ReactNode | undefined;
}>;

const AppProvider = memo(({ children }: AppProviderProps) => {
  const [value, setValue] = useState<string>('');

  const context = useMemo<AppContextType>(() => Object.freeze({ setValue, value }), [setValue, value]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
});

export default memo(AppProvider);
