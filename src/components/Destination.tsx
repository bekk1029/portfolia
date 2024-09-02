import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

const Destination = () => {
  return (
    <div className="flex flex-col items-center h-screen my-12">
      <h1 className="text-white text-5xl font-bold mb-8">Top Destinations</h1>
      <BentoGrid className="w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          src={
            "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="ss"
          fill
        />
      </div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          src={
            "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="ss"
          fill
        />
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          src={
            "https://images.pexels.com/photos/27301001/pexels-photo-27301001/free-photo-of-processed-with-vsco-with-c8pro-preset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="ss"
          fill
        />
      </div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          src={
            "https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="ss"
          fill
          className="w-full h-full"
        />
      </div>
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          src={
            "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="ss"
          fill
        />
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

export default Destination;
