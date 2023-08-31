import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Authentication */
import getAuth from "./api/authentication";
import { NotAuthenticated } from "./middlewares/authentication";
/* ContectProvider */
import GlobalProvider from "./context/Global/GlobalProvider";
import IdentificationProvider from "./context/Identification/IdentificationProvider";
/* Componentes */
import Home from "./components/Home/Home";
import Ingresante from "./components/Accounts/Identification/Ingresante";
import Rector from "./components/Accounts/Identification/Ingresante";
import AccountSettings from "./components/Accounts/AccountSettings";
import HighlightList from "./components/ListaDeInteres/HighlightList";
import Mapa from "./components/Mapa/Mapa";

const router = createBrowserRouter([
  {
    path: "/",
    Component: GlobalProvider,
    children: [
      { index: true, Component: Home },
      {
        path: "/identificacion/",
        loader: async () => await getAuth(),
        Component: NotAuthenticated,
        children: [
          {
            path: "ingresante",
            Component: IdentificationProvider,
            children: [{ index: true, Component: Ingresante }],
          },
          {
            path: "rector",
            Component: IdentificationProvider,
            children: [{ index: true, Component: Rector }],
          },
        ],
      },
      { path: "/configuracion", Component: AccountSettings },
      { path: "/mapa", Component: Mapa },
      { path: "/listainteres", Component: HighlightList },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
