import { Outlet } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemeProvider from "../providers/ThemeProvider";
import QueryProvider from "../providers/QueryProvider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}
