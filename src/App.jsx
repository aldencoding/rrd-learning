import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./Template/header";
import Home from "./Organism/Home";
import About from "./Organism/About";
import HelpLayout from "./Template/HelpTemplate";
import Faq from "./Pages/Help/faq";
import Contact from "./Pages/Help/contact";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
