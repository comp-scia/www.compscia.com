import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/components/header.module.scss';

type Page = {
    link: string,
    caption: string
};

const Header = () => {
    const seasonal = false;
    const pages: Page[] = [
        { link: "/", caption: "Home" },
        { link: "/programs", caption: "Programs" },
        { link: "/resources", caption: "Resources" },
        { link: "/about", caption: "About" },
        { link: "/contact", caption: "Contact" },
    ];
    return (
        <header id={styles.siteHead}> 
            <Link to='/'><img className={styles.logo} src="/images/logo-transparent.png" /></Link>
            { seasonal
                ? <button>VOTE NOW</button>
                : false
            }
            <nav className={styles.navbar}>
                { pages.map(
                    (page, i) => (<Link to={ page.link } key={i}>{ page.caption }</Link>)
                ) }
            </nav>
        </header>
    );
}

export default Header;