import React from "react";
import '../../index.css'
import ReactImg from "../../assets/react.png";
import bootstrapImg from "../../assets/bootstrap.png"
import ReduxImg from "../../assets/redux.svg"
import AntD from "../../assets/antd.png"
import Node from "../../assets/node.png"
export default function Projects() {
    const technology = [
        {
            id: 1,
            skil: 'React',
            image: ReactImg
        },
        {
            id: 2,
            skil: 'Bootstrap',
            image: bootstrapImg
        },
        {
            id: 3,
            skil: 'Redux',
            image: ReduxImg
        }]

    const assistTechnology = [
        {
            id: 1,
            skil: 'React',
            image: ReactImg
        },
        {
            id: 2,
            skil: 'AntD',
            image: AntD

        },
        {
            id: 3,
            skil: 'Redux',
            image: ReduxImg
        }]

    const damTechnology = [
        {
            id: 1,
            skil: 'Node',
            image: Node
        }]


    const AssistProjectDetails = [
        {
            id: 1,
            title: 'Project Details',
            name: "Assist",
            url: "https://assist-qa1.uaenorth.atkinsassist.com/",
            content1: "Proficiently handled responsibilities as a web developer at Project Assist, demonstrating versatility and expertise in web domains.",
            content2: "Independently writing the code to implement the design and functionality of the web application and managing all aspects from individual function implementations to successful deployments, showcasing autonomy and technical proficiency.",
            content3: "Agile Collaboration and International Client Interaction: Contributed actively to Agile Scrum methodologies, ensuring adaptive and responsive project development. Directly engaged with international end clients, fostering effective communication and aligning project objectives with client expectations."
        }
    ]

    const moviewoodProjectDetails = [
        {
            id: 2,
            title: 'Project Details',
            name: "Moviewud",
            url: "moviewood.in",
            content1: "Frontend Developer: As a fresher I played a pivotal role in the development team at Moviewud, Contributing actively front-end development tasks under the guidance of senior developers. I actively participated in the end-to-end development process of our OTT platforms, assisting in the conceptualization, design, and deployment phases.",
            content2: "Collaborative Teamwork: Worked closely within a compact team, undertaking diverse collaborative and efficient work environment.",
            content3: "Diverse Content Integration: Contributed significantly to Moviewud's success by enabling the integration of a diverse range of content, including movies, series, stage plays, and documentaries, across multiple languages, thereby enhancing the platform's appeal for a broad  audience and ensuring a truly inclusive entertainment experience. "
        }
    ]

    const templeOnlineProjectDetails = [
        {
            id: 3,
            title: 'Project Details',
            name: "Temple Online",
            url: "http://templeonline.in",
            content1: "Played a pivotal role as a front-end developer in the creation of Temple Online, contributing to the development of a robust and user-friendly Web application.",
            content2: "Agile Collaboration: Actively participated in Agile scrum methodologies, fostering a collaborative and adaptive development environment for the DAM Health project.",
            content3: "Full Lifecycle Involvement: Managed deployment processes. Engaged in the complete project lifecycle, from development to deployment, contributing to the evolution of smarter and more efficient farming solutions."
        }
    ]


    const damPHealthrojectDetails = [
        {
            id: 4,
            title: 'Project Details',
            name: "DAM Health",
            url: "https://dam-health.com/",
            content1: "Backend Developer: Played a crucial role as a backend developer in the Creation of DAM Health APIs, My involvement ranged from conceptualization development and collaboration with frontend developers in debugging and bug-fixing phases",
            content2: "Agile Collaboration: Actively participated in Agile scrum methodologies, fostering a collaborative and adaptive development environment for the DAM Health project.",
            content3: "Performance Enhancement: Successfully improved Query optimizations enhancing the overall efficiency and responsiveness of the DAM Health platform."
        }
    ]


    return (
        <div>

            <div className="bg-sky-200 h-100 min-h-screen md:pl-20 md:pr-20 flex items-center justify-center">

                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  min-h-screen items-center">
                    {
                        AssistProjectDetails.map(datas =>
                            <div className="text-emerald-900 font-medium md:pt-4 pt-6">
                                <p className="text-emerald-400  font-medium">{datas.id}.{datas.title}</p>
                                <h1 className="text-emerald-900 font-bold lg:text-5xl md:text-3xl text-2xl pt-2">{datas.name}</h1>
                                <hr class="h-px my-2 bg-emerald-900  dark:bg-emerald-700" />
                                <p> <span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content1}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content2}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content3}</p>
                                <button className="bg-emerald-400 rounded-lg p-2 px-4 text-emerald-900 font-medium mt-6"><a href={datas.url}>Click here</a></button>
                            </div>
                        )}

                    <div className="profile-img py-6 md:min-h-screen bg-no-repeat flex items-center justify-center">
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
                            <div className="lg:p-12 md:p-4 p-1 ">
                                <div className="text-emerald-900 font-medium md:font-bold bg-gray-200">
                                    <div className="p-2">
                                        <div className="p-5 rounded-sm shadow-2xl " >
                                            <div className="flex">Technology -
                                                {
                                                    assistTechnology.map((datas, i) => {
                                                        return (
                                                            <img className="md:w-6 w-6 p-1" src={datas.image} alt='technology' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Duration -<span>Two Years</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Roles & Responsibility -<span>Frontend Developer</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-sky-200 h-100 min-h-screen md:pl-20 md:pr-20 flex items-center justify-center">

                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  min-h-screen items-center">

                    <div className="md:order-last">{
                        moviewoodProjectDetails.map(datas =>
                            <div className="text-emerald-900 font-medium md:pt-4 pt-6">
                                <p className="text-emerald-400 font-medium">{datas.id}.{datas.title}</p>
                                <h1 className="text-emerald-900 font-bold lg:text-5xl md:text-3xl text-2xl pt-2">{datas.name}</h1>
                                <hr class="h-px my-2 bg-emerald-900  dark:bg-emerald-700" />
                                <p> <span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content1}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content2}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content3}</p>
                                <button className="bg-emerald-400 rounded-lg p-2 px-4 text-emerald-900 font-medium mt-6">Click here</button>
                            </div>
                        )}
                    </div>
                    <div className="profile-img py-6 md:min-h-screen bg-no-repeat flex items-center justify-center">
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
                            <div className="lg:p-12 md:p-4 p-1 ">
                                <div className="text-emerald-900 font-medium md:font-bold bg-gray-200">
                                    <div className="p-2">
                                        <div className="p-5 rounded-sm shadow-2xl " >
                                            <div className="flex">Technology -
                                                {
                                                    technology.map((datas, i) => {
                                                        return (
                                                            <img className="md:w-6 w-6 p-1" src={datas.image} alt='technology' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Duration -<span>Six months</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Roles & Responsibility -<span>Frontend Developer</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-sky-200 h-100 min-h-screen md:pl-20 md:pr-20 flex items-center justify-center">

                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  min-h-screen items-center">
                    {
                        templeOnlineProjectDetails.map(datas =>
                            <div className="text-emerald-900 font-medium md:pt-4 pt-6">
                                <p className="text-emerald-400 font-medium">{datas.id}.{datas.title}</p>
                                <h1 className="text-emerald-900 font-bold lg:text-5xl md:text-3xl text-2xl pt-2">{datas.name}</h1>
                                <hr class="h-px my-2 bg-emerald-900  dark:bg-emerald-700" />
                                <p> <span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content1}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content2}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content3}</p>
                                <button className="bg-emerald-400 rounded-lg p-2 px-4 text-emerald-900 font-medium mt-6">Click here</button>
                            </div>
                        )}

                    <div className="profile-img py-6 md:min-h-screen bg-no-repeat flex items-center justify-center">
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
                            <div className="lg:p-12 md:p-4 p-1 ">
                                <div className="text-emerald-900 font-medium md:font-bold bg-gray-200">
                                    <div className="p-2">
                                        <div className="p-5 rounded-sm shadow-2xl " >
                                            <div className="flex">Technology -
                                                {
                                                    technology.map((datas, i) => {
                                                        return (
                                                            <img className="md:w-6 w-6 p-1" src={datas.image} alt='technology' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Duration -<span>Three months</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Roles & Responsibility -<span>Frontend Developer</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sky-200 h-100 min-h-screen md:pl-20 md:pr-20 flex items-center justify-center">

                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  min-h-screen items-center">

                    <div className="md:order-last">{
                        damPHealthrojectDetails.map(datas =>
                            <div className="text-emerald-900 font-medium md:pt-4 pt-6">
                                <p className="text-emerald-400 font-medium">{datas.id}.{datas.title}</p>
                                <h1 className="text-emerald-900 font-bold lg:text-5xl md:text-3xl text-2xl pt-2">{datas.name}</h1>
                                <hr class="h-px my-2 bg-emerald-900  dark:bg-emerald-700" />
                                <p> <span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content1}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content2}</p>
                                <p><span className="font-extrabold text-emerald-400">{"=>    "}</span>{datas.content3}</p>
                                <button className="bg-emerald-400 rounded-lg p-2 px-4 text-emerald-900 font-medium mt-6">Click here</button>
                            </div>
                        )}
                    </div>
                    <div className="profile-img py-6 md:min-h-screen bg-no-repeat flex items-center justify-center">
                        <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
                            <div className="lg:p-12 md:p-4 p-1 ">
                                <div className="text-emerald-900 font-medium md:font-bold bg-gray-200">
                                    <div className="p-2">
                                        <div className="p-5 rounded-sm shadow-2xl " >
                                            <div className="flex">Technology -
                                                {
                                                    damTechnology.map((datas, i) => {
                                                        return (
                                                            <img className="md:w-6 w-6 p-1" src={datas.image} alt='technology' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Duration -<span>Three months</span></p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-gray-200">
                                        <div className="p-5 rounded-sm shadow-2xl" >
                                            <p>Roles & Responsibility -<span>Backend Developer</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}


