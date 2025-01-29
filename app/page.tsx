import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HoverEffect } from "@/components/hover-effect";
import { Timeline } from "@/components/Timeline";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { TypewriterEffect } from "@/components/ui/typewriter-effect"; // Import Typewriter Effect
import { FaFilm, FaVideo, FaMusic, FaCamera, FaClipboard, FaRegHandshake } from 'react-icons/fa';

const services = [
  {
    title: "Ad Films",
    description: "Grabbing attention with impactful commercials that resonate with your audience.",
    icon: <FaFilm className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
  {
    title: "Campaign Videos",
    description: "Strategically designed visuals to drive your message home.",
    icon: <FaVideo className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
  {
    title: "Music Videos",
    description: "Creating visual masterpieces that complement your sound.",
    icon: <FaMusic className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
  {
    title: "Photoshoots",
    description: "Professional photography services for models, brands, and portfolio creation.",
    icon: <FaCamera className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
  {
    title: "Documentaries",
    description: "Showcasing real stories with depth and authenticity.",
    icon: <FaClipboard className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
  {
    title: "Event Coverage",
    description: "Capturing unforgettable moments from events and weddings.",
    icon: <FaRegHandshake className="text-4xl text-[rgba(221,158,49,0.5)]" />
  },
];


export default function Home() {
  const workflowData = [
    {
      title: "Understanding Your Vision",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">
          We begin by diving deep into your goals, audience, and ideas to lay a solid foundation.
        </p>
      ),
    },
    {
      title: "Conceptualization",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">
          Our creative minds develop unique concepts that align perfectly with your brand's identity.
        </p>
      ),
    },
    {
      title: "Pre-Production",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">Planning every detail meticulously, from storyboarding to scheduling.</p>
      ),
    },
    {
      title: "Production",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">
          Lights, camera, action! We bring your ideas to life with state-of-the-art equipment and expertise.
        </p>
      ),
    },
    {
      title: "Post-Production",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">
          Where the magic happens – editing, color grading, sound design, and visual effects.
        </p>
      ),
    },
    {
      title: "Delivery & Feedback",
      content: (
        <p className="max-w-xl text-zinc-300 ml-[2cm]">
          We deliver your content on time and ensure it meets your expectations perfectly.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/back.svg')] bg-cover bg-center opacity-50" />
          <div className="relative z-10 flex flex-col items-center text-center text-gray-300 opacity-50 0 drop-shadow-md mt-[5cm] backdrop-blur-sm">
            <TypewriterEffect
              words={[
                { text: "Extraordinary", className: "text-gray-300" },
                { text: "Stories,", className: "text-gray-300" },
                { text: "Impactful", className: "text-[rgb(220,156,52)] opacity-90" },
                { text: "Frames", className: "text-[rgb(220,156,52)] opacity-90" },
                { text: "–", className: "text-gray-300" },
                { text: "VSK", className: "text-gray-300" },
                { text: "Films", className: "text-gray-300" },
              ]}
              className="text-4xl md:text-6xl font-extrabold shadow-sm"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="what-we-do" className="relative">
          <div className="container px-4 py-6 mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-center text-white">
  What <span className="text-[rgba(221,158,49,0.5)]">We do</span>
</h2>

            <div className="flex items-center justify-center mb-4">
              <p className="max-w-3xl text-lg leading-relaxed text-center md:text-xl text-zinc-300">
                At <span className="font-bold">VSK Films</span>, we’re driven by the art of storytelling and innovation.
              </p>
            </div>
            <HoverEffect items={services} />
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow">
          <Timeline data={workflowData} />
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}