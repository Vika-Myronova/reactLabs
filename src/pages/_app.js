import Layout from "@/components/Layout";
import "@/app/globals.css";
import "@/components/AddCountryForm.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
