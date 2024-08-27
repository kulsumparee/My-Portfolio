import Image from "next/image";
import HeroSection from "./components/heroSection/Index";
import Navbar from "./components/heroSection/Navbar";
import  AboutSection  from "./components/aboutSection/AboutSection";
import ProjectsSection from "./components/projectSection/Projects";
import ContactUs from "./components/contectSection/ContactUs";
import FooterSection from "./components/footerSection/footer";

export default function Home() {
  return (
    <main className=" w-[100%] h-full bg-black text-white ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactUs />
      <FooterSection/>
     
    </main>
  );
}
