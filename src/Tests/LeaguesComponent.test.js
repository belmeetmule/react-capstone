import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import LeaguesComponent from '../components/Leagues/LeaguesComponent';
import store from '../Redux/configureStore';

describe('Testing Leagues component', () => {
  it('Should render Leagues', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <LeaguesComponent />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
