import AboutNavbar from "../components/about/AboutNavbar";
import AboutHero from "../components/about/AboutHero";
import Education from "../components/about/Education";
import Social from "../components/about/Social";
import AboutFooter from "../components/about/AboutFooter";

export default function AboutPage() {
  return (
    <>
      <AboutNavbar />
      <AboutHero />
      <Education />
      <Social />
      <AboutFooter />
    </>
  );
}