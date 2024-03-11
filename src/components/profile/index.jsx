import React from "react";
import '../../index.css'
import Sanjeevakumar_CV from '../../assets/documents/Sanjeevakumar_CV.pdf'
import profile from '../../assets/profile-user.png'

export default function Profile() {
  const updateResume = () => {
    window.open(Sanjeevakumar_CV)
  }

  return (
    <div className="bg-sky-200 min-h-screen lg:pl-20 md:pl-14 lg:pr-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:gap-2 gap-4 lg:gap-6 items-center">
        <div className="text-center md:text-left pt-8 md:pt-6"> {/* Added pt-4 for mobile and tablet */}
          <p className="text-emerald-400 font-medium">Hi, My name is</p>
          <h1 className="text-emerald-900 font-bold lg:text-5xl md:text-4xl text-2xl pt-2">Sanjeevakumar</h1>
          <h1 className="text-emerald-900 font-bold lg:text-4xl md:text-3xl pt-2">I build things for the web</h1>
          <p className="text-emerald-900 font-medium pt-4 md:w-3/4 lg:w-3/5">Dedicated and results-oriented professional with 3 years of experience, showcasing a proven track record of
            strategically fulfilling organizational requirements through methodical and well-organized approaches.
            Demonstrates adeptness in thriving under pressure and adeptly navigating dynamic challenges, consistently
            contributing to the elevation of the organizational brand.</p>
          <button className="bg-emerald-400 rounded-lg p-2 md:mb-6 px-4 text-emerald-900 font-medium mt-6"
            onClick={updateResume}
          >
            Download Resume
          </button>
        </div>
        <div className="profile-img min-h-screen bg-no-repeat flex items-center justify-center">
          <img className="rounded-lg lg:h-50 lg:w-72 md:h-45 md:w-60 shadow-2xl" src={profile} alt='profile-img' />
        </div>
      </div>
    </div>
  );
}
