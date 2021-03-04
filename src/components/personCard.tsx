import React from 'react';
import * as styles from '../styles/components/personCard.module.scss';

export type Person = {
    name: string,
    title: string | string[],
    imgUrl: string,
    links?: {
        instagram?: string,
        linkedin?: string,
        email?: string,
        phone?: string
    }
}

export const PersonCard = ({name, title, imgUrl, links}: Person) => {
    return (
        <div className={styles.personCard}>
            <img className={styles.avatar} src={imgUrl}/>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.title}>{typeof title == 'string' ? title : title.map(line => <>{line}<br/></>)}</p>
            { links ?
                <div className={styles.social}>
                    {links.linkedin ?
                    <a href={`https://www.linkedin.com/in/${links.linkedin}`}><i className="fab fa-linkedin"></i></a>
                    : null}
                    {links.instagram ?
                    <a href={`https://www.instagram.com/${links.instagram}`}><i className="fab fa-instagram-square"></i></a>
                    : null}
                    {links.phone ?
                    <a href={`tel:${links.phone}`}><i className="fas fa-phone-square-alt"></i></a>
                    : null}
                    {links.email ?
                    <a href={`mailto:${links.email}`}><i className="fa fa-envelope-square"></i></a>
                    : null}
                </div>
                : null
            }
        </div>
    );
}

export default PersonCard;