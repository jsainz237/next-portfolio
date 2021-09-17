import Icons from '../../components/Icon';
import { ProjectCardProps } from '../../components/ProjectCard';

export default [
    {
        title: "Todo List",
        description: "A simple todo list web app showcase. Styling and accessability were the biggest\
        focuses for this project.",
        img: "/project-screenshots/todo-list.png",
        tech: [
            Icons.React,
            Icons.Typescript,
            Icons['Styled-Components'],
        ],
    },
    {
        title: "The Button",
        description: "A social experiment to see how much a human can care about a simple button.",
        img: "/project-screenshots/the-button.png",
        tech: [
            Icons.Angular,
            Icons['Sass/Scss'],
            Icons.NodeJS,
            Icons.PostgreSQL,
        ],
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
        ]
    },
] as ProjectCardProps[];