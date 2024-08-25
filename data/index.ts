export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 overflow-hidden md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Hello.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bike rental sytem - OnWheelz",
    des: "Explore the wonders of our Bike rental website through which you can access the various bikes for rent",
    img: "/onwheelzimg.png",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    // link: "https://google.com",
    href: "https://onwheelz-git-master-gurungviniveshs-projects.vercel.app/login",
  },
  {
    id: 2,
    title: "Portfolio",
    des: "Simplify way to get access to individual regarding there accomplishments, projects and work experience.",
    img: "/p2.svg",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    // link: "https://github.com/adrianhajdin/zoom-clone",
    href: "",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "Full-stack developer Intern - Gladhand Pvt. ltd.",
    desc: "Assisted in the development of a web-based platform using Angular.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 2,
    title: "Freelance Dev Project using AngularJs",
    desc: "Created a bike rental website using Angular.js",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/GurungVinivesh",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/vinivesh-gurung-5789142b3/",
  },
];

// data for achievements

export interface ImageData {
  id: number;
  imageUrl: string;
  text: string;
  textClass: string;
  children?: string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}

export const imageData: ImageData[] = [
  {
    id: 1,
    imageUrl: "/ViniveshGurung(3)_page-0001.jpg",
    text: "Excel Certification by Great Learning",
    textClass: "text-bold",
    childrenClassName: "text-lg",
    imageClassName: "rounded-lg",
    className: "additional-class",
  },
  {
    id: 2,
    imageUrl: "/CourseraVinivesh.jpg",
    text: "Data Anlaytics Basics certfication by Google",
    textClass: "text-bold",
    childrenClassName: "text-lg",
    imageClassName: "rounded-lg",
    className: "additional-class",
  },
  // {
  //   id: 3,
  //   imageUrl: "/path/to/image2.jpg",
  //   text: "Second Image",
  //   childrenClassName: "text-lg",
  //   imageClassName: "rounded-lg",
  //   className: "additional-class",
  // },
  // {
  //   id: 4,
  //   imageUrl: "/path/to/image2.jpg",
  //   text: "Second Image",
  //   childrenClassName: "text-lg",
  //   imageClassName: "rounded-lg",
  //   className: "additional-class",
  // },
  // Add more entries as needed
];
