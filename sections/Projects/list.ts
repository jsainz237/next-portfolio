import Icons from '@components/Icon';
import { ProjectCardProps } from '@components/ProjectCard';

const projectsList: ProjectCardProps[] = [
    {
        title: "Dots NFTs",
        description: "A Next.js dApp written in Next.js with a Solidity smart contract to mint custom made NFTs",
        img: "/project-screenshots/dots.png",
        tech: [
            Icons.Solidity,
            Icons.Typescript,
            Icons.NextJS,
            Icons['Styled-Components'],
        ],
        buttonText: "Visit Website",
        link: "https://nft-dots.com",
    },
    {
        title: "Todo List",
        description: "A simple todo list app. Styling and accessability were the biggest\
        focuses for this project.",
        img: "/project-screenshots/todo-list.png",
        tech: [
            Icons.React,
            Icons.Typescript,
            // Icons.Bootstrap,
            Icons['Styled-Components'],
        ],
        buttonText: "visit website",
        link: "https://todo.jsainz.me",
    },
    {
        title: "Server Dashboard",
        description: "A server statistics dashboard demo that I completed as part of a technical interview.",
        img: "/project-screenshots/server-panel.png",
        tech: [
            Icons.React,
            Icons.Typescript,
            Icons['Sass/Scss'],
            Icons.NodeJS,
            Icons.PostgreSQL,
        ],
        buttonText: "view repository",
        link: "https://github.com/jsainz237/MC-Server-Panel-Demo"
    },
];

export default projectsList;
