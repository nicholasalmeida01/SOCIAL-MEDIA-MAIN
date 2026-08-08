import Nav from "@/components/cases/fisio/Nav";
import Hero from "@/components/cases/fisio/Hero";
import StrideDivider from "@/components/cases/fisio/StrideDivider";
import About from "@/components/cases/fisio/About";
import Specialty from "@/components/cases/fisio/Specialty";
import Blog from "@/components/cases/fisio/Blog";
import Packages from "@/components/cases/fisio/Packages";
import InstaStrip from "@/components/cases/fisio/InstaStrip";
import FooterFisio from "@/components/cases/fisio/FooterFisio";

export default function FisioterapiaCasePage() {
  return (
    <>
      <Nav />
      <Hero />
      <StrideDivider />
      <About />
      <Specialty />
      <Blog />
      <Packages />
      <InstaStrip />
      <FooterFisio />
    </>
  );
}
