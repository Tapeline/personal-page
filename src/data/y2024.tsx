import * as ArraymagicA from '../assets/projectScreenshots/arraymagic1.png';
import * as SdamgiabotA from '../assets/projectScreenshots/sdamgiabot1.png';
import * as TaskstormA from '../assets/projectScreenshots/taskstorm/task_list.png';
import * as TaskstormB from '../assets/projectScreenshots/taskstorm/task_detail.png';
import * as TaskstormC from '../assets/projectScreenshots/taskstorm/kanban.png';
import * as TaskstormD from '../assets/projectScreenshots/taskstorm/kanban.png';
import * as TaskstormE from '../assets/projectScreenshots/taskstorm/docs.png';
import * as TJudgeUI from '../assets/projectScreenshots/tjudgeui1.png';
import * as GoylangA from '../assets/projectScreenshots/goylang1.png';
import * as InstalinkerA from '../assets/projectScreenshots/instalinker1.png';
import * as EmbarkA from '../assets/projectScreenshots/embark_ui_main_en.png';
import * as DockingjudgeA from '../assets/projectScreenshots/dockingjudge1.png';

import {Project, ProjectLink} from "@/data/projectClasses.ts";


export const projectSdamgiabot = new Project(
    "Sdamgiabot",
    "A bot for exercising GIA EGE exams",
    ["Python", "aiogram"],
    "19 Jul'24", "current",
    [
        new ProjectLink("GitHub", "https://github.com/Tapeline/Sdamgiabot")
    ],
    `I wanted a simple and free app that would send a daily task out of a 
    specific selection of EGE tasks that I can make and adjust.`,
    SdamgiabotA.default,
    [SdamgiabotA.default]
)


export const projectTaskstorm = new Project(
    "Taskstorm",
    "Collaborative task tracker",
    ["Python", "Django", "DRF", "JS", "React", "Bootstrap 5", "Celery"],
    "1 May'24", "currently freezed",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Taskstorm"),
        new ProjectLink("Deployed", "https://taskstorm.tapeline.dev"),
    ],
    <div>
        <p>
            This is a first my big web project featuring separate backend and frontend.
            This application was built with no actual practical purpose only with
            educational ones, so it may be
            not very useful, although it features some interesting functions, e.g.:
            collaborative document editor like Google Docs, notifications and Kanban-boards
        </p>
    </div>,
    TaskstormA.default,
    [TaskstormA.default, TaskstormB.default, TaskstormC.default, TaskstormD.default, TaskstormE.default]
)


export const projectTJudgeUI = new Project(
    "TJudgeUI",
    "Reskin for ejudge.algocourses.ru",
    ["JS", "jQuery", "Manifest v3", "Materialize.css"],
    "1 Dec'24", "year 2025",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/TJudgeUI"),
    ],
    <div>
        <p>
            The ejudge system is great, but its UI is very scary and ugly, so I created
            this extension for Chrome that rebuilds each page with MaterializeCSS framework.
        </p>
    </div>,
    TJudgeUI.default,
    [TJudgeUI.default]
)


export const projectGoylang = new Project(
    "goylang",
    "Joke programming language implemented in Kumir",
    ["Kumir"],
    "15 Dec'24", "15 Dec'24",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/goylang"),
        new ProjectLink("Habr (ru)", "https://habr.com/ru/articles/872680/"),
    ],
    <div>
        <p>
            Just a joke programming language implemented in russian educational-purpose language
            named Kumir. Think of it as a some kind of challenge.
        </p>
    </div>,
    GoylangA.default,
    [GoylangA.default]
)


export const projectInstalinker = new Project(
    "Instalinker",
    "Add portable software to Windows Start menu",
    ["Python", "tkinter"],
    "22 Aug'24", "current",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Instalinker"),
    ],
    <div>
        <p>
            I got tired of opening over 9000 folders to access apps that are distributed
            as portables and I wanted to access them via PowerToys Run searchbar.
            This program just creates .lnk files in Start menu which makes them accessible
            both from the PowerToys Run and Start menu itself.
        </p>
    </div>,
    InstalinkerA.default,
    [InstalinkerA.default]
)


export const projectEmbark = new Project(
    "Embark",
    "Automate setup of Windows workstations",
    ["Python", "tkinter"],
    "5 Oct'24", "current",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Embark"),
        new ProjectLink("Website", "https://embark.tapeline.dev"),
        new ProjectLink("Docs", "https://embark.tapeline.dev/docs/"),
    ],
    <div>
        <p>
            Initially a private project for my school to automate preparation of
            workstations for GIA exams, I decided to make it publicly open. <br/>
            Embark is a solution for automatic workstation setup (installing software,
            copying needed files, setting the environment, etc.)
            It could be useful if such setup should be performed on many workstations,
            eliminating manual actions and thus preventing many errors and reducing the
            amount of work.
        </p>
    </div>,
    EmbarkA.default,
    [EmbarkA.default]
)


export const projectDockingjudge = new Project(
    "Dockingjudge",
    "On-premise PCMS",
    ["Python", "Django", "DRF", "Litestar", "Faststream", "dishka", "JS", "React", "MUIv1"],
    "3 Aug'24", "current",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Dockingjudge"),
    ],
    <div>
        <p>
            As Taskstorm, it is more of an educational project than a practical one.
            Initially planned as a project to try microservice architecture, it turned
            to a polygon for various experiments. As a result, it combines incompatible
            and many decisions are controversial and counterproductive in terms of
            real production environment. Not as nearly as completed as Taskstorm:
            it lacks tests, linters, etc. and also has many bugs. But all in all
            it gave me a lot of experience with different tech and architectural
            patterns.
        </p>
    </div>,
    DockingjudgeA.default,
    [DockingjudgeA.default]
)


export const projectArraymagic = new Project(
    "Arraymagic",
    "Excel-like spreadsheet processor (abandoned)",
    ["Java", "Swing"],
    "28 Apr'24", "Aug'24",
    [
        new ProjectLink("GitHub repo", "https://github.com/Tapeline/Arraymagic"),
    ],
    <div>
        <p>
            An attempt at creating a complex desktop application. Has many unresolved bugs
            and unimplemented MVP features, idk why I'm sharing this project.
        </p>
    </div>,
    ArraymagicA.default,
    [ArraymagicA.default]
)

