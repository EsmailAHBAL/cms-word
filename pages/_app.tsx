import { AppProps } from "next/app";
import "../styles/index.css";
import { NextPageContext } from "next";
import { Provider } from "react-redux";
import "keen-slider/keen-slider.min.css";
import { store } from "../redux/store";
import AppContext from "../lib/app.context";
import {
  getAllCategories,
  getAllCategoriesOfCars,
  getAllPostsForHome,
} from "../lib/api";
import preview from "./api/preview";
import "bulma/css/bulma.css";
import { Josefin_Sans } from "next/font/google";
const Font = Josefin_Sans({
  weight: "400",
  subsets: ["latin-ext"],
});
function MyApp({ Component, pageProps, data }) {
  return (
    <Provider store={store}>
      <AppContext.Provider value={{ categories: data }}>
        <div className={Font.className}>
          <Component {...pageProps} />
        </div>
      </AppContext.Provider>
    </Provider>
  );
}
MyApp.getInitialProps = async (_ctx: NextPageContext) => {
  const all: any[] = await getAllCategories(preview);
  const cars = await getAllCategoriesOfCars(preview);
  const sidePost = await getAllPostsForHome(preview);

  return { data: { all, cars, sidePost: sidePost.edges.slice(6) } };
};

export default MyApp;
