import store from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Layout from "../components/layout";
import ColorSwitcher from "../components/ColorSwitcher";
import Seo from "../components/Seo";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";

let persistor = persistStore(store);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Seo />
        <PersistGate loading={null} persistor={persistor}>
          <ColorSwitcher />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
