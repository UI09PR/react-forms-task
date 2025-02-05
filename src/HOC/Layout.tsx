import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 rounded w-full mb-6">
      <Outlet />
    </div>
  );
};

export default Layout;
