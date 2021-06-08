import React from 'react';
import Home from '../../organisms/_home-main-content/_home-main-content';
import Gallery from '../../organisms/_gallery-main-content/_gallery-main-content';
import Contact from '../../organisms/_contact-main-content/_contact-main-content';
import About from '../../organisms/_about-main-content/_about-main-content';
import GalleryAdmin from '../../organisms/_gallery-admin-main-content/_gallery-admin-main-content'
import {withRouter,Route} from 'react-router-dom';
const Routes=()=>{
    return(
        <>
    <Route exact path="/home" component={withRouter(Home)} />

        <Route path="/gallery" component={withRouter(Gallery)} />

        <Route path="/contact" component={withRouter(Contact)} />

        <Route path="/about" component={withRouter(About)} />

        <Route path="/gallery-admin" component={withRouter(GalleryAdmin)} />

        </>
    );
}
export default Routes;
