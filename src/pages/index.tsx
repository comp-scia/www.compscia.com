import React from 'react';
import { Link } from 'gatsby';
import App from '../components/app';

export default () => {
    return(
        <>
        <section>
            <h2 style={{textAlign:'center', paddingBottom: '24px'}}>COMING SOON</h2>
            <p style={{textAlign: 'center'}}>More content coming soon. In the meantime checkout our GitHub here: <a href='https://github.com/comp-scia/getting-started' style={{color: 'blue'}}>comp-scia</a></p>
        </section>
            <Link to='/about'>About</Link>
            <App name="John">
                <p>There is plenty that you can do.</p>
                <footer>Hello</footer>
            </App>
        </>
    );
}