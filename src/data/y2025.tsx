import * as ScrA from '../assets/projectScreenshots/thisSite/a.png';
import * as AisleA from '../assets/projectScreenshots/aisle.png';
import * as KCIcon from '../assets/projectScreenshots/kumircomposeicon.png';
import {Project, ProjectLink} from "@/data/projectClasses.ts";

export const projectThisSite = new Project(
    "This site",
    `The site you are currently browsing`,
    ["TS", "React", "Shadcn", "Vite"],
    "23 Apr'25", "current",
    [
        new ProjectLink("Goto here", "https://tapeline.dev")
    ],
    `This site was created as an exercise in TypeScript, React and shadcn/ui`,
    ScrA.default,
    [ScrA.default]
)


export const projectAisle = new Project(
    "Aisle",
    "Simple C4-like diagram-as-code tool",
    ["Python", "PlantUML"],
    "22 Jan'25", "current",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Aisle"),
        new ProjectLink("Docs", "https://tapeline.github.com/Aisle"),
    ],
    <div>
        <p>
            When I first stumbled upon necessity of creating an architecture
            diagram in C4 style I found that there are not many (actually,
            none) tools that allow easy creation of such diagrams using
            a simple and understandable syntax. That's when I decided to create Aisle.
        </p>
    </div>,
    AisleA.default,
    [AisleA.default]
)


export const projectKumirCompose = new Project(
    "Kumir-Compose",
    "Toolchain for modern Kumir development",
    ["Python"],
    "18 Mar'25", "current",
    [
        new ProjectLink("GitHub repo", "https://github.com/kumir-compose/compose"),
    ],
    <div>
        <p>
            Another joke project.
        </p>
    </div>,
    KCIcon.default,
    [KCIcon.default]
)