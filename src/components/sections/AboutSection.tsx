import { Handshake, Star } from "lucide-react";

const AboutSection = () => {
  const about = [
    {
      id: 1,
      icon: Star,
      description:
        "We co-generate purposeful knowledge that addresses community needs and challenges.",
    },
    {
      id: 2,
      icon: Star,
      description:
        "We co-create bold solutions turning ideas into sustainable, practical enterprises.",
    },
    {
      id: 3,
      icon: Star,
      description:
        "We transform innovations into cooperative brands and thriving social enterprises that generate jobs and income.",
    },
    {
      id: 4,
      icon: Star,
      description:
        "We empower communities with dignity, hope, and lasting positive transformation.",
    },
  ];
  return (
    <div className="py-20 h-[400px] ">
      <div className="flex gap-4 bg-[#0b1105] h-full justify-center  items-center">
        <div className="bg-white rounded-2xl flex items-center gap-2 text-black px-4 py-1">
          <Handshake />
          <p className="font-semibold">Partner with Us. Bee the change!</p>
        </div>
      </div>
      <div className=" h-full grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        {about.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <item.icon className="fill-amber-400 text-amber-400" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
