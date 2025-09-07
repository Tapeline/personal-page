import Navbar from "@/components/Navbar.tsx";
import {Typewriter} from "@/components/ui/typewriter.tsx";

function Home() {
    return (<div className="min-h-dvh w-full px-5 md:px-[25%] flex flex-col items-center">
        <Navbar/>
        <div className="
            w-full h-full grow flex flex-col
            items-center justify-center mb-25
            gap-3
        ">
            <span className="block text-6xl t-font-serif">Hello,</span>
            <span className="block text-5xl t-font-serif">
                I'm&nbsp;
                <Typewriter
                    text={[
                        "Tapeline",
                        "Ilya"
                    ]}
                    speed={70}
                    waitTime={1500}
                    deleteSpeed={40}
                    cursorChar={"|"}
                />
            </span>
            <span className="block text-md t-font-sans">
                an aspiring backend (a bit fullstack) developer and software engineer
            </span>
            <div className="
                text-base max-w-lg t-font-cond
                text-center mx-auto font-light flex justify-center gap-5
            ">
                <a href="https://github.com/Tapeline" className="hover:underline">
                    GitHub
                </a>
                •
                <a href="mailto:mail@tapeline.dev" className="hover:underline">
                    mail@tapeline.dev
                </a>
                •
                <a href="mailto:mail@tapeline.dev" className="hover:underline">
                    Habr
                </a>
            </div>
        </div>
    </div>);
}

export default Home;
