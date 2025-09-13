import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Routes, Route, StaticRouter} from "react-router";
import Home from "@/pages/Home/Home.tsx";
import Projects from "@/pages/Home/Projects.tsx";
import Writing from "@/pages/Home/Writing.tsx";
import About from "@/pages/Home/About.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StaticRouter location="">
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="articles" element={<Writing/>}/>
                    <Route path="about" element={<About/>}/>
                </Route>
            </Routes>
        </StaticRouter>
    </StrictMode>
)
