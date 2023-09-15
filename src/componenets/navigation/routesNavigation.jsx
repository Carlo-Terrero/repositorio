import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Auth from "../pages/auth/auth";
import Blog from "../pages/blog/blog";
import Portfolio from "../pages/portfolio/portfolio";
import NoMatch from "../pages/no-match";
import About from "../pages/about/about";

export default function RoutesNavigation({state, changeState}) {

    const navigationArray = [
        {state: true, path:'/contact', element: <Contact/>},
        {state: true, path:'/about-me', element:< About/>},
        {state: state, path:"/blog", element:<Blog/>},
        {state: state, path:"/portfolio", element:<Portfolio/>},
    ]

    return(
        
        <Routes>
            <Route path='/' element={<Home/>}/>

            {
                navigationArray.map(element => (
                    element.state == true ?
                        <Route key={element.path} path={element.path} element={element.element}/>
                    : false
                ))
            }

            <Route path='/auth' element={<Auth changeState={changeState}/>}/>
            <Route path='*' element={<NoMatch/>} />
        </Routes>
    )
}
