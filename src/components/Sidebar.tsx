
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Sidebar({isHamburgerActive} : {isHamburgerActive : boolean}) {
    return (
        <div className={`sidebar z-10 fixed h-full w-0 top-0 bottom-0 left-0 ${isHamburgerActive ? "sidebar-active" : "sidebar-deactive "} bg-[#101117] overflow-hidden`}>
            <section className='sidebar-content mt-32'>
                <div className=' w-1/3 min-w-[300px] h-screen m-auto flex flex-col items-center pt-32 text-center'>
                    <span className='text-xl'>What&#39;s the next?</span>
                    <h1 className='text-6xl font-bold'>Get In Touch</h1>
                    <span className='mb-4 mt-2 text-xl'>I&#39;m currently looking for internship and freelance opportunities. My inbox is always open for anyone. Feel free to ask any questions that come to your mind. </span>
                    <a href='mailto:mericmertbulca@hotmail.com' className='w-64 h-12 bg-gradient-to-l from-blue-600 to-red-600  rounded-md text-lg font-medium flex justify-center items-center'>Send Mail</a>
                    <div className="icons flex gap-x-6 mt-14">
                        <Link href='https://github.com/mericmert' target='_blank'><GitHubIcon fontSize='large' /></Link>
                        <Link href='https://www.linkedin.com/in/mericmertbulca/' target='_blank'><LinkedInIcon fontSize='large' /></Link>
                        <Link href='https://twitter.com/mericmertbulca'><TwitterIcon fontSize='large' /></Link>
                    </div>

                </div>
            </section>
        </div>
    )
}
