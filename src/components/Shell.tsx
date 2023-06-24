import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


const shellCommands = {
    experience : ["experience", "see all the work experiences"],
    education : ["education", "see all the education background"],
    clear : ["clear", "clear the console logs."],
    skills : ["skills", "see all my skillset"],
    contact : ["contact", "contact me via email"]
}

const experiences = [
    ["OBSS", "Java Developer Intern", "Current"],
    ["Siemens", "Full-stack Developer", "07/2022-10/2022"]
]

const education = [
    ["Sabanci University", "Computer Science", "2019-Current", "3.55/4.0", "Five terms Honor|High Honor"],
]

const skills = [
    ["Frontend", ["NextJS", "Tailwind", "ReactJS", "jQuery", "HTML", "CSS"]],
    ["Backend", ["Express", "Spring Boot", "MongoDB", "PostgreSQL", "MySQL", "MSSQL"]],
    ["Languages", ["TypeScript", "JavaScript", "Python", "C++", "Java", "C#"]],
    ["Soft skills" , ["Software Architecture", "Agile"]]
]


export default function Shell() {

    let inputRef = useRef<HTMLDivElement | null>(null);
    let historyRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    function handleKeyDown(e: any) {
        if (e.key === 'Enter') {
            e.preventDefault();

            handleCommand(inputRef.current?.textContent);
            if (inputRef.current) inputRef.current.textContent = '';
            //focusAndMoveCursorToTheEnd();
        }
    }

    // Set the focus to the input so that you can start typing straight away:
    const onShellClick = () => {
        inputRef.current?.focus();
    }

    const printAllCommands = () => {
        for(const val of Object.values(shellCommands)){
            const newLine = document.createElement('DIV');
            newLine.innerHTML = `<span class='flex'><span class='block w-24'> - ${val[0]}</span><span class='ml-8'>${val[1]}</span></span>`;
            historyRef.current?.appendChild(newLine);
        }
    }
    const printExperiences = () => {
        const newLine = document.createElement('DIV');
        newLine.innerHTML = `<h1><span class="text-blue-300">const</span> <span class="text-blue-500">experiences</span> = <span class="text-purple-500">[</span><br/>
                            ${experiences.map((e) => `<span class="ml-3 text-purple-500">{</span>
                            <span class="text-blue-300">Company : </span> <span class="text-orange-400">"${e[0]}"</span>
                            , <span class="text-blue-300">Role : </span> <span class="text-orange-400">"${e[1]}"</span>
                            , <span class="text-blue-300">Date :</span> <span class="text-orange-400">"${e[2]}"</span>
                            <span class="text-purple-500">}</span>, <br/>` ).join("").slice(0,-5)}</br>
                            <span class="text-purple-500">]</span>
                            </h1>`;
        historyRef.current?.appendChild(newLine);
          
    }
    const printEducation = () => {
        const newLine = document.createElement('DIV');
        newLine.innerHTML = `<h1><span class="text-blue-300">const</span> <span class="text-blue-500">education</span> = <span class="text-purple-500">[</span><br/>
                            ${education.map((e) => `<span class="ml-3 text-purple-500">{</span>
                            <span class="text-blue-300">University : </span> <span class="text-orange-400">"${e[0]}"</span>
                            , <span class="text-blue-300">Major : </span> <span class="text-orange-400">"${e[1]}"</span>
                            , <span class="text-blue-300">Date :</span> <span class="text-orange-400">"${e[2]}"</span>
                            , <span class="text-blue-300">GPA :</span> <span class="text-orange-400">"${e[3]}"</span>
                            , <span class="text-blue-300">Achievements :</span> <span class="text-orange-400">"${e[4]}"</span>
                            <span class="text-purple-500">}</span>, <br/>` ).join("").slice(0,-5)}</br>
                            <span class="text-purple-500">]</span>
                            </h1>`;
        historyRef.current?.appendChild(newLine);
    }
    const printSkills = () => {
        const newLine = document.createElement('DIV');
        newLine.innerHTML = `<h1><span class="text-blue-300">const</span> <span class="text-blue-500">skills</span> = <span class="text-purple-500">[</span><br/>
                            ${skills.map((e) => `<span class="ml-3 text-purple-500">{</span>
                            <span class="text-blue-300">${e[0]} : <span class="text-purple-500">[</span></span> <span class="text-orange-400">"${e[1]}"<span class="text-purple-500">]</span></span>
                            <span class="text-purple-500">}</span>, <br/>` ).join("").slice(0,-5)}</br>
                            <span class="text-purple-500">]</span>
                            </h1>`;
        historyRef.current?.appendChild(newLine);
    }
    const clearHistory = () => {
        if (historyRef.current) historyRef.current.innerHTML = "";
    }
    const printInvalidCommandError = () => {
        const newLine = document.createElement('DIV');
        newLine.textContent = "command not found: see 'help'";
        historyRef.current?.appendChild(newLine);
    }
    const openContact = () => {
        router.replace("mailto:mericmertbulca@hotmail.com");
    }

    const handleCommand = (command: any) => {
        const line = document.createElement('DIV');

        line.textContent = `(base) portfolio % ${command}`;
        switch (command.toLowerCase()) {
            case "help":
                printAllCommands();
                break;
            case "experience":
                printExperiences();
                break;
            case "education":
                printEducation();
                break;
            case "skills":
                printSkills();
                break;
            case "clear":
                clearHistory();
                break;
            case "contact":
                openContact();
                break;
            default:
                printInvalidCommandError()
                break;
        }
        if (command.toLowerCase() !== "clear") historyRef.current?.appendChild(line);
    }

    return (
        <div className='overflow-auto shell mt-2 w-full h-[320px] bg-black flex flex-col rounded-md text-gray-200 text-sm'>
            <div className='shell-header flex items-center bg-[rgba(67,71,70,0.5)] h-5 rounded-t-md px-2 gap-x-2'>
                <div className='w-3 h-3 bg-[#F6544E] rounded-full'></div>
                <div className='w-3 h-3 bg-[#FABF2F] rounded-full'></div>
                <div className='w-3 h-3 bg-[#3DCD42] rounded-full'></div>
                <Image
                    src="/filelogo.png"
                    alt="filelogo"
                    width={14}
                    height={14}
                />
                <span className="text-[.7rem] text-gray-400">@portfolio - mericmertbulca</span>
            </div>
            <div onClick={onShellClick} className="p-2 w-full h-full flex flex-col">
                <span>Use &#39;help&#39; command to see the available commands.</span>
                <div className="input-container">
                    <div ref={historyRef} id="history"></div>
                    <span className="mr-1">(base) portfolio %</span>
                    <div
                        ref={inputRef}
                        id="input"
                        contentEditable={true}
                        onKeyDown={handleKeyDown}
                    >
                    </div>
                    <button id="caret">&nbsp;</button>

                </div>
            </div>
        </div >
    )
}
