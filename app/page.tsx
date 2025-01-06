// page.tsx
import { navItems } from "@/data";
import dynamic from "next/dynamic";

// Dynamically import components that might use document
const FloatingNavDynamic = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: true });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: true,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: true,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavDynamic navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
