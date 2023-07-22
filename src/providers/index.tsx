import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import en from '@/lang/en.json'

import { Provider } from 'react-redux';
import { store } from '@/store/store'

type AppProviderProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 60 * 24 // 24 hours
    }
  }
})

const messages = {
  en
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <Provider store={store}>
    <IntlProvider locale="en" messages={messages['en']}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </IntlProvider>
  </Provider>
)
