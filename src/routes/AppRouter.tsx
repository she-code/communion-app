import { useRoutes } from "raviger";
import Home from "../pages/landing/home";
import AppContainer from "../components/common/AppContainer";
import EventListing from "../pages/events/Events";
import AddEvent from "../components/Events/AddEvent";
import About from "../pages/about/About";

export default function AppRouter(props: {
  collapsed: boolean;
  toggleCollapsedCB: () => void;
}) {
  const routes = {
    "/": () => <Home />,
    "/events": () => <EventListing />,
    "/about": () => <About />,

    "/add-event": () => <AddEvent />,
  };

  const routeResult = useRoutes(routes);
  // useAuthentication();
  const { collapsed, toggleCollapsedCB } = props;
  return (
    <AppContainer collapsed={collapsed} toggleSidebar={toggleCollapsedCB}>
      {routeResult}
    </AppContainer>
  );
}
