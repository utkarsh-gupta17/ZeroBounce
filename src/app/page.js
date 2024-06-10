import HeroSection from "@/components/HeroSection";
import SecurityStrip from "@/components/SecurityStrip";
import PartnerList from "@/components/PartnerList";
import TestEmail from "@/components/TestEmail";
import ValidateEmail from "@/components/ValidateEmail";


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
    </>
  );
}
