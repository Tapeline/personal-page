import {Link} from "react-router";

export default function Navbar() {
    return (<div className="t-navbar flex flex-col md:flex-row justify-between items-center py-5 w-full">
        <span className="text-lg lg:text-2xl"><Link to="/">tapeline.dev</Link></span>
        <div className="flex justify-end gap-7">
            <span className="text-md lg:text-xl"><Link to="/about">about me</Link></span>
            <span className="text-md lg:text-xl"><Link to="/projects">projects</Link></span>
            <span className="text-md lg:text-xl"><Link to="/articles">writing</Link></span>
        </div>
    </div>);
}
