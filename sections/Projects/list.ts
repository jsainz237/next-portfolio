import Icons from '../../components/Icon';
import { ProjectCardProps } from '../../components/ProjectCard';

const projectsList: ProjectCardProps[] = [
    {
        title: "Todo List",
        description: "A simple todo list app. Styling and accessability were the biggest\
        focuses for this project.",
        img: "assets/project-screenshots/todo-list.png",
        tech: [
            Icons.React,
            Icons.Typescript,
            Icons.Bootstrap,
            Icons['Styled-Components'],
        ],
        buttonText: "visit website",
        link: "https://todo.jsainz.me",
    },
    {
        title: "Server Dashboard",
        description: "A server statistics dashboard demo that I completed as part of a technical interview.",
        img: "assets/project-screenshots/server-panel.png",
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
        title: "The Button",
        description: "A social experiment to see how much a human can care about a simple button.",
        img: "assets/project-screenshots/the-button.png",
        tech: [
            Icons.Angular,
            Icons['Sass/Scss'],
            Icons.NodeJS,
            Icons.PostgreSQL,
        ],
        buttonText: "visit website",
        link: "https://www.savethebutton.com",
    },
];

export default projectsList;
