import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = (movies) => {
    return (
        <main>
            {/* {console.log(movies)} */}
            <Outlet />
        </main>
    )
}

export default Layout