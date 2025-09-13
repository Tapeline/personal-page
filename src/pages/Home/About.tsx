import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import MiniYearDivider from "@/components/MiniYearDivider.tsx";
import {techList} from "@/data/techConf.ts";

export default function About() {
    return (<div className="min-h-dvh w-full px-5 md:px-[15%] xl:px-[25%] flex flex-col items-center">
        <div className="h-[50dvh] flex flex-col justify-start items-stretch w-full">
            <Navbar/>
            <div className="flex flex-col items-center gap-3 grow justify-center">
                <span className="block text-6xl t-font-serif">About me</span>
                <span className="block text-md t-font-sans text-center">
                    Here you can learn more about me, what I can do and how I ended up where I am.
                </span>
            </div>
        </div>
        <div className="w-full">
            <div className="flex items-center gap-3 t-year-divider">
                <h2 className="t-font-cond text-2xl">Technologies</h2>
                <hr className="grow"/>
            </div>
            <span className="t-font-cond font-light text-sm">(hover the icon to see the name)</span>
        </div>
        <div className="w-full">
            <p className="t-font-sans my-3">Tech I know / use often:</p>
            <div className="t-skill-icons">{
                techList.map((skill, key) => {
                    return <div className="t-skill-icon" key={key}>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href={skill.link}><img src={skill.pic}/></a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>;
                })
            }</div>
        </div>
        <div className="w-full mb-3 mt-6">
            <div className="flex items-center gap-3 t-year-divider">
                <h2 className="t-font-cond text-2xl">Biography</h2>
                <hr className="grow"/>
            </div>
        </div>
        <div className="w-full">
            <p className="mb-2">
                When designing this site, it felt like a right thing to do, to write
                a short (or maybe long) section on how I started my journey, what problems
                I encountered, what did I do and what motivated me.
            </p>
            <p className="mb-2">
                This paragraph is going to be a literal biography just lying there for
                anyone wanting to learn more about me.
            </p>
            <p className="mb-2">Happy reading!</p>
        </div>
        <MiniYearDivider year={2016}/>
        <p className="w-full mb-2">
            Coming up...
        </p>
        <Footer/>
    </div>);
}
