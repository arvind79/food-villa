import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"    //Default import
// import { Header } from "./components/Header"  //named import 
// import * as XYZ from "./components/Header"  //importing everything from file and using as XYZ.Header , XYZ.Title and so on...  

import Body from "./components/Body"
import Footer from "./components/Footer"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)