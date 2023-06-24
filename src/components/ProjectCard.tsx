import Image from "next/image";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useRef } from "react";

interface cardProps {
    image_url : string;
    project_name : string;
    description : string;
    tech_stack : string[];
}

export default function ProjectCard({image_url, project_name, description, tech_stack} : cardProps) {
    
    const cardHist = useRef<HTMLDivElement | null>(null);

    const showDetails = (project : any) => {
        const newLine = document.createElement('DIV');
        newLine.innerHTML = `<span class='text-purple-500'>{</span>
            <span class='text-blue-400'>project_description : </span><span class='text-orange-500'>"${project.description}"</span>, <br/>
            <span class='text-blue-400'>tech_stack : </span> <span class='text-blue-500'>[</span><span class='text-orange-500'>${project.tech_stack}</span><span class='text-blue-500'>]</span>
            <br/><span class='text-purple-500'>}</span>`;
        cardHist.current?.appendChild(newLine);
    }
    const removeDetails = () => {
        if(cardHist.current) cardHist.current.innerHTML = "";
    }

    return (
        <div onMouseEnter={() => setTimeout(() => showDetails({description, tech_stack}) ,350)} onMouseLeave={() => setTimeout(removeDetails, 350)} className='card w-[55vw] min-w-[380px] lg:min-w-[50px] lg:w-96  bg-black shadow-lg shadow-black'>
            <div className='flex h-full w-full flex-col'>
                <div style={{backgroundImage : `url('/${image_url}')`}} className='card-img w-full h-[18rem]'>
                </div>
                <div className='relative p-3 flex flex-col font-["Ubuntu"] text-[.9rem] card-bottom min-h-[6rem] w-full bg-black'>
                    <h1><span> (base) projects % </span><span className="text-purple-500">&#39;&#39;{project_name}&#39;&#39;</span></h1>
                    <ArrowCircleRightIcon className="card-icon absolute bottom-1 right-2"/>
                    <div ref={cardHist} className="card-hist h-full"></div>
                </div>
            </div>
        </div>
    )
}
