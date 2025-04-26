import MainPageHero from "@/components/specific/MainPageHero.tsx";
import {projectList} from "@/data/projectsConf.ts";
import ProjectCard from "@/components/specific/ProjectCard.tsx";
import {Project} from "@/data/projectClasses.ts";

function Home() {
    return (<div>
        <MainPageHero/>
        <div className="w-full h-full bg-black/[0.96] antialiased" id="projects">
            <div
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }}
                className="p-5 sm:p-5 sm:px-5 md:px-[8%] xl:px-[16%]"
            >
                <h1 className="text-4xl font-bold mb-3">My projects</h1>
                {
                    projectList.map((data, index) => {
                        return <div key={index} className="mb-5">
                            <hr/>
                            <h2 className="text-2xl font-semibold mb-3">{data.year}</h2>
                            <div className="
                            grid gap-10
                            grid-cols-1
                            md:grid-cols-2
                            xl:grid-cols-3
                            "
                            >{
                                data.projects.map((project: Project, index) => {
                                    return <ProjectCard project={project} key={index}/>;
                                })
                            }</div>
                        </div>;
                    })
                }
            </div>
        </div>

    </div>);
}

export default Home;
