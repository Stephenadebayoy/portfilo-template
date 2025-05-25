/** @format */

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const FeaturePageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full bg-[#1B1B1B] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default FeaturePageLayout;
