import HeroSection from "@/components/HeroSection";
import SecurityStrip from "@/components/SecurityStrip";
import PartnerList from "@/components/PartnerList";
import TestEmail from "@/components/TestEmail";
import ValidateEmail from "@/components/ValidateEmail";
import WhyChoose from "@/components/WhyChoose";
import Integration from "@/components/Integration";
import Honoree from "@/components/Honoree";


export default function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection/>
      {/* security certifications strip */}
      <SecurityStrip/>
      {/* security certifications strip */}
      <PartnerList/>
      {/* Test email section */}
      <TestEmail/>
      {/* How to validate your Email */}
      <ValidateEmail/>
      {/* Why to choose ZeroBounce */}
      <WhyChoose/>
      {/* Integration */}
      <Integration/>
      {/* Honoree */}
      <Honoree/>
    </>
  );
}
