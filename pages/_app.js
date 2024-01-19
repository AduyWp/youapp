import "../styles/globals.css";
import Layout from "../src/app/Theme/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}