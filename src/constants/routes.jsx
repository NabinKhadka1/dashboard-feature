import { SvgDashboard, SvgTransaction } from "./svgs";

export const routes = [
  {
    key: "dashboard",
    path: "/",
    name: "Dashboard",
    icon: <SvgDashboard />,
  },
  {
    key: "transaction",
    path: "/transaction",
    name: "Transaction",
    icon: <SvgTransaction />,
  },
];
