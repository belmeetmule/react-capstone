import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import leaguesReducer from './League/LeaguesSlice';

// root Reducer
const rootReducer = combineReducers({
  leagues: leaguesReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
);

export default store;
