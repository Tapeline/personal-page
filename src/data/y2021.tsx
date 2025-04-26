import * as QuailIcon from '../assets/projectScreenshots/quail.png';
import {Project, ProjectLink} from "@/data/projectClasses.ts";


export const projectQuail1 = new Project(
    "Quail 1.x",
    "A programming language written in Java",
    ["Java 8"],
    "31 Oct'21", "Oct'23",
    [
        new ProjectLink("GitHub", "https://github.com/Tapeline/quail"),
    ],
    `My first attempt at creating a complex project — a programming language. 
    As in each first attempt at anything it contains many bad design decisions, 
    but anyway it's worth looking at. Fun fact: the name evoluted as follows: 
    The Q project -> quark -> quail.`,
    QuailIcon.default,
    [QuailIcon.default]
)
