import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/navbar';
import Home from '../components/home';
import Bydefault from '../components/byDefault';
import Detail from '../components/detail';
import homeSlice from '../redux/home/homeSlice';
import deatilSlice from '../redux/detail/detailSlice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    detail: deatilSlice.reducer,
  },
});

describe('All components tests', () => {
  it('Navbar component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Bydefault component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Bydefault />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Detail component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Detail />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
