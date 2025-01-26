// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
// import { Button } from "@/components/ui/button";
// import { Film, Camera, Video, Music, ImageIcon, Users } from "lucide-react";
// import { HoverEffect } from "@/components/hover-effect";
// import { Timeline } from "@/components/Timeline";
// import { AboutSection } from "@/components/about-section";
// import { TeamSection } from "@/components/team-section";

// const services = [
//   {
//     title: "Ad Films",
//     description: "Grabbing attention with impactful commercials that resonate with your audience.",
//     link: "/services/ad-films",
//     icon: <Film className="w-12 h-12 text-white" />, // Render as JSX
//   },
//   {
//     title: "Campaign Videos",
//     description: "Strategically designed visuals to drive your message home.",
//     link: "/services/campaign-videos",
//     icon: <Video className="w-12 h-12 text-white" />, // Render as JSX
//   },
//   {
//     title: "Music Videos",
//     description: "Creating visual masterpieces that complement your sound.",
//     link: "/services/music-videos",
//     icon: <Music className="w-12 h-12 text-white" />, // Render as JSX
//   },
//   {
//     title: "Photoshoots",
//     description: "Professional photography services for models, brands, and portfolio creation.",
//     link: "/services/photoshoots",
//     icon: <ImageIcon className="w-12 h-12 text-white" />, // Render as JSX
//   },
//   {
//     title: "Documentaries",
//     description: "Showcasing real stories with depth and authenticity.",
//     link: "/services/documentaries",
//     icon: <Camera className="w-12 h-12 text-white" />, // Render as JSX
//   },
//   {
//     title: "Event Coverage",
//     description: "Capturing unforgettable moments from events and weddings.",
//     link: "/services/events",
//     icon: <Users className="w-12 h-12 text-white" />, // Render as JSX
//   },
// ];

// export default function Home() {
//   const workflowData = [
//     {
//       title: "Understanding Your Vision",
//       content: (
//         <p className="max-w-xl text-zinc-300">
//           We begin by diving deep into your goals, audience, and ideas to lay a solid foundation.
//         </p>
//       ),
//     },
//     {
//       title: "Conceptualization",
//       content: (
//         <p className="max-w-xl text-zinc-300">
//           Our creative minds develop unique concepts that align perfectly with your brand's identity.
//         </p>
//       ),
//     },
//     {
//       title: "Pre-Production",
//       content: (
//         <p className="max-w-xl text-zinc-300">Planning every detail meticulously, from storyboarding to scheduling.</p>
//       ),
//     },
//     {
//       title: "Production",
//       content: (
//         <p className="max-w-xl text-zinc-300">
//           Lights, camera, action! We bring your ideas to life with state-of-the-art equipment and expertise.
//         </p>
//       ),
//     },
//     {
//       title: "Post-Production",
//       content: (
//         <p className="max-w-xl text-zinc-300">
//           Where the magic happens – editing, color grading, sound design, and visual effects.
//         </p>
//       ),
//     },
//     {
//       title: "Delivery & Feedback",
//       content: (
//         <p className="max-w-xl text-zinc-300">
//           We deliver your content on time and ensure it meets your expectations perfectly.
//         </p>
//       ),
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-black">
//       <SiteHeader />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative h-[80vh] overflow-hidden bg-black">
//           <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
//           <div className="container relative flex flex-col items-center justify-center h-full mx-auto text-center text-white">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
//               Welcome to VSK Films
//             </h1>
//             <p className="max-w-3xl mt-4 text-lg text-zinc-300">
//               Where creativity meets excellence. We are a passionate team dedicated to crafting exceptional video
//               content that inspires, engages, and delivers results.
//             </p>
//             <Button className="mt-8" size="lg">
//               Explore Our Work
//             </Button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="what-we-do" className="relative">
//           <div className="container px-4 py-24 mx-auto">
//             <h2 className="mb-16 text-4xl font-bold text-center text-white">What We Do</h2>
//             <HoverEffect items={services} />
//           </div>
//         </section>

//         {/* Workflow Section */}
//         <section id="workflow">
//           <Timeline data={workflowData} />
//         </section>

//         {/* Team Section */}
//         <TeamSection />

//         {/* About Section */}
//         <section id="about">
//           <AboutSection />
//         </section>
//       </main>

//       <SiteFooter />
//     </div>
//   );
// }
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/hover-effect";
import { Timeline } from "@/components/Timeline";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";

const services = [
  {
    title: "Ad Films",
    description: "Grabbing attention with impactful commercials that resonate with your audience.",
    link: "/services/ad-films",
  },
  {
    title: "Campaign Videos",
    description: "Strategically designed visuals to drive your message home.",
    link: "/services/campaign-videos",
  },
  {
    title: "Music Videos",
    description: "Creating visual masterpieces that complement your sound.",
    link: "/services/music-videos",
  },
  {
    title: "Photoshoots",
    description: "Professional photography services for models, brands, and portfolio creation.",
    link: "/services/photoshoots",
  },
  {
    title: "Documentaries",
    description: "Showcasing real stories with depth and authenticity.",
    link: "/services/documentaries",
  },
  {
    title: "Event Coverage",
    description: "Capturing unforgettable moments from events and weddings.",
    link: "/services/events",
  },
];

export default function Home() {
  const workflowData = [
    {
      title: "Understanding Your Vision",
      content: (
        <p className="max-w-xl text-zinc-300">
          We begin by diving deep into your goals, audience, and ideas to lay a solid foundation.
        </p>
      ),
    },
    {
      title: "Conceptualization",
      content: (
        <p className="max-w-xl text-zinc-300">
          Our creative minds develop unique concepts that align perfectly with your brand's identity.
        </p>
      ),
    },
    {
      title: "Pre-Production",
      content: (
        <p className="max-w-xl text-zinc-300">Planning every detail meticulously, from storyboarding to scheduling.</p>
      ),
    },
    {
      title: "Production",
      content: (
        <p className="max-w-xl text-zinc-300">
          Lights, camera, action! We bring your ideas to life with state-of-the-art equipment and expertise.
        </p>
      ),
    },
    {
      title: "Post-Production",
      content: (
        <p className="max-w-xl text-zinc-300">
          Where the magic happens – editing, color grading, sound design, and visual effects.
        </p>
      ),
    },
    {
      title: "Delivery & Feedback",
      content: (
        <p className="max-w-xl text-zinc-300">
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
        <section className="relative h-[80vh] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
          <div className="container relative flex flex-col items-center justify-center h-full mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to VSK Films
            </h1>
            <p className="max-w-3xl mt-4 text-lg text-zinc-300">
              Where creativity meets excellence. We are a passionate team dedicated to crafting exceptional video
              content that inspires, engages, and delivers results.
            </p>
            <Button className="mt-8" size="lg">
              Explore Our Work
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="what-we-do" className="relative">
          <div className="container px-4 py-24 mx-auto">
            <h2 className="mb-16 text-4xl font-bold text-center text-white">What We Do</h2>
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
