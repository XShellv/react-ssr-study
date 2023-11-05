import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import '@/asset/global.less'
import routes from '../App';

export default function App() {
    return <RouterProvider
        router={
            createBrowserRouter(routes)
        }
    />
}
