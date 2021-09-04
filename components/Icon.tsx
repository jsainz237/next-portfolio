import Python from '../public/icons/python-logo-notext.svg';
import React from '../public/icons/react-icon.svg';
import JavaScript from '../public/icons/JavaScript-logo.svg';
import Typescript from '../public/icons/Typescript-logo.svg';
import NodeJS from '../public/icons/Nodejs-logo.svg';
import Angular from '../public/icons/angular.svg';
import HTML5 from '../public/icons/HTML5_Badge.svg';
import CSS3 from '../public/icons/CSS3_logo.svg';
import GraphQL from '../public/icons/GraphQL_Logo.svg';

const icons = {
    JavaScript,
    HTML5,
    GraphQL,
    React,
    NodeJS,
    Angular,
    CSS3,
    Python,
    Typescript,
}

for(const [_, icon] of Object.entries(icons)) {
    icon.defaultProps = { height: '2rem', width: '2rem' };
}

React.defaultProps = { height: '3.25rem', width: '3.25rem' };

export default icons;