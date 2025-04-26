import * as QuailIcon from '../assets/projectScreenshots/quail.png';
//const ScrA = require("../assets/projectScreenshots/thisSite/a.png")
import {Project, ProjectLink} from "@/data/projectClasses.ts";


export const projectPyljudge = new Project(
    "pyljudge",
    "Simplest PCMS",
    ["Python", "Django"],
    "2 Dec'23", "May'24",
    [
        new ProjectLink("GitHub", "https://github.com/Tapeline/pyljudge")
    ],
    `A predecessor to Dockingjudge. Very bad design, no sandboxing, no security.
    I don't want to give any more comments on that piece of sh*t xD`,
    null,
    []
)


export const projectQuail2 = new Project(
    "Quail 2.x",
    "Second generation of Quail programming language",
    ["Java 8"],
    "25 Mar'23", "Apr'24",
    [
        new ProjectLink("GitHub", "https://github.com/Quail-Language/quail"),
        new ProjectLink("Website", "quail-language.github.io"),
    ],
    `A second generation of my Quail programming language. Done (again) entirely from
    scratch, with help from "Crafting Interpreters" book. Learn more at its website or 
    at Quail 1.x project description`,
    QuailIcon.default,
    [QuailIcon.default]
)
