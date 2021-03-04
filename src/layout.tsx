import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';

import './styles/main.scss';
import './styles/reset.scss';

const Layout = ({ children }: { children: any }) => {
    return (
        <>
        <Helmet>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/solid.css" integrity="sha384-TN9eFVoW87zV3Q7PfVXNZFuCwsmMwkuOTOUsyESfMS9uwDTf7yrxXH78rsXT3xf0" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/brands.css" integrity="sha384-MiOGyNsVTeSVUjE9q/52dpdZjrr7yQAjVRUs23Bir5NhrTq0YA0rny4u/qe4dxNj" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/fontawesome.css" integrity="sha384-PRy/NDAXVTUcXlWA3voA+JO/UMtzWgsYuwMxjuu6DfFPgzJpciUiPwgsvp48fl3p" crossOrigin="anonymous" />
        </Helmet>
        <Header />
        <main>{ children }</main>
        <Footer />
        </>
    );
}

export default Layout;