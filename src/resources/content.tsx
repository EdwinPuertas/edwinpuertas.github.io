import { About, Blog, Gallery, Home, Newsletter, Person, Publications, Social, Work } from "@/types";

const person: Person = {
  firstName: "Edwin",
  lastName: "Puertas",
  name: "Edwin Puertas",
  role: "AI Software Architect & NLP Researcher · Associate Professor",
  avatar: "/images/avatar.jpg",
  email: "epuertas@utb.edu.co",
  location: "America/Bogota",
  city: "Cartagena de Indias, Colombia",
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
  title: "Edwin Puertas, PhD",
  description:
    "AI Software Architect, NLP Researcher and Associate Professor at the Technological University of Bolívar. IEEE Senior Member. Cartagena, Colombia.",
  headline: <>AI Research Applied from Latin America</>,
  featured: {
    display: false,
    title: <>Featured</>,
    href: "/work",
  },
  subline: (
    <>
      Associate Professor &amp; Program Director at the{" "}
      <strong>Technological University of Bolívar</strong>. PhD in Engineering
      (PUJ, 2023). IEEE Senior Member. Specialising in NLP, Deep Learning and
      Computer Vision applied to real-world problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "Edwin Puertas, PhD",
  description:
    "AI Software Architect, NLP Researcher and Associate Professor at the Technological University of Bolívar, Cartagena, Colombia. IEEE Senior Member.",
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
        I am an AI Software Architect and NLP Researcher in computer science,
        serving as Associate Professor at the Technological University of
        Bolívar (UTB) and a Senior Member of the IEEE. I have extensive
        expertise in Artificial Intelligence, Natural Language Processing, Big
        Data, Data Analytics, and Software Engineering. My interdisciplinary
        approach has allowed me to make significant contributions to both the
        academic community and industry. I hold a PhD in Engineering from
        Pontificia Universidad Javeriana (2023) and direct the Doctoral and
        Master's Programs in Systems Engineering at UTB.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Technological University of Bolívar (UTB)",
        timeframe: "2008 – Present",
        role: "Associate Professor & Program Director — Doctoral & Master's Programs in Engineering",
        achievements: [
          <>
            Direct the academic, research and administrative coordination of the
            graduate programs in engineering, including curriculum development
            and strategic planning.
          </>,
          <>
            Implement AI projects across industrial sectors with focus on NLP,
            Data Analytics and Big Data. Teach AI, Machine Learning, Big Data,
            Data Analytics, Software Architecture and Data Science to
            undergraduate and graduate students.
          </>,
          <>
            Participated in international NLP competitions: IberLEF,
            DIPROMATS 2024, HOMO-MEX 2024, SemEval 2023–2024, PAN@CLEF
            2019–2020.
          </>,
        ],
        images: [],
      },
      {
        company: "Navigating Toward the Future",
        timeframe: "2024 – Present",
        role: "Co-Investigator",
        achievements: [
          <>
            Develop and implement AI-powered solutions for intelligent
            maintenance in naval environments, integrating IoT systems and
            advanced analytics.
          </>,
          <>
            Support the design of digital twin components for vessels and data
            analysis processes for predictive and preventive maintenance
            (Maintenance 5.0 ecosystem).
          </>,
        ],
        images: [],
      },
      {
        company: "CAOBA — Center of Excellence in Big Data & Data Analytics",
        timeframe: "July 2016 – July 2023",
        role: "Senior Data Scientist",
        achievements: [
          <>
            Oversaw AI projects across industrial sectors with focus on NLP,
            Data Analytics and Big Data for clients including Nutresa,
            Bancolombia and others.
          </>,
          <>
            Designed and implemented technology solutions using Python, C#,
            Java, C++ and Julia across different computing platforms and cloud
            environments.
          </>,
        ],
        images: [],
      },
      {
        company: "Universitat Politècnica de València (UPV)",
        timeframe: "Jan 2019 – Mar 2019",
        role: "Visiting Researcher",
        achievements: [
          <>
            Conducted research collaborations and participated in scientific
            events, contributing to bilateral cooperation and publication of
            research papers.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Turin",
        timeframe: "Oct 2018 – Jan 2019",
        role: "Visiting Researcher",
        achievements: [
          <>
            Established bilateral cooperative ties with researchers, enriching
            academic perspective and opening avenues for joint research and
            interdisciplinary projects.
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
        description: <>PhD in Engineering — 2016–2023. Bogotá, Colombia.</>,
      },
      {
        name: "Technological University of Bolívar",
        description: (
          <>Master in Engineering — 2008–2011. Cartagena, Colombia.</>
        ),
      },
      {
        name: "Technological University of Bolívar",
        description: (
          <>BSc in Systems Engineering — 1995–2001. Cartagena, Colombia.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Research Areas & Technical Skills",
    skills: [
      {
        title: "Artificial Intelligence & Deep Learning",
        description: (
          <>
            Machine Learning, Deep Learning, Reinforcement Learning, Transfer
            Learning. Production deployment with MLOps practices.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
      {
        title: "Natural Language Processing (NLP)",
        description: (
          <>
            Author profiling, sentiment analysis, text classification,
            information retrieval, propaganda detection, framing analysis.
            Transformer-based models (BERT, LLMs) fine-tuned for Spanish.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "Computer Vision",
        description: (
          <>
            Object detection, disease detection in crops, traffic violation
            monitoring. YOLO and CNN architectures.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
      {
        title: "Data Engineering & Backend",
        description: (
          <>
            Big Data, Data Analytics, Multi-domain signal processing. Backend
            languages: Python, C++, C#, Java, Julia. Databases: SQL Server,
            MySQL, MongoDB. DevOps/MLOps, Docker, Git.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
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
  description: "Research and engineering projects in AI, NLP and Computer Vision.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `Images and moments from ${person.name}'s research journey.`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

const publications: Publications = {
  path: "/publications",
  label: "Publications",
  title: "Publications — Edwin Puertas",
  description:
    "Peer-reviewed publications by Edwin Puertas in AI, NLP, Computer Vision and Data Science.",
  items: [
    // ── 2026 ────────────────────────────────────────────────────────────────
    {
      year: 2026,
      title: "Detection of diseases in cucumber using deep neural networks",
      authors: "Menco-Tovar, A., Martinez-Santos, J. C., and 1 more author",
      venue: "Neural Computing and Applications, 38(5)",
      badge: "Journal",
      doi: "10.1007/s00521-026-11945-z",
    },
    {
      year: 2026,
      title: "SAPSAI – System for acquisition, preprocessing, and storage of agricultural images",
      authors: "Tovar, A. M., Hernández, C. V., and 2 more authors",
      venue: "In CCIS, 2702, 327–338",
      badge: "CCIS",
      doi: "10.1007/978-3-032-08206-0_28",
    },

    // ── 2025 ────────────────────────────────────────────────────────────────
    {
      year: 2025,
      title: "A computer vision system for detecting motorcycle violations in pedestrian zones",
      authors: "Hernández-Díaz, N., Peñaloza, Y. C., and 3 more authors",
      venue: "Multimedia Tools and Applications, 84(13), 12659–12682",
      badge: "Journal",
      doi: "10.1007/s11042-024-19356-9",
      citations: 3,
    },
    {
      year: 2025,
      title: "Enhancing consistency in piping and instrumentation diagrams using DistilBERT and smart PID systems",
      authors: "Gómez-Vega, F. S., Acuña, O., and 7 more authors",
      venue: "Systems and Soft Computing, 7",
      badge: "Journal",
      doi: "10.1016/j.sasc.2025.200373",
      citations: 1,
    },
    {
      year: 2025,
      title: "The media framing dataset: Analyzing news narratives in Mexico and Colombia",
      authors: "Cuadrado, J., Martinez, E., and 2 more authors",
      venue: "Data in Brief, 58",
      badge: "Journal",
      doi: "10.1016/j.dib.2025.111284",
    },
    {
      year: 2025,
      title: "Mapping motion: A cognitive approach to dyspraxia multimodal analysis",
      authors: "Muvdi, D., Hernández, M. R., and 6 more authors",
      venue: "In LNCS, 15277, 14–25",
      badge: "LNCS",
      doi: "10.1007/978-3-031-80366-6_2",
    },
    {
      year: 2025,
      title: "VerbaNexAI at CheckThat! 2025: Fine-tuning DeBERTa for multi-label scientific discourse detection in tweets",
      authors: "Borrero, M. J. S., Castañeda, J. E. S., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 1237–1245",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Next-generation smart cities: Harnessing AI for enhanced pedestrian protection",
      authors: "Amaya, D. A. G., Serrano, J. E., and 2 more authors",
      venue: "In TEMSCON LATAM 2025. IEEE",
      badge: "IEEE",
      doi: "10.1109/TEMSCONLATAM65810.2025.11238663",
    },
    {
      year: 2025,
      title: "Smart data from CCTV: Streamlining automated dataset construction for safer cities",
      authors: "Amaya, D. A. G., Serrano, J. E., and 2 more authors",
      venue: "In TEMSCON LATAM 2025. IEEE",
      badge: "IEEE",
      doi: "10.1109/TEMSCONLATAM65810.2025.11238544",
    },
    {
      year: 2025,
      title: "CEDNAV–UTB: Efficient image retrieval for arguments with CLIP",
      authors: "Amaya, D. A. G., Castañeda, J. E. S., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 4601–4609",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2025,
      title: "Implementation of a DDS-based publishing interface for real-time inertial sensor data in navigation systems",
      authors: "Sosa, M., Serrano, J., and 2 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340084",
      citations: 1,
    },
    {
      year: 2025,
      title: "Predictive model for STEM vocational guidance through profile analysis and information adaptation with a gender perspective",
      authors: "Moreno Novoa, M., Henríquez Núñez, Y., and 2 more authors",
      venue: "In Proceedings of LACCEI 2025",
      badge: "LACCEI",
      doi: "10.18687/LEIRD2025.1.1.1122",
    },
    {
      year: 2025,
      title: "COTECMAR-UTB at eRisk 2025: Semantic-centroid symptom ranking and early depression detection using adaptive decision rule",
      authors: "Mendoza, L., Suarez, J., and 3 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 1562–1582",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Portable molecular detection system using LAMP isothermal amplification with precise PID thermal regulation",
      authors: "Tovar, A. M., Casseres, M. A. S., and 2 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340524",
    },
    {
      year: 2025,
      title: "COTECMAR–UTB at TalentCLEF 2025: Linking job titles and ESCO skills with sentence transformer embeddings",
      authors: "Llamas, J., Puertas, E., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 4438–4447",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "VerbaNex at TalentCLEF 2025: Semantic matching of multilingual job titles through a framework integrating ESCO taxonomy",
      authors: "Novoa, M. M., Martinez-Santos, J. C., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 4448–4458",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Hybrid re-ranking for biomedical entity linking using SapBERT embeddings",
      authors: "Gnecco, D. P., Serrano, J., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 497–508",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Economic optimization of local energy markets: Strategies for prosumers with IoT and blockchain integration",
      authors: "Medina-Reyes, M. F., Puertas, E., and 1 more author",
      venue: "In IEEE LCIoT 2025 (pp. 40–43). IEEE",
      badge: "IEEE",
      doi: "10.1109/LCIoT64881.2025.11118552",
    },
    {
      year: 2025,
      title: "Segmentation of tourists in the department of Sucre, Colombia: An approach based on digital footprints",
      authors: "Almanza-González, D., Marrugo, L. D. A., and 3 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340510",
    },
    {
      year: 2025,
      title: "VerbaNexAI at CLEF 2025 JOKER Task 3: Multi-model LLM approach for onomastic wordplay translation",
      authors: "Ramirez, M. P., Jimenez, J. D., and 4 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 2860–2869",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "PubMed API and LLM-driven hybrid retrieval system for biomedical question answering",
      authors: "Morillo, A., Agamez, C., and 3 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340582",
    },
    {
      year: 2025,
      title: "Driving operational efficiency in SMEs through structured digital transformation strategies",
      authors: "Vásquez, J., Puertas, E., and 3 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340495",
    },
    {
      year: 2025,
      title: "UTBNLP at CLEF JOKER 2025 Task 2: mBART-50 fine-tuning with dictionary-guided forced decoding for English-French pun translation",
      authors: "Marrugo-Tobon, D. A., Jimenez, J. D., and 3 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 2838–2848",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Tiles-wise inference with vision transformers for multispecies identification in vegetation images",
      authors: "Menco-Tovar, A., Serrano, J. E., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 3102–3110",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Prediction of human preferences and explanation generation with LLM: An approach based on RAG, few-shot learning, and Auto-CoT",
      authors: "Almanza-Gonzalez, D., Serrano, J. E., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 1360–1369",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2025,
      title: "RoBERT-IA: Human-AI collaborative text classification",
      authors: "Sánchez, D. G., Jimenez, J. D., and 4 more authors",
      venue: "In CEUR Workshop Proceedings, 4038, 3672–3680",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Evaluation of image preprocessing algorithms for foggy scene enhancement",
      authors: "Amaya, D. A. G., Castañeda, J. E. S., and 2 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11340492",
    },
    {
      year: 2025,
      title: "EarlySTEM: Machine learning platform for early identification of dropout risk in STEM programs",
      authors: "Novoa, M. M., Arrieta-Guardo, I. S., and 5 more authors",
      venue: "In C3 2025 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C366505.2025.11339990",
    },
    {
      year: 2025,
      title: "Development of a biomedical question answering system based on transformer models",
      authors: "López, L., Martinez-Santos, J. C., and 1 more author",
      venue: "In CEUR Workshop Proceedings, 4038, 452–459",
      badge: "CLEF",
    },
    {
      year: 2025,
      title: "Adaptive author profiling-based model for personalized tourism recommendations using NLP",
      authors: "Almanza-Gonzalez, D., Nunez, Y. H., and 2 more authors",
      venue: "In TEMSCON LATAM 2025. IEEE",
      badge: "IEEE",
      doi: "10.1109/TEMSCONLATAM65810.2025.11238759",
    },

    // ── 2024 ────────────────────────────────────────────────────────────────
    {
      year: 2024,
      title: "VerbaNexAI Lab at SemEval-2024 Task 1: A multilayer artificial intelligence model for semantic relationship detection",
      authors: "Morillo, A., Peña, D., and 2 more authors",
      venue: "In Proceedings of SemEval-2024 (pp. 1344–1350). ACL",
      badge: "SemEval",
      doi: "10.18653/v1/2024.semeval-1.194",
      citations: 2,
    },
    {
      year: 2024,
      title: "VerbaNexAI Lab at SemEval-2024 Task 10: Emotion recognition and reasoning in mixed-coded conversations based on an NRC VAD approach",
      authors: "Garcia, S., Martinez, E., and 3 more authors",
      venue: "In Proceedings of SemEval-2024 (pp. 1332–1338). ACL",
      badge: "SemEval",
      doi: "10.18653/v1/2024.semeval-1.192",
      citations: 2,
    },
    {
      year: 2024,
      title: "VerbaNexAI Lab at SemEval-2024 Task 3: Deciphering emotional causality in conversations using multimodal analysis approach",
      authors: "Pacheco, V., Cuadrado, J., and 3 more authors",
      venue: "In Proceedings of SemEval-2024 (pp. 1339–1343). ACL",
      badge: "SemEval",
      doi: "10.18653/v1/2024.semeval-1.193",
    },
    {
      year: 2024,
      title: "VerbaNexAI at MEDIQA-CORR 2024: Efficacy of GRU with BioWordVec and ClinicalBERT in error correction in clinical notes",
      authors: "Villate, D., Tinjaca, L., and 3 more authors",
      venue: "In ClinicalNLP 2024 (pp. 461–469). ACL",
      badge: "ACL",
      citations: 1,
    },
    {
      year: 2024,
      title: "VerbaNex AI at DIPROMATS 2024: Enhancing propaganda detection in diplomatic tweets with fine-tuned BERT and integrated NLP techniques",
      authors: "Cuadrado, J., Martinez, E., and 3 more authors",
      venue: "In CEUR Workshop Proceedings, 3756",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2024,
      title: "VerbaNexAI Lab at HOMO-MEX 2024: Multiclass and multilabel detection of LGBTQ+ phobic content using transformers",
      authors: "Gonzalez-Henao, R. D., Marrugo-Tobon, D. A., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 3756",
      badge: "CLEF",
    },
    {
      year: 2024,
      title: "Assessment of the level of digital maturity through a process analysis",
      authors: "Vásquez, J., Castillo, D., and 3 more authors",
      venue: "In Proceedings of LACCEI 2024",
      badge: "LACCEI",
      doi: "10.18687/LACCEI2024.1.1.1807",
      citations: 2,
    },
    {
      year: 2024,
      title: "Implementation of convolutional neural networks for automated disease detection in cucumber crops",
      authors: "Tovar, A. M., Puertas, E., and 1 more author",
      venue: "In CCIS, 2208, 156–167",
      badge: "CCIS",
      doi: "10.1007/978-3-031-75233-9_12",
      citations: 1,
    },
    {
      year: 2024,
      title: "VerbaNex AI at CLEF EXIST 2024: Detection of online sexism using transformer models and profiling techniques",
      authors: "Martinez, E., Cuadrado, J., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 3740, 1107–1113",
      badge: "CLEF",
    },
    {
      year: 2024,
      title: "Unveiling tourist profiles in the department of Sucre: A text analysis approach",
      authors: "Almanza-Gonzalez, D., Puertas, E., and 1 more author",
      venue: "In CCIS, 2208, 27–40",
      badge: "CCIS",
      doi: "10.1007/978-3-031-75233-9_3",
      citations: 2,
    },
    {
      year: 2024,
      title: "TRIP a-bike: An interactive educational system for learning English as a second language",
      authors: "Ciccarelli, S., Peña, D., and 3 more authors",
      venue: "In Proceedings of LACCEI 2024",
      badge: "LACCEI",
      doi: "10.18687/LACCEI2024.1.1.1873",
    },
    {
      year: 2024,
      title: "Team QTB on feature selection via quantum annealing and hybrid models",
      authors: "Payares, E., Puertas, E., and 1 more author",
      venue: "In CEUR Workshop Proceedings, 3740, 3105–3114",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2024,
      title: "Automated detection of depression and anxiety using lexical and phonestheme features in Spanish texts",
      authors: "Martinez, E., Cuadrado, J., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 3756",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2024,
      title: "Feature selection for forecasting of energy spot price in the Colombian market",
      authors: "Gonzalez-Sierra, M. A., Arnedo, R., and 2 more authors",
      venue: "In IEEE ANDESCON 2024. IEEE",
      badge: "IEEE",
      doi: "10.1109/ANDESCON61840.2024.10755699",
    },
    {
      year: 2024,
      title: "Enhancing vocational guidance with machine learning: Predicting STEM career viability for high school students",
      authors: "Moreno-Novoa, M., Puertas, E., and 1 more author",
      venue: "In CCIS, 2209, 150–162",
      badge: "CCIS",
      doi: "10.1007/978-3-031-75236-0_12",
      citations: 1,
    },

    // ── 2023 ────────────────────────────────────────────────────────────────
    {
      year: 2023,
      title: "UTB-NLP at SemEval-2023 Task 3: Weirdness, lexical features for detecting categorical framings, and persuasion in online news",
      authors: "Cuadrado, J., Martinez, E., and 5 more authors",
      venue: "In Proceedings of SemEval-2023 (pp. 1551–1557). ACL",
      badge: "SemEval",
      doi: "10.18653/v1/2023.semeval-1.214",
      citations: 5,
    },
    {
      year: 2023,
      title: "Detection of online sexism using lexical features and transformer",
      authors: "Martinez, E., Cuadrado, J., and 2 more authors",
      venue: "In C3 2023 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C358072.2023.10436298",
      citations: 2,
      award: "Best Paper Award",
    },
    {
      year: 2023,
      title: "Automated depression detection in text data: Leveraging lexical features, phonesthemes embedding, and RoBERTa transformer model",
      authors: "Martinez, E., Cuadrado, J., and 3 more authors",
      venue: "In CEUR Workshop Proceedings, 3496",
      badge: "CLEF",
      citations: 3,
    },
    {
      year: 2023,
      title: "Natural language content evaluation system for multiclass detection of hate speech in tweets using transformers",
      authors: "Marrugo-Tobón, D. A., Martinez-Santos, J. C., and 1 more author",
      venue: "In CEUR Workshop Proceedings, 3496",
      badge: "CLEF",
    },
    {
      year: 2023,
      title: "Natural language contents evaluation system for multi-class news categorization using machine learning and transformers",
      authors: "Marrugo, D. A., Martinez-Santos, J. C., and 1 more author",
      venue: "In CCIS, 1928, 115–126",
      badge: "CCIS",
      doi: "10.1007/978-3-031-46739-4_11",
      citations: 1,
    },
    {
      year: 2023,
      title: "RealCheck: A web application for fake news detection using natural language processing",
      authors: "Puertas, E., Vasquez, J., and 1 more author",
      venue: "In C3 2023 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C358072.2023.10436244",
      citations: 1,
    },
    {
      year: 2023,
      title: "Team UTB-NLP at FinancES 2023: Financial targeted sentiment analysis using a phonestheme semantic approach",
      authors: "Cuadrado, J., Martinez, E., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 3496",
      badge: "CLEF",
      citations: 1,
    },
    {
      year: 2023,
      title: "Quantum n-gram language models for tweet classification",
      authors: "Payares, E., Puertas, E., and 1 more author",
      venue: "In IEEE CogMI 2023 (pp. 69–74). IEEE",
      badge: "IEEE",
      doi: "10.1109/CogMI58952.2023.00019",
      citations: 1,
    },
    {
      year: 2023,
      title: "Long-term effects of degradation on photovoltaic system return on investment",
      authors: "Cuadrado, J., Martinez, E., and 2 more authors",
      venue: "IEEE Latin America Transactions, 21(12), 1282–1290",
      badge: "IEEE",
      doi: "10.1109/TLA.2023.10305232",
      citations: 2,
    },
    {
      year: 2023,
      title: "Intelligent system to detect violations in pedestrian areas committed by vehicles in the city of Cartagena de Indias",
      authors: "Hernández-Díaz, N., Pañaloza, Y. C., and 3 more authors",
      venue: "In Proceedings of LACCEI 2023",
      badge: "LACCEI",
      citations: 2,
    },
    {
      year: 2023,
      title: "Dataset for detecting motorcyclists in pedestrian areas",
      authors: "Díaz, N. H., Peñaloza, Y. C., and 3 more authors",
      venue: "Data in Brief, 50",
      badge: "Journal",
      doi: "10.1016/j.dib.2023.109610",
      citations: 3,
    },
    {
      year: 2023,
      title: "Researcher profile: An automated solution for searching and gathering people's profiles",
      authors: "Martinez-Santos, J. C., Vasquez, J., and 1 more author",
      venue: "In C3 2023 – IEEE Colombian Caribbean Conference",
      badge: "IEEE",
      doi: "10.1109/C358072.2023.10436220",
    },
    {
      year: 2023,
      title: "Component analysis to design an integral sustainability model for micro, small, and medium-sized enterprises",
      authors: "Vásquez, J., and Puertas, E.",
      venue: "In Proceedings of LACCEI 2023",
      badge: "LACCEI",
    },

    // ── 2022 ────────────────────────────────────────────────────────────────
    {
      year: 2022,
      title: "Presidential preferences in Colombia through sentiment analysis",
      authors: "Puertas, E., Martinez-Santos, J. C., and 1 more author",
      venue: "In IEEE ANDESCON 2022. IEEE",
      badge: "IEEE",
      doi: "10.1109/ANDESCON56260.2022.9989700",
      citations: 3,
    },
    {
      year: 2022,
      title: "Cost-effectiveness analysis of strategies of COVID-19 vaccination in Colombia",
      authors: "Morales-Zamora, G., Espinosa, O., and 8 more authors",
      venue: "Value in Health Regional Issues, 31, 101–110",
      badge: "Journal",
      doi: "10.1016/j.vhri.2022.04.004",
      citations: 19,
    },
    {
      year: 2022,
      title: "Detection of broken bars in three-phase motors by using curve fits and classification algorithms",
      authors: "Hoyos, G., Puertas, E., and 2 more authors",
      venue: "In IEEE ANDESCON 2022. IEEE",
      badge: "IEEE",
      doi: "10.1109/ANDESCON56260.2022.9989583",
      citations: 1,
    },

    // ── 2021 ────────────────────────────────────────────────────────────────
    {
      year: 2021,
      title: "Detection of sociolinguistic features in digital social networks for the detection of communities",
      authors: "Puertas, E., Moreno-Sandoval, L. G., and 3 more authors",
      venue: "Cognitive Computation, 13(2), 518–537",
      badge: "Journal",
      doi: "10.1007/s12559-021-09818-9",
      citations: 19,
    },
    {
      year: 2021,
      title: "A sustainability maturity model for micro, small and medium-sized enterprises (MSMEs) based on a data analytics evaluation approach",
      authors: "Vásquez, J., Aguirre, S., and 4 more authors",
      venue: "Journal of Cleaner Production, 311",
      badge: "Journal",
      doi: "10.1016/j.jclepro.2021.127692",
      citations: 75,
    },
    {
      year: 2021,
      title: "Phonetic detection for hate speech spreaders on Twitter",
      authors: "Puertas, E., and Martinez-Santos, J. C.",
      venue: "In CEUR Workshop Proceedings, 2936, 2118–2125",
      badge: "CLEF",
      citations: 1,
    },

    // ── 2020 ────────────────────────────────────────────────────────────────
    {
      year: 2020,
      title: "Assembly of polarity, emotion and user statistics for detection of fake profiles — PAN at CLEF 2020",
      authors: "Moreno-Sandoval, L. G., Puertas, E., and 2 more authors",
      venue: "In CEUR Workshop Proceedings, 2696",
      badge: "CLEF",
      citations: 1,
    },

    // ── 2019 ────────────────────────────────────────────────────────────────
    {
      year: 2019,
      title: "Celebrity profiling on Twitter using sociolinguistic features — PAN at CLEF 2019",
      authors: "Moreno-Sandoval, L. G., Puertas, E., and 4 more authors",
      venue: "In CEUR Workshop Proceedings, 2380",
      badge: "CLEF",
      citations: 2,
    },
    {
      year: 2019,
      title: "Bots and gender profiling on Twitter using sociolinguistic features — PAN at CLEF 2019",
      authors: "Puertas, E., Moreno-Sandoval, L. G., and 4 more authors",
      venue: "In CEUR Workshop Proceedings, 2380",
      badge: "CLEF",
      citations: 4,
    },

    // ── 2018 ────────────────────────────────────────────────────────────────
    {
      year: 2018,
      title: "Age classification from Spanish tweets: The variable age analyzed by using linear classifiers",
      authors: "Moreno-Sandoval, L. G., Mendoza-Molina, J. F., and 4 more authors",
      venue: "In Proceedings of ICEIS 2018, Vol. 1 (pp. 275–281). SciTePress",
      badge: "Conf",
      doi: "10.5220/0006811102750281",
      citations: 3,
    },
    {
      year: 2018,
      title: "An automatic approach to generate corpus in Spanish",
      authors: "Puertas, E., Alvarado-Valencia, J. A., and 2 more authors",
      venue: "In CCIS, 885, 150–161",
      badge: "CCIS",
      doi: "10.1007/978-3-319-98998-3_12",
    },

    // ── 2017 ────────────────────────────────────────────────────────────────
    {
      year: 2017,
      title: "Constructor automático de modelos dominios sin corpus preexistente",
      authors: "Puertas Del Castillo, E. A., Alvarado Valencia, J. A., and 1 more author",
      venue: "Procesamiento del Lenguaje Natural, 59, 129–132",
      badge: "Journal",
      citations: 1,
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, publications };
