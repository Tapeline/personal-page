import {GridBackground, Spotlight} from "@/components/blocks/spotlight-new.tsx";
import {Typewriter} from "@/components/ui/typewriter.tsx";
import {Button} from "@/components/ui/button.tsx";

function MainPageHero() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <GridBackground />
            <Spotlight />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    <span>Hello, <br/> I'm </span>
                    <Typewriter
                        text={[
                            "Tapeline",
                            "Ilya"
                        ]}
                        speed={70}
                        className="text-slate-300"
                        waitTime={1500}
                        deleteSpeed={40}
                        cursorChar={"_"}
                    />
                </h1>
                <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    an aspiring backend (a bit fullstack) developer and software engineer
                </p>
                <div className="
                    mt-5 font-normal text-base text-neutral-300 max-w-lg
                    text-center mx-auto font-thin flex justify-center gap-5
                ">
                    <a href="https://github.com/Tapeline" className="hover:underline">
                        GitHub
                    </a>
                    •
                    <a href="mailto:mail@tapeline.dev" className="hover:underline">
                        mail@tapeline.dev
                    </a>
                    •
                    <a href="https://habr.com/ru/users/tapeline" className="hover:underline">
                        Habr
                    </a>
                </div>
                <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto font-thin">
                <Button asChild>
                        <a href="#projects">See my projects</a>
                    </Button>
                </p>
            </div>
        </div>

);
}

export default MainPageHero;
