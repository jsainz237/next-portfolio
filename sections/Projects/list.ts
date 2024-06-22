import Icons from '@components/Icon';
import { ProjectCardProps } from '@components/ProjectCard';

const projectsList: ProjectCardProps[] = [
    {
        active: true,
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
        active: true,
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
        active: false,
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
    {
        active: true,
        title: "Kanban Board",
        description: "A customizable Kanban board I created as part of a technical interview.",
        img: "/project-screenshots/kanban.png",
        tech: [
            Icons.NextJS,
            Icons.Typescript,
            Icons['Styled-Components'],
            Icons.Redux,
        ],
        buttonText: "visit website",
        link: "https://kanban.jsainz.me",
    }
];

export default projectsList.filter(proj => proj.active);
