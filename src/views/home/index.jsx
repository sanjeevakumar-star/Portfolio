import React from "react";
import Profile from "../../components/profile";
import Skils from '../../components/skils'
import Projects from '../../components/projects'
import ContactDetails from '../../components/contactDetails'
export default function Home() {
  return (
    <>
      <Profile />
      <Skils />
      <Projects />
      <ContactDetails />
    </>
  );
}


