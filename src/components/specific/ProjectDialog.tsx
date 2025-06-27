import {
    Dialog,
    DialogContent,
    DialogFooter, DialogClose, DialogHeader
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Project} from "@/data/projectClasses.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {ClockIcon, LinkIcon} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";


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
            {/*<DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] p-0">*/}
            <DialogContent className="
                min-w-full h-full flex flex-col justify-start
                overflow-y-scroll
            ">
                <DialogHeader className="h-[16px]"></DialogHeader>
                <div className="p-5 md:p-10">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="w-full md:w-[128px]">
                            Back
                        </Button>
                    </DialogClose>
                    <div className="flex flex-col md:flex-row gap-8 w-full mt-6">
                        {/*<div className="w-full md:w-[60%]">*/}
                        {/*    <h1 className="text-4xl font-bold mt-8 mb-4">{project.name}</h1>*/}
                        {/*    <p>{project.annotation}</p>*/}
                        {/*    <hr/>*/}
                        {/*    <p className="mt-8">{project.description}</p>*/}
                        {/*</div>*/}
                        <Card className="w-full md:w-[60%]">
                            <CardContent>
                                <div>
                                    <h1 className="text-5xl font-bold mt-4 mb-4">{project.name}</h1>
                                    <p className="mb-4 text-lg">{project.annotation}</p>
                                    <hr className="hidden md:visible"/>
                                    <p className="mt-8 text-lg hidden md:visible">{project.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full md:w-[40%]">
                            <CardContent>
                                {project.thumbnailWasSet && <img
                                    src={project.thumbnail}
                                    alt="project"
                                    className="w-full object-contain max-h-[400px] rounded-lg"
                                />}
                                <p className="my-2">{
                                    project.tech.map((techName, index) => {
                                        return (
                                            <Badge variant="outline"
                                                   className="text-white m-1"
                                                   key={index}>{techName}</Badge>)
                                    })
                                }</p>
                                <p className="flex my-2 text-lg items-center">
                                    <ClockIcon/>
                                    <span className="ml-2">{project.startDate} — {project.endDate}</span>
                                </p>
                                <p className="my-2 text-lg flex items-center">
                                    <LinkIcon/>
                                    {project.links.map((link, index) => {
                                        return <Button variant="link" effect="underline" asChild><a
                                            key={index}
                                            href={link.url}
                                            target="_blank" rel="noopener noreferrer"
                                        >{link.title}</a></Button>
                                    })
                                }</p>
                            </CardContent>
                        </Card>
                        <Card className="w-full md:hidden">
                            <CardContent>
                                <p className="text-lg">
                                    {project.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

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

                        }
                <DialogFooter className="p-5"></DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default ProjectDialog;