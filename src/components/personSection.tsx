import React from 'react';
import {Person, PersonCard} from './personCard';
import * as styles from '../styles/components/personSection.module.scss';

const PersonSection = ({people, title}: {people: Person[], title: string | Node}) => {
    return (
        <>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <section className={styles.personSection}>{people.map((person: Person) => <PersonCard {...person} />)}</section>
        </>
    );
}

export default PersonSection;