'use client';

import { Provider } from 'react-redux';
import { store } from './store/index';

export function ProviderComponent({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
