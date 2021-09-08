import Icons from '../../components/Icon';
import { ProjectCardProps } from '../../components/ProjectCard';

export default [
    {
        title: "Todo List",
        description: "A simple todo list web application showcase",
        img: "/project-screenshots/todo-list.png",
        overlayBg: "#7a51c4",
        tech: [
            Icons.React,
            Icons.Typescript,
            Icons['Styled-Components'],
        ],
    },
    {
        title: "The Button",
        description: "A social experiment to see just how much a human can care about a simple button",
        img: "/project-screenshots/the-button.png",
        overlayBg: "#0d7fc2",
        tech: [
            Icons.Angular,
            Icons.NodeJS,
            Icons.PostgreSQL,
        ],
    },
    {
        title: "Server Dashboard",
        description: "A server statistics dashboard demo project I did as part of a technical interview",
        img: "/project-screenshots/server-panel.png",
        overlayBg: "#c45050",
        tech: [
            Icons.React,
            Icons.Typescript,
            Icons.NodeJS,
            Icons.PostgreSQL,
        ]
    },
] as ProjectCardProps[];