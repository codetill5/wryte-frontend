import Layout from "../components/layout";
import ColorSwitcher from "../components/ColorSwitcher";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ColorSwitcher />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
