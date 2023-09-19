import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from "./Layout";
import { About, Contact, Gallery } from "../pages";

const App = () => {

  const routes = [
    {
      path: "",
      element: <Layout/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "galerie",
      element: <Gallery/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)}/>;
};

export default App;
