import {Project} from "@/data/projectClasses.ts";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/animate-ui/radix/collapsible.tsx";
import {PlusIcon} from "lucide-react";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

function ProjectCard({project}: { project: Project; }) {
    return (<div className="
        flex justify-between my-7 gap-6
        flex-col-reverse md:flex-row
    ">
        <div>
            <p className="text-3xl t-font-serif my-2">{project.name}</p>
            <p className="t-font-sans my-2">{project.annotation}</p>
            <Collapsible className="my-2">
                <CollapsibleTrigger asChild>
                    <span className="t-font-serif">Learn more <PlusIcon className="inline"/></span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p className="t-font-sans">{project.description}</p>
                </CollapsibleContent>
            </Collapsible>
            <div className="flex gap-4 my-2"
            >{project.links.map((link, key) =>
                <a href={link.url} key={key} className="font-light t-font-cond">{link.title}</a>
            )}</div>
        </div>
        <Dialog>
            <DialogTrigger asChild>
                <div className="t-project-thumb w-full min-w-full md:w-[40%] md:min-w-[40%]">
                    <img src={project.thumbnail}/>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[600px] md:max-w-[50vw] max-h-[95dvh]">
                <DialogHeader>
                    <DialogTitle className="t-font-serif">Screenshot gallery</DialogTitle>
                    <DialogClose/>
                </DialogHeader>
                <Carousel>
                    <CarouselContent>{
                        project.screenshots.map((image, key) =>
                            <CarouselItem className="flex justify-center">
                                <img
                                    key={key}
                                    src={image}
                                    alt="Gallery image"
                                    className="max-h-[80dvh] object-contain"
                                    /*className="object-cover w-full aspect-[3/2] rounded-md"*/
                                />
                            </CarouselItem>
                        )
                    }</CarouselContent>
                    <div className="w-full flex justify-end gap-3">
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </div>
                </Carousel>
            </DialogContent>
        </Dialog>
    </div>)
}

export default ProjectCard;
