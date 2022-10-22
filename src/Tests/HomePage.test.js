import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import HomePage from '../Pages/HomePage';

describe('Testing Homepage', () => {
  it('Sould render Homepage component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <HomePage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
