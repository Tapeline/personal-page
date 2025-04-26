import {
    Dialog,
    DialogContent,
    DialogFooter, DialogClose, DialogHeader
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Project} from "@/data/projectClasses.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {ClockIcon} from "lucide-react";
import {DialogTitle} from "@radix-ui/react-dialog";


function ProjectDialog(
    {
        project,
        open,
        onOpenChange
    }: {
        project: Project
        open?: boolean
        onOpenChange?: (_: boolean) => void
    }
) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] p-0">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <div>
                    <div
                        //className="px-[32px]"
                    >
                        {/*<Carousel>*/}
                        {/*    <CarouselContent>{*/}
                        {/*        project.screenshots.map((image, index) => {*/}
                        {/*            return <CarouselItem key={index}>*/}
                        {/*                <img src={image} className="h-full w-full"/>*/}
                        {/*            </CarouselItem>*/}
                        {/*        })*/}
                        {/*    }</CarouselContent>*/}
                        {/*    <CarouselPrevious/>*/}
                        {/*    <CarouselNext/>*/}
                        {/*</Carousel>*/}
                        {
                            project.thumbnailWasSet && <img
                                src={project.thumbnail}
                                alt="project"
                                className="w-full object-contain max-h-[400px]"
                            />
                        }
                    </div>
                    <div className="p-5">
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p>{
                            project.tech.map((techName, index) => {
                                return (
                                    <Badge variant="outline" className="text-white m-1" key={index}>{techName}</Badge>)
                            })
                        }</p>
                        <p>{project.annotation}</p>
                        <p className="flex my-1">
                            <ClockIcon/>
                            <span className="ml-2">{project.startDate} — {project.endDate}</span>
                        </p>
                        <p className="my-1">{
                            project.links.map((link, index) => {
                                return <Button asChild
                                               key={index}><a
                                    href={link.url}
                                    target="_blank" rel="noopener noreferrer"
                                    className="m-1 hover:underline"
                                >{link.title}</a></Button>
                            })
                        }</p>
                        <hr className="m-2"/>
                        <p>{project.description}</p>
                    </div>
                </div>
                <DialogFooter className="p-5">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default ProjectDialog;