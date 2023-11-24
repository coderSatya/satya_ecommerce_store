import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <div>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
      </Provider>
    </div>
  );
}
