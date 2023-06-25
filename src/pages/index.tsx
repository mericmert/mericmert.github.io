import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import DownloadIcon from '@mui/icons-material/Download';
import Gradient from '@/components/Gradient';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Shell from '@/components/Shell';
import { useAnimation } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';

const inter = Inter({ subsets: ['latin'] })

const texts = {
  first_intro: ["Welcome", "to", "my", "portfolio", "page!"],
  second_intro: ["I", "wish you", "a great", "journey", ";)"]
}


export default function Home() {

  const [isHamburgerActive, setHamburgerActive] = useState<boolean>(false);
  const [heroText, setHeroText] = useState<string[]>(texts.first_intro);
  const [fadeText, setFadeText] = useState<boolean>(false);

  const [isAnimation, setIsAnimation] = useAnimation();

  const animate = async () => {
    await introTransition()
    setIsAnimation(false);
  }

  useEffect(() => {
    if (isAnimation) animate();
    const container = document.querySelector(".content-container");
    if (!isAnimation) setTimeout(() => container?.classList.add("fade-in"), 100);

  }, [isAnimation])

  const introTransition = async () => {
    const DELAY = 3000;
    setFadeText(true);
    await new Promise(r => setTimeout(r, DELAY));
    setFadeText(false);
    await new Promise(r => setTimeout(r, DELAY / 1.1));
    setFadeText(true);
    setHeroText(texts.second_intro)
    await new Promise(r => setTimeout(r, DELAY));
    setFadeText(false);
    await new Promise(r => setTimeout(r, DELAY / 2));
  }
  return (
    <>
      <Head>
        <title>Meriç Mert Bulca</title>
      </Head>
      <main className={`${inter.className} ${isHamburgerActive ? "h-screen " : ""} overflow-clip w-full min-h-screen bg-gradient-to-br from-gradient-color to-[hsl(0,0%,9`}>
        {isAnimation ?
          (
            <div className='w-full h-screen flex flex-col justify-center items-center font-sans font-thin'>
              <h1 className={`hero-text text-5xl ${fadeText ? "hero-text-in" : "hero-text-out"} flex flex-wrap justify-center gap-x-3`}>
                {heroText.map((text, idx) => {
                  const duration = 3000 + idx * 100;
                  const style = {
                    transitionDuration: `${duration}ms`,
                    transitionProperty: 'opacity, filter',
                  }
                  return (
                    <span className={`inline-block opacity-0 blur-[4px] ` + (fadeText ? 'fade-in' : 'fade-out')}
                      key={idx}
                      style={style}
                    >
                      {text}
                    </span>
                  );
                })}
              </h1>
            </div>
          )
          :
          (
            <div className={`min-h-screen content-container opacity-0 blur-100 translate-x-[-10px] scale-95 pb-9`}>
              <Navbar isHamburgerActive={isHamburgerActive} setHamburgerActive={setHamburgerActive} />
              <div className={`w-full mt-12`}>
                <section className='m-auto w-[50vw] min-w-[350px] flex flex-col justify-center items-center'>
                  <div className='relative w-[190px] h-[190px] rounded-full overflow-hidden'>
                    <Gradient />
                    <Image className='absolute p-1 rounded-full '
                      src="/vesikalik.jpg"
                      alt='vesikalik'
                      width={190}
                      height={190}
                    />
                  </div>
                </section>
                <section className='about-me w-[50vw] min-w-[350px] m-auto flex flex-col'>
                  <div className="about-header flex items-center gap-x-3">
                    <span className='text-2xl font-bold'>&lt;about&gt;</span>
                    <hr className='w-[calc(100%-60px)] border-gray-500' />
                  </div>
                  <span>Hey, my name is Meriç and I am currently a senior CSE student at Sabanci University.
                    I have a strong passion for programming, design and algorithmic problem solving.
                    Around 3-4 years, I&#39;ve been trying to sharpen my skills and gain experience in these fields through hands-on practices
                    such as web applications, scripts, bots, ML models and so on. I&#39;ve worked @ Siemens as a Full-stack developer last year and I&#39;m currently a
                    Java developer intern @ OBSS.
                  </span>
                  <div className="bottom-container flex mt-4 gap-x-4">
                    <div className="about-bottom mt-6">
                      <span className=''>The last thing, thank you for exploring me ;)</span>
                      <div className='mt-2 m-auto'>
                        <a download href='./mericmertbulca_cv.pdf' className='relative w-32 h-10 rounded-md text-sm font-medium flex justify-center items-center gap-x-1 overflow-hidden'>
                          <div className="gradient-container absolute w-full h-full inset-0 z-0 ">
                            <Gradient />
                          </div>

                          <span className='absolute left-[20%]'>Resume</span>
                          <DownloadIcon className='absolute right-[15%]' />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='about-me w-[50vw] min-w-[350px] m-auto flex flex-col mt-8'>
                  <div className="about-header flex items-center gap-x-3">
                    <span className='text-2xl font-bold'>&lt;shell&gt;</span>
                    <hr className='w-[calc(100%-60px)] border-gray-500' />
                  </div>
                  <div>
                    <Shell />

                  </div>
                </section>
                <section className='mb-6 about-me w-[50vw] min-w-[350px] m-auto flex flex-col mt-8'>
                  <div className="about-header flex items-center gap-x-3">
                    <span className='text-2xl font-bold'>&lt;projects&gt;</span>
                    <hr className='w-[calc(100%-60px)] border-gray-500' />
                  </div>
                  <div className='mt-2 flex gap-x-4 flex-col lg:flex-row justify-center items-center lg:items-start gap-y-8'>
                    <ProjectCard
                      image_url={"sunft.gif"}
                      project_name={"SUNFT"}
                      description="a Web3 NFT Marketplace app"
                      tech_stack={["NextJS, Tailwind, Django, MySQL"]}
                    />
                    <ProjectCard
                      image_url={"netflix-landpage.png"}
                      project_name={"Netflix Landpage"}
                      description={"A front-end of netflix landpage"}
                      tech_stack={["HTML, CSS, Tailwind"]}
                    />
                    <ProjectCard
                      image_url={"flip.jpg"}
                      project_name={"FLIP"}
                      description={"(Invoice Tracking System having excel-like functionalities."}
                      tech_stack={["PHP, MSSQL, jQuery, HTML, CSS"]}
                    />
                    <ProjectCard
                      image_url={"twitter.webp"}
                      project_name={"Twitter Bot Detection Model"}
                      description={"A ML bot predicting whether an account is bot or not"}
                      tech_stack={["Python"]}
                      />

                  </div>
                </section>
              </div>
              <Sidebar isHamburgerActive={isHamburgerActive} />
            </div>
          )}
      </main>
    </>
  )
}
