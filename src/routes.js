import React from "react";
//const ButtonLoadingSpinner = React.lazy(() =>
  //import("pages/ButtonLoadingSpinner")
//);
//const HooksDemo = React.lazy(() => import("pages/HooksDemo"));

const InfiniteScrolling = React.lazy(() => import("pages/InfiniteScrolling"));
const ReactBasics = React.lazy(() => import("pages/ReactBasics"));
const AppsLibrary = React.lazy(() => import("pages/AppsLibrary"));

const routes = [
  
  {
    enabled: true,
    path: "/apps-library/scroll-indicator",
    component: AppsLibrary,
    navbar: "Scroll Indicator",
    child: null,
  },
 
  {
    enabled: true,
    path: "/infinite-scrolling",
    component: InfiniteScrolling,
    navbar: "Infinite Scrolling",
    child: null,
  },
  
  
  {
    enabled: true,
    path: "/react-basics",
    component: ReactBasics,
    navbar: "React Basic",
    child: [
      {
        name: "Show and Hide based on State",
        path: "/react-basics/show-hide-elements",
      },
    ],
  },
];

export default routes.filter((route) => route.enabled);
