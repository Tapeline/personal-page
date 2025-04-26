import * as NoImg from "../assets/projectScreenshots/noimg.png"

export class ProjectLink {
    title: string;
    url: string;
    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }
}

export class Project {
    name: string;
    annotation: string;
    tech: Array<string>;
    startDate: string;
    endDate: string;
    links: Array<ProjectLink>;
    description: any;
    thumbnail: any;
    thumbnailWasSet: boolean;
    screenshots: Array<any>;
    constructor(
        name: string,
        annotation: string,
        tech: Array<string>,
        startDate: string,
        endDate: string,
        links: Array<ProjectLink>,
        description: any,
        thumbnail: any,
        screenshots: Array<any>
    ) {
        this.name = name;
        this.annotation = annotation;
        this.tech = tech;
        this.startDate = startDate;
        this.endDate = endDate;
        this.links = links;
        this.description = description;
        this.screenshots = screenshots;
        this.thumbnail = thumbnail;
        this.thumbnailWasSet = true;
        if (thumbnail === null || thumbnail === undefined) {
            this.thumbnail = NoImg.default;
            this.thumbnailWasSet = false;
        }
    }
}
