import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProuctCartPage from "./page/ProuctCartPage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import SearchPage from "./page/SearchPage";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProuctCartPage />,
      },
   
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router