import { Outlet } from "react-router-dom";
import Header from "../headers";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
