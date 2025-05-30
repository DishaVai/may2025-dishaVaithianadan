import { User } from "@heroui/user";
import Image from "next/image";

import { title } from "@/components/primitives";
export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>CTRL Freaks</h1>
      <div>
        <h2>About Us</h2>
        <ul>
          <li>
            Hello, I am riley, and I really enjoy being with my friends and
            running track. I also love listening to music and watching Netflix.
            I want to go to college for track at the University of Oregon and
            anywhere in the south. I go to skyline high school and graduate in
            2027.{" "}
          </li>
          <li>
            Hello, my name is Zoe, and I am in 10th grade at skyline high
            school. I enjoy playing volleyball for my club and the school. I
            have played volleyball since 7th grade, and I have been to Hawaii,
            Oregon and Texas for tournaments. I am a libero which is a defensive
            only position and i get to wear a different colored jersey than
            everyone else on my team.{" "}
          </li>
          <li>
            Hi! My name is Maddy and I’m a sophomore at skyline high school! I
            have been skiing since I was 3. I go to crystal mountain almost
            every other weekend in the winter and have been racing for almost 6
            years. Recently I switched to freeride and tricks for skiing.
          </li>
          <li>
            I’m Ana and I am a freshman at SHS. I’m from Mexico and Spanish is
            my first language. I enjoy listening to and playing music, Japanese,
            and taekwondo. I am a black belt in TKD and a cellist in Skyline
            Chamber Orchestra. I also draw and read in my free time. I also like
            to play video games, including Splatoon 3 and Zelda BOTW.
          </li>
          <li>
            Hi, my name is Anastasiya and I&apos;m a freshman at Skyline. I
            enjoy sailing dinghies and photography. I have a 2nd degree black
            belt in taekwondo and karate. I play piano, guitar, cello, and
            violin. I love swimming, dance, and drifting{" "}
          </li>
          <li>
            {" "}
            Hi! I’m Disha and I enjoy playing video games including Civilization
            and Tears of the Kingdom and playing the viola, as well as mock
            trial. I compete with a robotics team and have been coding all my
            life, though I’m new to web design.
          </li>
        </ul>
        <Image
          alt="a volleyball player"
          height={300}
          src="/volleyball.webp"
          width={300}
        />
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          description="Member"
          name="Jane Doe"
        />
      </div>
    </div>
  );
}
