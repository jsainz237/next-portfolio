import Python from 'public/icons/Python-logo-notext.svg';
import React from 'public/icons/React-logo.svg';
import JavaScript from 'public/icons/JavaScript-logo.svg';
import Typescript from 'public/icons/Typescript-logo.svg';
import NodeJS from 'public/icons/Nodejs-logo.svg';
import Angular from 'public/icons/angular.svg';
import NextJS from 'public/icons/Nextjs-logo.svg';
import HTML5 from 'public/icons/HTML5_Badge.svg';
import CSS3 from 'public/icons/CSS3_logo.svg';
import GraphQL from 'public/icons/GraphQL_Logo.svg';
import MySQL from 'public/icons/mysql-icon.svg';
import PostgreSQL from 'public/icons/Postgresql_elephant.svg';
import MongoDB from 'public/icons/MongoDB_Logo.svg';
import Sass from 'public/icons/Sass_Logo.svg';
import StyledComponents from 'public/icons/styled-components-logo.svg';
import Redux from 'public/icons/Redux.svg';
import Bootstrap from 'public/icons/Bootstrap_logo.svg';
import Solidity from 'public/icons/Solidity_logo.svg';

interface IconStruct {
    Icon: any;
    color?: string;
    fill?: boolean;
    hidden?: boolean;
}

const icons: Record<string, IconStruct> = {
    Solidity: { Icon: Solidity, fill: true },
    HTML5: { Icon: HTML5, color: '#f16524' },
    CSS3: { Icon: CSS3, color: '#2965f1' },
    Bootstrap: { hidden: true, Icon: Bootstrap },
    ['Sass/Scss']: { Icon: Sass },
    ['Styled-Components']: { Icon: StyledComponents },

    Typescript: { Icon: Typescript, color: '#3278c6'},
    JavaScript: { Icon: JavaScript, color: '#f1db4f' },
    React: { Icon: React, color: '#61dafb' },
    NodeJS: { Icon: NodeJS, color: '#3e863d' },
    Angular: { Icon: Angular, color: '#dd0031' },
    NextJS: { Icon: NextJS, fill: true },

    GraphQL: { Icon: GraphQL, color: '#e632ad' },
    PostgreSQL: { Icon: PostgreSQL },
    MongoDB: { Icon: MongoDB },
    MySQL: { Icon: MySQL },
    Redux: { hidden: true, Icon: Redux, color: '#764abc' },
    
    Python: { hidden: true, Icon: Python, color: '#3e7aac' },
}

icons['Styled-Components'].Icon.defaultProps = { fill: 'white' };

for(const [_, obj] of Object.entries(icons)) {
    const props = obj.Icon.defaultProps;
    obj.Icon.defaultProps = { ...props, height: '2.5rem', width: '2.5rem' };
}

export default icons;