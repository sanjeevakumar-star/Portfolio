import React from "react";
import '../../index.css'
import ReactImg from "../../assets/react.png";
import NodeImg from "../../assets/node.png"
import ReduxImg from "../../assets/redux.svg"
import HtmlImg from "../../assets/html.png"
import cssImg from "../../assets/css.png"
import bootstrapImg from "../../assets/bootstrap.png"
import tailwindImg from "../../assets/tailwind.png"
import jsImg from "../../assets/js.png"
export default function Profile() {

  const skils = [
    {
      id: 1,
      skil: 'React',
      image: ReactImg
    },
    {
      id: 2,
      skil: 'Node',
      image: NodeImg
    },
    {
      id: 3,
      skil: 'HTMl',
      image: HtmlImg
    },
    {
      id: 4,
      skil: 'Css',
      image: cssImg
    },
    {
      id: 5,
      skil: 'JS',
      image: jsImg
    },
    {
      id: 6,
      skil: 'Redux',
      image: ReduxImg
    },
    {
      id: 7,
      skil: 'JS',
      image: jsImg
    },
    {
      id: 8,
      skil: 'Bootstrap',
      image: bootstrapImg
    }
    ,
    {
      id: 9,
      skil: 'Tailwind',
      image: tailwindImg
    }
  ]
  return (
    <div className="h-100 min-h-screen md:pl-20 md:pr-20 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-screen items-center  ">
        <div className="md:order-last">
          <div className="lg:ml-12 lg:ml-12 md:ml-7 md:text-start text-center">
            <h1 className="text-emerald-900 font-bold md:text-5xl text-2xl pb-4">Skills</h1>
            <hr className="h-8" />
            <p className="text-emerald-900 font-medium md:w-4/5 lg:w-3/5">
              Spearheaded the development and maintenance of cutting-edge web and utilizing advanced
              technologies such as React.js, Javascript, and Node.js. Ensured seamless performance and optimal
              user experiences for diverse projects.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg shadow-2xl">
          <div className="lg:p-12 md:p-3 p-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4  lg:gap-6">
              {skils.map((item, index) => {
                return (
                  <div className="profile-img lg:p-5 p-5 md:p-3 rounded-sm shadow-2xl" key={index}>
                    <div key={index}>
                      <div className="flex">
                        <div className="p-2 lg:w-12 lg:h-12 md:w-9 md:h-9 border-none rounded-sm">
                          <img src={item.image} alt="" className="" />
                        </div>
                      </div>
                      <div className="text-emerald-900 md:text-sm font-medium mt-2">
                        {item.skil}
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


