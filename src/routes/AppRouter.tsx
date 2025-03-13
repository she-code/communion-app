import { useRoutes } from "raviger";
import Home from "../pages/landing/home";
import AppContainer from "../components/common/AppContainer";
import EventListing from "../pages/events/Events";
import AddEvent from "../components/Events/AddEvent";
import About from "../pages/about/About";
import { Suspense } from "react";
import Loading from "../components/common/loading";

export default function AppRouter(props: {
  collapsed: boolean;
  toggleCollapsedCB: () => void;
}) {
  const routes = {
    "/": () => (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
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
