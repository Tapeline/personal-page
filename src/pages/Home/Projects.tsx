import Navbar from "@/components/Navbar.tsx";
import YearDivider from "@/components/YearDivider.tsx";
import { projectList } from "@/data/projectsConf";
import {Project} from "@/data/projectClasses.ts";
import ProjectCard from "@/components/ProjectCard.tsx";
import Footer from "@/components/Footer.tsx";

export default function Projects() {
    return (<div className="min-h-dvh w-full px-5 md:px-[15%] xl:px-[25%] flex flex-col items-center">
        <div className="h-[50dvh] flex flex-col justify-start items-stretch w-full">
            <Navbar/>
            <div className="flex flex-col items-center gap-3 grow justify-center">
                <span className="block text-6xl t-font-serif">Projects</span>
                <span className="block text-md t-font-sans text-center">
                    Here you can explore my public projects that I’ve
                    worked on in different periods.
                </span>
            </div>
        </div>
        {
            projectList.map((data, index) => {
                return <div key={index} className="mb-10">
                    <YearDivider year={data.year}/>
                    <div>{
                        data.projects.map((project: Project, index) => {
                            return <ProjectCard project={project} key={index}/>;
                        })
                    }</div>
                </div>;
            })
        }
        <Footer/>
    </div>);
}
