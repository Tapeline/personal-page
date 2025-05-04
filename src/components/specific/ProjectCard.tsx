import {GlareCard} from "@/components/ui/glare-card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Key, useState} from "react";
import {Project} from "@/data/projectClasses.ts";
import ProjectDialog from "@/components/specific/ProjectDialog.tsx";

function ProjectCard(props: { project: Project; }) {
    const {project} = props;
    const [open, setOpen] = useState(false);
    return (<div className="object-center m-3">
        <GlareCard
            className="flex flex-col items-center justify-between bg-zinc-950"
            onClick={() => setOpen(true)}
        >
            <img
                className="object-cover h-full z-0 absolute w-full"
                src={String(project.thumbnail)}
            />
            <div className="z-20 flex flex-col h-full items-center justify-end py-8 px-6 w-full bg-gradient-to-t from-background to-transparent">
                <p className="font-bold text-white text-lg">{project.name}</p>
                <p>{
                    project.tech.map((techName: string, index: Key | null | undefined) => {
                        return (<Badge variant="outline" className="text-white m-1" key={index}>{techName}</Badge>)
                    })
                }</p>
                <div className="font-normal text-base text-neutral-200 p-3">
                    {project.annotation}
                </div>
            </div>
        </GlareCard>
        <ProjectDialog project={project} open={open} onOpenChange={setOpen} />
    </div>)
}

export default ProjectCard;

