import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { budgetApi } from "./api/budget-record.ts";

const rootReducer = combineReducers({
  [budgetApi.reducerPath]: budgetApi.reducer,
});

export function createStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([budgetApi.middleware]),
  });
}

const store = createStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];

export default store;
