/** @format */
"use client";
import { persistor, store } from "@/redux/store";
import { SonnerToaster } from "@packages/_shared";
import Toaster from "@packages/_shared/toaster";
import { useToastManager } from "@packages/_shared/toaster/toaster-provider";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { toastConfig, clearToast } = useToastManager();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SonnerToaster />
        {children}
        {toastConfig && <Toaster config={toastConfig} onClose={clearToast} />}
      </PersistGate>
    </Provider>
  );
};

export default AppLayout;
