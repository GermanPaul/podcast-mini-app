import { act, queryByText, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '@/store/store'
import { setIsLoading } from '@/store/slices/podcast'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header';

describe('<Header />', () => {
  it('render the component', () => {
    store.dispatch(setIsLoading(false))

    const { baseElement } = render(<Provider store={store}>
      <IntlProvider
        locale='en' 
        messages={{ HEADER_LOADING: 'Loading', HEADER_TITLE: 'Podcaster', }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    </Provider>)

    expect(baseElement).toMatchSnapshot()
  })

  it('should show loading state', async () => {
    store.dispatch(setIsLoading(true))

    render(<Provider store={store}>
      <IntlProvider
        locale='en' 
        messages={{ HEADER_LOADING: 'Loading', HEADER_TITLE: 'Podcaster', }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    </Provider>)

    expect(screen.queryByText('Loading...')).toBeInTheDocument()

    act(() => {
      store.dispatch(setIsLoading(false))
    })

    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull())
  })

  it('should display a home link', async () => {
    store.dispatch(setIsLoading(true))

    render(<Provider store={store}>
      <IntlProvider
        locale='en' 
        messages={{ HEADER_LOADING: 'Loading', HEADER_TITLE: 'Podcaster', }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    </Provider>)

    const headerLink = screen.getByRole('link')
    
    expect(headerLink).toHaveProperty('href', '/')
    expect(headerLink).toHaveTextContent('Podcaster')
  })
})
