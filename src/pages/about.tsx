import React from 'react';
import {Person} from '../components/personCard';
import {MissionCard} from '../components/missionCard';
import PersonSection from '../components/personSection';

export default () => {
    let boardMembers: Person[] = [
        {name:'Monica Lee',title:'President / Chief Executive Officer',imgUrl:'/images/board/monica.jpeg',links:{linkedin:'monica-l-15629479',instagram:'certifiedmonicalee',email:'moniblee@icloud.com'}},
        {name:'Lex von Biedenfeld',title:'Chief Technology Officer',imgUrl:'/images/board/avonbied.jpg',links:{linkedin:'avonbied',instagram:'avonbied'}},
        {name:'Eric Hyche',title:'Vice President',imgUrl:'/images/board/ehyche.jpg',links:{linkedin:'ericihyche',instagram:'arithmxtic',email:'ericihyche@gmail.com'}},
        {name:'Denzel Wilson',title:'Chief Finance Officer',imgUrl:'/images/board/denzel.jpg',links:{linkedin:'denzel-wilson-2422481a2',instagram:'',email:''}},
        {name:'Aaron Alford',title:'Secretary',imgUrl:'/images/board/aalford.png',links:{linkedin:'',instagram:'',email:''}},
        {name:'Stefania Lopez-Portillo',title:'Chief Representative',imgUrl:'/images/board/sportillo.jpeg'},
        {name:'Sirine Ennadi',title:'Chief Marketing Officer',imgUrl:'/images/board/sennadi.jpg'},
        {name:'Al Tareen',title:'Chief Strategy Officer',imgUrl:'/images/board/altareen.png',links:{linkedin:'California',instagram:'altareen',email:'altareenk@outlook.com'}}
    ];
    let advisors: Person[] = [
        {name:'Samir Saber',title:['Department Chair','Digital Information and Technology'],imgUrl:'/images/board/samir.jpg',links:{linkedin:'samirsaber',phone:'7137187513',email:'samir.saber@hccs.edu'}},
        {name:'Dalia Gumeel',title:['Programming Faculty',],imgUrl:'/images/board/dgumeel.jpg',links:{linkedin:'dalia-gumeel',email:'dalia.gumeel@hccs.edu'}},
    ];
    return (
        <>
            <section style={{
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/datacenter.jpg")',
                backgroundSize: 'cover'
            }}>
                <h1 style={{
                    color: 'white',
                    paddingBottom: '24px'
                }}>History</h1>
                <p style={{
                    margin: 'auto',
                    padding: '8px 16px',
                    fontSize: '20px',
                    lineHeight: 1.5,
                    maxWidth: '1080px',
                    color: 'white',
                    backgroundColor: '#00000088'
                }}>The Computer Science Association was founded by Al Tareen and Eduardo Moya in
                    2019. While attending Houston Community College Northwest in Fall of 2019,
                    Al Tareen and Eduardo Moya noticed there were no computer-science organizations
                    available. Countless students desired a computer science organization. With
                    enough support from the faculty and students, the cabinet worked hard to lay the
                    foundations of the organization and together launched the Computer Science
                    Association. CSA became officially recognized at HCC NW on November 7th, 2019.</p>
            </section>
            <section
                style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center'
                }}>
                <MissionCard icon='Mission.png' headline='MISSION'>CSA trains, prepares, and unites students for the ever-changing technological frontiers to ensure that our members are the pioneers of new technologies.</MissionCard>
                <MissionCard icon='Values.png' headline='VALUES'>INSPIRE OVERCOME INNOVATE DISRUPT</MissionCard>
                <MissionCard icon='Vision.png' headline='VISION'>CSA visions a future where our members become futurists and creates disruption in industries through digitalization or automation.</MissionCard>
            </section>
            <section>
                <PersonSection people={boardMembers} title="Executive Board"/>
                <PersonSection people={advisors} title="Program Advisors"/>
            </section>
        </>
    );
}