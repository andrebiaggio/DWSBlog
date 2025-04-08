import { Outlet } from "react-router-dom";

import "./styles.scss";
import { Header } from "../../core";

const DefaultLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
