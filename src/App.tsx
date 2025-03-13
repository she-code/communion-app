import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
// import CursorFollow from "./components/common/CursorFollow";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={` w-full bg-customBackground  m-0 overflow-hidden `}>
      {/* <CursorFollow /> */}
      <AppRouter collapsed={collapsed} toggleCollapsedCB={toggleSidebar} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
