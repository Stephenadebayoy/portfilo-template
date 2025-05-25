/** @format */

import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  AnyAction,
  ConfigureStoreOptions,
  Reducer,
  configureStore,
} from "@reduxjs/toolkit";
import appReducer from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/auth";
import { api } from "@/services/api/app.api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "tab"],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const reducer = persistedReducer as Reducer<
  ReturnType<typeof persistedReducer>,
  AnyAction
>;

const rootReducer = (
  state: ReturnType<typeof persistedReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === logout.type) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};
const createStore = (options?: ConfigureStoreOptions["preloadedState"]) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PURGE, PAUSE, PERSIST, REGISTER],
        },
      }).concat([api.middleware]),
    ...options,
  });

export const store = createStore();
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useTemplateDispatch: () => AppDispatch = useDispatch;
export const useTemplateSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppStore = ReturnType<typeof createStore>;
