import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import { RouteObject } from "react-router-dom";
import Header from "@/components/Header";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Header />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
];

export default routes
