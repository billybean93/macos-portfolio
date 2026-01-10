const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  // {
  //   id: "safari",
  //   name: "Articles", // was "Safari"
  //   icon: "safari.png",
  //   canOpen: true,
  // },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["Java", "SwiftUI", "Swift"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Next.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/billybean93",
  },

  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/đức-anh-nguyễn-09967815a"

  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/billy.jpeg",
  },
  {
    id: 2,
    img: "/images/flappy-bird.png",
  },
  {
    id: 3,
    img: "/images/terminal-bare.png",
  },
  {
    id: 4,
    img: "/images/nau-menu.png",
  },
  {
    id: 5,
    img: "/images/mc-me.jpeg",
  },
   {
    id: 6,
    img: "/images/itineria-home.png",
  },
   {
    id: 7,
    img: "/images/itineria-home1.png",
  },
  {
    id: 8,
    img: "/images/itineria-icon.png",
  },

];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nau Coffee Popup Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-200", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nau.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is a project I made to help my friends who need a professional website to be featured in their local news!",
            "Nau Coffee is a modern Next.js 16 web application built with React 19, TypeScript, and Tailwind CSS v4.",
            "Featuring smooth scroll animations via Lenis, Framer Motion transitions.",
            "This site showcases Vietnamese coffee culture through a responsive, performant, and accessible user experience deployed via Netlify.",
            
          ],
        },
        {
          id: 2,
          name: "nau-coffee.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nau-coffee.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nau.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/nau1.png",
        },
        {
          id: 5,
          name: "nau-menu.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-20 right-70",
          imageUrl: "/images/nau-menu.png",
        },

        {
            id: 6,
            name: "nau-popups.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-50 right-15",
            imageUrl: "/images/nau-popups.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ITINERIA Travel Planner",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[30vh] left-350",
      children: [
        {
          id: 1,
          name: "ITINERIA.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "ITINERIA is a comprehensive travel app designed to simplify planning through a map-integrated itinerary builder.",
            "Users can create detailed schedules enriched with notes and photos, while social sharing features enable collaborative planning.",
            "By centralizing travel details, the app ensures users remain organized, connected, and stress-free throughout their journey.",
            "The app also has home screen widgets! AND calls OpenAI API to run its AI assisstant chatbox!",
            "This is my first experience working with iOS and it has been a pleasure learning SwiftUI designing something useful! ",
          ],
        },
        {
          id: 2,
          name: "ITINERIA.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/billybean93/Itineria",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "itineria-icon.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/itineria-icon.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/N2yovaok9L6B7kQxfZ9L0g/iPhone-Engineering-Prototype-Design?node-id=0-1&p=f",
          position: "top-60 left-5",
        },
        {
          id: 6,
          name: "ITINERIA-home.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 left-50",
          imageUrl: "/images/itineria-home.png",
        },
        {
          id: 7,
          name: "ITINERIA-home1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-50",
          imageUrl: "/images/itineria-home1.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Bare Metal Programming",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-150",
      children: [
        {
          id: 1,
          name: "Bare Metal.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "We built an educational bare-metal OS for Raspberry Pi to host a real-time Flappy Bird game.",
            "Bypassing Linux entirely, we developed the necessary low-level drivers for serial communication and graphics rendering.",
            "The final application demonstrates full-stack embedded competency: using mailbox property interfaces for hardware configuration, architectural timers for physics synchronization, and double-buffering to maintain high-performance visuals and responsive gameplay.",
            "This is one of the most enjoyable projects I have done as I got the chance to collab with others and explore low-level programming!"
          ],
        },
        {
          id: 2,
          name: "flappy-bird-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.youtube.com/watch?v=X53Bgt_SvOk",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "flappy.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/flappy-bird.png",
        },
        {
          id: 5,
          name: "bare-metal.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/billybean93/Bare-Metal-Programming",
          position: "top-60 right-20",
        },
        {
          id: 6,
          name: "bare-metal-terminal.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-20 right-70",
          imageUrl: "/images/terminal-bare.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/billy.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpeg",
    },
    {
      id: 3,
      name: "mc-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/mc-me.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/billy.jpeg",
      description: [
        "Hey, I'm Billy! 👋 I'm a developer with a broad interest in how things work.",
        "I've spent my time building across platforms: crafting mobile experiences, designing responsive web apps, and even experimenting with bare-metal OS development.",
        "I thrive on versatility and the challenge of picking up new tools.",
        "When I’m not at my keyboard, I’m out meeting new people and sharing stories—usually at a cafe with a slightly too expensive latte.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };