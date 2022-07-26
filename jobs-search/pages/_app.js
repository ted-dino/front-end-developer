import "../styles/globals.css";
import Layout from "../components/layout";
import { JobProvider } from "../src/JobContext";

function MyApp({ Component, pageProps }) {
  return (
    <JobProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </JobProvider>
  );
}

export default MyApp;
