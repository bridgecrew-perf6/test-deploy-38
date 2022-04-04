import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";

import Home from "./views/Home";
import YouLost from "./views/YouLost";

const AddCategory = React.lazy(() => import("./views/AddCategory"));

export default function App() {
    const element = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/add-category",
                    element: (
                        <React.Suspense fallback={<>...</>}>
                            <AddCategory />
                        </React.Suspense>
                    ),
                },
                { path: "*", element: <YouLost /> },
            ],
        },
    ]);
    return <div>{element}</div>;
}

function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
