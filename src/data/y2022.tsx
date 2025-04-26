import * as HummingbirdA from '../assets/projectScreenshots/hide1.png';
import {Project, ProjectLink} from "@/data/projectClasses.ts";


export const projectHummingbird = new Project(
    "Hummingbird",
    "IDE written in Java Swing (abandoned)",
    ["Java", "Swing"],
    "3 Sep'22", "Oct'23",
    [
        new ProjectLink("GitHub", "https://github.com/Tapeline/Hummingbird-IDE"),
    ],
    `A successor of quail::studio, my attempt at writing a full-blown IDE with plugin
    system. It has reached some state of minimal functionality after which I decided
    that it is too complicated for me at that moment and that I want to focus at other
    project.`,
    HummingbirdA.default,
    [HummingbirdA.default]
)


export const projectQuailStudio = new Project(
    "quail::studio",
    "IDE for Quail 1.x programming language",
    ["Java", "Swing"],
    "Mar'22", "Jul'22",
    [
        new ProjectLink("GitHub", "https://github.com/Tapeline/quail-studio"),
    ],
    `My first attempt at writing an IDE. Works, but meh.`,
    null,
    []
)
