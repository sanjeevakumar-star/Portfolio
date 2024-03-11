import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesComponents } from '../routesComponets';

function RoutesDatas() {
    return (

        <BrowserRouter >
            <Routes>
                {
                    routesComponents.map((route, i) => {
                        return (<Route key={i} path={`/${route.path}`} exact={route.exact} element={route.components} />)
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesDatas;