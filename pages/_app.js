import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
