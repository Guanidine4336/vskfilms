// // import { SiteHeader } from "@/components/site-header"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Camera, Edit, Film, Video } from "lucide-react"

// // const teamMembers = [
// //   {
// //     name: "Creative Director",
// //     role: "Leadership",
// //     description: "Guiding the creative vision and ensuring excellence in every project.",
// //     icon: <Film />,
// //   },
// //   {
// //     name: "Cinematographer",
// //     role: "Production",
// //     description: "Capturing stunning visuals that tell compelling stories.",
// //     icon: Camera,
// //   },
// //   {
// //     name: "Editor",
// //     role: "Post-Production",
// //     description: "Crafting narratives through expert post-production.",
// //     icon: Edit,
// //   },
// //   {
// //     name: "Production Manager",
// //     role: "Management",
// //     description: "Ensuring smooth operations and project delivery.",
// //     icon: Video,
// //   },
// // ]

// // export default function TeamPage() {
// //   return (
// //     <div className="min-h-screen bg-zinc-900">
// //       <SiteHeader />
// //       <main className="container px-4 py-16 mx-auto">
// //         <div className="max-w-4xl mx-auto">
// //           <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Meet the Team</h1>
// //           <p className="mb-12 text-lg text-zinc-300">
// //             Behind every great story is a team of passionate individuals. At VSK Films, we're more than just creatives –
// //             we're innovators, dreamers, and doers.
// //           </p>
// //           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
// //             {teamMembers.map((member, index) => (
// //               <Card key={index} className="bg-zinc-800 border-zinc-700">
// //                 <CardContent className="p-6">
// //                   <member.icon className="w-12 h-12 mb-4 text-white" />
// //                   <h3 className="mb-2 text-xl font-bold text-white">{member.name}</h3>
// //                   <p className="mb-4 text-sm text-zinc-400">{member.role}</p>
// //                   <p className="text-zinc-300">{member.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //           <div className="p-8 mt-12 rounded-lg bg-zinc-800">
// //             <h2 className="mb-4 text-2xl font-bold text-white">Join Our Team</h2>
// //             <p className="text-zinc-300">
// //               We're always looking for talented individuals who share our passion for storytelling and creativity. If
// //               you think you'd be a great fit, we'd love to hear from you.
// //             </p>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   )
// // }

// import { SiteHeader } from "@/components/site-header";
// import { Card, CardContent } from "@/components/ui/card";
// import { Camera, Edit, Film, Video } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Creative Director",
//     role: "Leadership",
//     description: "Guiding the creative vision and ensuring excellence in every project.",
//     icon: <Film className="w-12 h-12 mb-4 text-white" />, // Render as JSX
//   },
//   {
//     name: "Cinematographer",
//     role: "Production",
//     description: "Capturing stunning visuals that tell compelling stories.",
//     icon: <Camera className="w-12 h-12 mb-4 text-white" />,
//   },
//   {
//     name: "Editor",
//     role: "Post-Production",
//     description: "Crafting narratives through expert post-production.",
//     icon: <Edit className="w-12 h-12 mb-4 text-white" />,
//   },
//   {
//     name: "Production Manager",
//     role: "Management",
//     description: "Ensuring smooth operations and project delivery.",
//     icon: <Video className="w-12 h-12 mb-4 text-white" />,
//   },
// ];

// export default function TeamPage() {
//   return (
//     <div className="min-h-screen bg-zinc-900">
//       <SiteHeader />
//       <main className="container px-4 py-16 mx-auto">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Meet the Team</h1>
//           <p className="mb-12 text-lg text-zinc-300">
//             Behind every great story is a team of passionate individuals. At VSK Films, we're more than just creatives – 
//             we're innovators, dreamers, and doers.
//           </p>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="bg-zinc-800 border-zinc-700">
//                 <CardContent className="p-6">
//                   {member.icon} {/* Render the pre-rendered JSX here */}
//                   <h3 className="mb-2 text-xl font-bold text-white">{member.name}</h3>
//                   <p className="mb-4 text-sm text-zinc-400">{member.role}</p>
//                   <p className="text-zinc-300">{member.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <div className="p-8 mt-12 rounded-lg bg-zinc-800">
//             <h2 className="mb-4 text-2xl font-bold text-white">Join Our Team</h2>
//             <p className="text-zinc-300">
//               We're always looking for talented individuals who share our passion for storytelling and creativity. If 
//               you think you'd be a great fit, we'd love to hear from you.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Edit, Film, Video } from "lucide-react";

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Creative Director",
      role: "Leadership",
      description: "Shaping creative vision and ensuring excellence.",
      icon: <Film className="w-12 h-12 mb-4 text-white" />,
    },
    {
      name: "Cinematographer",
      role: "Production",
      description: "Capturing stunning visuals that tell compelling stories.",
      icon: <Camera className="w-12 h-12 mb-4 text-white" />,
    },
    {
      name: "Editor",
      role: "Post-Production",
      description: "Crafting narratives through expert post-production.",
      icon: <Edit className="w-12 h-12 mb-4 text-white" />,
    },
    {
      name: "Production Manager",
      role: "Management",
      description: "Ensuring smooth operations and project delivery.",
      icon: <Video className="w-12 h-12 mb-4 text-white" />,
    },
  ]);

  // Update the description example
  const updateDescription = () => {
    setTeamMembers(prevState => {
      const updatedMembers = [...prevState];
      updatedMembers[0].description = "New description for Creative Director";  // Update specific description
      return updatedMembers;
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <SiteHeader />
      <main className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Meet the Team</h1>
          <p className="mb-12 text-lg text-zinc-300">
            Behind every great story is a team of passionate individuals. At VSK Films, we're more than just creatives – 
            we're innovators, dreamers, and doers.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  {member.icon}
                  <h3 className="mb-2 text-xl font-bold text-white">{member.name}</h3>
                  <p className="mb-4 text-sm text-zinc-400">{member.role}</p>
                  <p className="text-zinc-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <button onClick={updateDescription} className="p-2 mt-8 text-white bg-blue-500">
            Update Description
          </button>
          <div className="p-8 mt-12 rounded-lg bg-zinc-800">
            <h2 className="mb-4 text-2xl font-bold text-white">Join Our Team</h2>
            <p className="text-zinc-300">
              We're always looking for talented individuals who share our passion for storytelling and creativity. If 
              you think you'd be a great fit, we'd love to hear from you.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
