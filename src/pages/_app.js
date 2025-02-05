import Layout from "@/components/Layout";
import "@/app/globals.css";
import "@/styles/AddCountryForm.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
