import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Edwin",
  lastName: "Puertas",
  name: `Edwin Puertas`,
  role: "Profesor e Investigador en IA · NLP · Visión por Computadora",
  avatar: "/images/avatar.jpg",
  email: "epuertas@utb.edu.co",
  location: "America/Bogota",
  languages: ["Spanish", "English"],
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
    "Profesor Asociado e investigador en IA, NLP y Visión por Computadora. Universidad Tecnológica de Bolívar, Cartagena, Colombia.",
  headline: <>Investigación en IA aplicada desde América Latina</>,
  featured: {
    display: false,
    title: <>Featured</>,
    href: "/work",
  },
  subline: (
    <>
      Profesor Asociado en la{" "}
      <strong>Universidad Tecnológica de Bolívar</strong>. Doctor en Ingeniería
      (PUJ, 2023). Miembro del IEEE AI Standards Committee. Más de 299 citas en
      publicaciones internacionales en IA, NLP y Visión por Computadora.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Edwin Puertas, PhD — Sobre mí`,
  description:
    "Profesor Asociado e investigador en IA, NLP y Visión por Computadora en la Universidad Tecnológica de Bolívar, Cartagena, Colombia.",
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
    title: "Introducción",
    description: (
      <>
        Soy Doctor en Ingeniería por la Pontificia Universidad Javeriana (2023)
        y Profesor Asociado en la Universidad Tecnológica de Bolívar, donde
        dirijo los programas de Doctorado y Maestría en Ingeniería de Sistemas.
        Mi trabajo combina investigación académica con aplicación industrial en
        Inteligencia Artificial, Procesamiento de Lenguaje Natural (NLP) y
        Visión por Computadora. Soy miembro del IEEE Artificial Intelligence
        Standards Committee desde 2022 y cuento con más de 299 citas en
        publicaciones internacionales.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Universidad Tecnológica de Bolívar",
        timeframe: "2016 – Presente",
        role: "Profesor Asociado — Director de Doctorado y Maestría en Ingeniería",
        achievements: [
          <>
            Dirijo los programas de Doctorado y Maestría en Ingeniería de
            Sistemas, formando investigadores en IA, NLP y Ciencia de Datos.
          </>,
          <>
            Investigador principal en proyectos de NLP aplicado al español:
            análisis de sentimientos, detección de propaganda y framing
            mediático con modelos basados en transformers (BERT, LLMs).
          </>,
          <>
            Participación en competencias internacionales de NLP: IberLEF,
            DIPROMATS 2024 y HOMO-MEX 2024.
          </>,
        ],
        images: [],
      },
      {
        company: "IEEE Artificial Intelligence Standards Committee",
        timeframe: "2022 – Presente",
        role: "Miembro activo",
        achievements: [
          <>
            Contribuyo al desarrollo de estándares internacionales para sistemas
            de Inteligencia Artificial.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formación académica",
    institutions: [
      {
        name: "Pontificia Universidad Javeriana",
        description: (
          <>Doctor en Ingeniería — 2016–2023. Bogotá, Colombia.</>
        ),
      },
      {
        name: "Universidad Tecnológica de Bolívar",
        description: (
          <>
            Ingeniero de Sistemas. Cartagena, Colombia.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Áreas de investigación y habilidades",
    skills: [
      {
        title: "Inteligencia Artificial & Machine Learning",
        description: (
          <>
            Diseño, entrenamiento y despliegue de modelos de ML y Deep Learning
            en producción. Especialidad en arquitecturas transformer (BERT,
            LLMs) y fine-tuning para tareas en español.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "NLP — Procesamiento de Lenguaje Natural",
        description: (
          <>
            Análisis de sentimientos, detección de propaganda, framing
            mediático, reconocimiento de entidades y clasificación de texto.
            Corpus y modelos para el español latinoamericano.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "Visión por Computadora",
        description: (
          <>
            Detección de enfermedades en cultivos tropicales, inspección visual
            y detección de infracciones de tráfico mediante redes neuronales
            convolucionales y YOLO.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notas sobre IA, NLP e investigación",
  description: `Artículos y reflexiones de ${person.name} sobre Inteligencia Artificial, NLP y Ciencia de Datos.`,
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos — ${person.name}`,
  description: `Proyectos de investigación e ingeniería de ${person.name} en IA, NLP y Visión por Computadora.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galería — ${person.name}`,
  description: `Imágenes y momentos de la trayectoria investigadora de ${person.name}.`,
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
