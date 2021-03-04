import React from 'react';
import * as styles from '../styles/components/missionCard.module.scss';


export const MissionCard = ({icon, headline, children}: {icon: string, headline: string, children: any}) => {
    return (
        <div className={styles.missionCard}>
            <header style={{verticalAlign: 'middle'}}>
                <img src={`/assets/img/${icon}`} style={{display: 'inline-block', width: '70px'}} />
                <h4 style={{
                    display: 'inline-block',
                    fontSize: '40px',
                    color: 'rgb(19,13,79)',
                    margin: 'auto'}}>{headline}</h4>
            </header>
            <p style={{color: 'rgb(8,15,51)', fontSize: '16px', marginTop: '15px'}}>{children}</p>
        </div>
    );
}

export default MissionCard;