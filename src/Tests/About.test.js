import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import About from '../components/About';

describe('Testing About', () => {
  it('Sould render About component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <About />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
