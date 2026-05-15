import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Edwin",
  lastName: "Puertas",
  name: `Edwin Puertas`,
  role: "Associate Professor & AI / NLP Researcher",
  avatar: "/images/avatar.jpg",
  email: "epuertas@utb.edu.co",
  location: "Cartagena de Indias, Colombia",
  languages: ["English", "Spanish"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on AI, NLP and research from Cartagena, Colombia.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/edwinpuertas",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/edwinpuertas",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/edwinpuertas",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Edwin Puertas, PhD`,
  description:
    "Associate Professor and researcher in AI, NLP and Computer Vision. Technological University of Bolívar, Cartagena, Colombia.",
  headline: <>AI Research Applied from Latin America</>,
  featured: {
    display: false,
    title: <>Featured</>,
    href: "/work",
  },
  subline: (
    <>
      Associate Professor at the{" "}
      <strong>Technological University of Bolívar</strong>. PhD in Engineering
      (PUJ, 2023). IEEE AI Standards Committee member. Over 299 citations in
      international publications on AI, NLP and Computer Vision.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Edwin Puertas, PhD`,
  description:
    "Associate Professor and researcher in AI, NLP and Computer Vision at the Technological University of Bolívar, Cartagena, Colombia.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I hold a <strong>PhD in Engineering</strong> from Pontificia Universidad
        Javeriana (2023) and serve as Associate Professor at the Technological
        University of Bolívar, where I direct the Doctoral and Master's Programs
        in Systems Engineering. My work bridges academic research and industrial
        application in Artificial Intelligence, Natural Language Processing (NLP)
        and Computer Vision. I have been a member of the{" "}
        <strong>IEEE Artificial Intelligence Standards Committee</strong> since
        2022, and my publications have accumulated over 299 citations in
        international journals and conferences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Technological University of Bolívar",
        timeframe: "2016 – Present",
        role: "Associate Professor — Director of Doctoral & Master's Programs in Engineering",
        achievements: [
          <>
            Lead the Doctoral and Master's Programs in Systems Engineering,
            mentoring researchers in AI, NLP and Data Science.
          </>,
          <>
            Principal investigator on applied NLP projects for Latin American
            Spanish: sentiment analysis, propaganda detection and media framing
            using transformer-based models (BERT, LLMs).
          </>,
          <>
            Participated in international NLP competitions: IberLEF, DIPROMATS
            2024 and HOMO-MEX 2024, collaborating with the Latam AI ecosystem.
          </>,
        ],
        images: [],
      },
      {
        company: "IEEE Artificial Intelligence Standards Committee",
        timeframe: "2022 – Present",
        role: "Active Member",
        achievements: [
          <>
            Contribute to the development of international standards for
            Artificial Intelligence systems.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pontificia Universidad Javeriana",
        description: (
          <>PhD in Engineering — 2016–2023. Bogotá, Colombia.</>
        ),
      },
      {
        name: "Technological University of Bolívar",
        description: (
          <>BSc in Systems Engineering. Cartagena, Colombia.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Research Areas & Skills",
    skills: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description: (
          <>
            Design, training and production deployment of ML and Deep Learning
            models. Specialisation in transformer architectures (BERT, LLMs)
            and fine-tuning for Spanish-language tasks.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "Natural Language Processing (NLP)",
        description: (
          <>
            Sentiment analysis, propaganda detection, media framing, named
            entity recognition and text classification. Corpora and models for
            Latin American Spanish.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
      {
        title: "Computer Vision",
        description: (
          <>
            Disease detection in tropical crops, visual inspection and traffic
            infraction detection using convolutional neural networks and YOLO.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on AI, NLP and Research",
  description: `Articles and insights by ${person.name} on Artificial Intelligence, NLP and Data Science.`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects — ${person.name}`,
  description: `Research and engineering projects by ${person.name} in AI, NLP and Computer Vision.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `Images and moments from ${person.name}'s research journey.`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
