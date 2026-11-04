import { Outlet } from "react-router-dom";
import ScrollToTop from "../componets/ScrollToTop";


export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}