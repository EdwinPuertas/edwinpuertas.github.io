import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Publications,
  Social,
  Work,
} from "@/types";

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
    link: "mailto:epuertas@utb.edu.co",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Edwin Puertas, PhD",
  description:
    "AI Software Architect, NLP Researcher and Associate Professor at the Technological University of Bolívar. Senior IEEE Member. Cartagena, Colombia.",
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
            Participated in international NLP competitions: IberLEF, DIPROMATS
            2024, HOMO-MEX 2024, SemEval 2023–2024, PAN@CLEF 2019–2020.
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
    // 2026 (accepted)
    {
      year: 2026,
      title: "SAPSAI – System for acquisition, preprocessing, and storage of agricultural images",
      authors:
        "A. M. Tovar, C. V. Hernández, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Communications in Computer and Information Science, vol. 2702 CCIS, pp. 327–338",
    },
    {
      year: 2026,
      title: "Detection of diseases in cucumber using deep neural networks",
      authors: "A. Menco-Tovar, J. C. Martinez-Santos, E. Puertas",
      venue: "Neural Computing and Applications, vol. 38, no. 5",
    },
    // 2025
    {
      year: 2025,
      title:
        "A computer vision system for detecting motorcycle violations in pedestrian zones",
      authors:
        "N. Hernández-Díaz, Y. C. Peñaloza, Y. Y. Rios, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Multimedia Tools and Applications, vol. 84, no. 13, pp. 12659–12682",
      citations: 3,
      url: "#",
    },
    {
      year: 2025,
      title:
        "Verbanexai at CheckThat! 2025: Fine-tuning DeBERTa for multi-label scientific discourse detection in tweets",
      authors:
        "M. J. S. Borrero, J. E. S. Castañeda, J. C. M. Santos, E. A. P. Del Castillo",
      venue: "CEUR-WS, vol. 4038, pp. 1237–1245",
    },
    {
      year: 2025,
      title:
        "Next-generation smart cities: Harnessing AI for enhanced pedestrian protection",
      authors:
        "D. A. G. Amaya, J. E. Serrano, J. C. M. Santos, E. A. P. d. Castillo",
      venue: "IEEE",
    },
    {
      year: 2025,
      title: "Cednav–UTB: Efficient image retrieval for arguments with CLIP",
      authors:
        "D. A. G. Amaya, J. E. S. Castañeda, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 4601–4609",
      citations: 1,
    },
    {
      year: 2025,
      title:
        "Implementation of a DDS-based publishing interface for real-time inertial sensor data in navigation systems",
      authors:
        "M. Sosa, J. Serrano, J. C. M. Santos, E. Puertas",
      venue: "IEEE",
      citations: 1,
    },
    {
      year: 2025,
      title:
        "Enhancing consistency in piping and instrumentation diagrams using DistilBERT and smart PID systems",
      authors:
        "F. Gómez-Vega, O. Acuña, A. C. Camargo, J. D. Jimenez, S. M. Galeano, I. E. Franco, L. L. Lozano, J. Vásquez, E. Puertas",
      venue: "Systems and Soft Computing, vol. 7",
      citations: 1,
    },
    {
      year: 2025,
      title:
        "Mapping Motion: A cognitive approach to dyspraxia multimodal analysis",
      authors:
        "D. Muvdi, M. R. Hernández, E. J. Cifuentes, A. Di Somma, F. Chiappone, V. Di Maro, J. C. Martínez-Santos, E. Puertas",
      venue: "Lecture Notes in Computer Science, vol. 15277 LNCS, pp. 14–25",
    },
    {
      year: 2025,
      title:
        "Cotecmar-UTB at eRisk 2025: Semantic-centroid symptom ranking and early depression detection using adaptive decision rule",
      authors:
        "L. Mendoza, J. Suarez, E. Puertas, J. Martinez, J. Serrano",
      venue: "CEUR-WS, vol. 4038, pp. 1562–1582",
    },
    {
      year: 2025,
      title:
        "Verbanexai at CLEF 2025 JOKER Task 3: Multi-model LLM approach for onomastic wordplay translation",
      authors:
        "M. P. Ramirez, J. D. Jimenez, D. G. Sánchez, J. E. Serrano, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 2860–2869",
    },
    {
      year: 2025,
      title:
        "Hybrid re-ranking for biomedical entity linking using SapBERT embeddings",
      authors:
        "D. P. Gnecco, J. Serrano, E. Puertas, J. C. Martinez-Santos",
      venue: "CEUR-WS, vol. 4038, pp. 497–508",
    },
    {
      year: 2025,
      title:
        "Prediction of human preferences and explanation generation with LLM: An approach based on RAG, few-shot learning, and Auto-CoT",
      authors:
        "D. Almanza-Gonzalez, J. E. Serrano, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 1360–1369",
      citations: 1,
    },
    {
      year: 2025,
      title:
        "Cotecmar–UTB at TalentCLEF 2025: Linking job titles and ESCO skills with sentence transformer embeddings",
      authors:
        "J. Llamas, E. Puertas, J. Serrano, J. Martinez",
      venue: "CEUR-WS, vol. 4038, pp. 4438–4447",
    },
    {
      year: 2025,
      title:
        "Verbanex at TalentCLEF 2025: Semantic matching of multilingual job titles through a framework integrating ESCO taxonomy",
      authors:
        "M. M. Novoa, J. C. Martinez-Santos, J. Serrano, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 4448–4458",
    },
    {
      year: 2025,
      title:
        "Earlystem: Machine learning platform for early identification of dropout risk in STEM programs",
      authors:
        "M. M. Novoa, I. S. Arrieta-Guardo, J. F. González-Ortiz, E. A. Negrin-Perez, J. C. Martinez-Santos, E. Puertas, J. E. Serrano",
      venue: "IEEE",
    },
    {
      year: 2025,
      title:
        "Development of a biomedical question answering system based on transformer models",
      authors: "L. López, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 452–459",
    },
    {
      year: 2025,
      title:
        "UTBnlp at CLEF JOKER 2025 Task 2: mBART-50 fine-tuning with dictionary-guided forced decoding for English-French pun translation",
      authors:
        "D. A. Marrugo-Tobon, J. D. Jimenez, J. E. Serrano, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 2838–2848",
    },
    {
      year: 2025,
      title:
        "Driving operational efficiency in SMEs through structured digital transformation strategies",
      authors:
        "J. Vásquez, E. Puertas, A. M. Diaz, F. A. G. Arrieta, H. Ospina-Mateus",
      venue: "IEEE",
    },
    {
      year: 2025,
      title:
        "Economic optimization of local energy markets: Strategies for prosumers with IoT and blockchain integration",
      authors:
        "M. F. Medina-Reyes, E. Puertas, J. C. Martinez-Santos",
      venue: "IEEE, pp. 40–43",
    },
    {
      year: 2025,
      title:
        "Segmentation of tourists in the department of Sucre, Colombia: An approach based on digital footprints",
      authors:
        "D. Almanza-González, L. D. A. Marrugo, M. S. Fernández, E. Puertas, J. C. Martinez-Santos",
      venue: "IEEE",
    },
    {
      year: 2025,
      title:
        "Tiles-wise inference with vision transformers for multispecies identification in vegetation images",
      authors:
        "A. Menco-Tovar, J. E. Serrano, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 3102–3110",
    },
    {
      year: 2025,
      title:
        "PubMed API and LLM-driven hybrid retrieval system for biomedical question answering",
      authors:
        "A. Morillo, C. Agamez, E. Puertas, J. C. Martinez-Santos, J. Serrano",
      venue: "IEEE",
    },
    {
      year: 2025,
      title:
        "Portable molecular detection system using LAMP isothermal amplification with precise PID thermal regulation",
      authors:
        "A. M. Tovar, M. A. S. Casseres, E. Puertas, J. C. Martinez-Santos",
      venue: "IEEE",
    },
    {
      year: 2025,
      title: "Robertia: Human-AI collaborative text classification",
      authors:
        "D. G. Sánchez, J. D. Jimenez, M. P. Ramírez, J. E. Serrano, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 4038, pp. 3672–3680",
    },
    // 2024
    {
      year: 2024,
      title:
        "Verbanexai lab at SemEval-2024 Task 1: A multilayer artificial intelligence model for semantic relationship detection",
      authors:
        "A. Morillo, D. Peña, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Association for Computational Linguistics (ACL), pp. 1344–1350",
      citations: 2,
    },
    {
      year: 2024,
      title:
        "Verbanexai lab at SemEval-2024 Task 10: Emotion recognition and reasoning in mixed-coded conversations based on an NRC VAD approach",
      authors:
        "S. Garcia, E. Martinez, J. Cuadrado, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Association for Computational Linguistics (ACL), pp. 1332–1338",
      citations: 2,
    },
    {
      year: 2024,
      title:
        "Verbanexai lab at SemEval-2024 Task 3: Deciphering emotional causality in conversations using multimodal analysis approach",
      authors:
        "V. Pacheco, J. Cuadrado, E. Martinez, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Association for Computational Linguistics (ACL), pp. 1339–1343",
    },
    {
      year: 2024,
      title:
        "Verbanexai at MediaQA-Corr 2024: Efficacy of GRU with BioWordVec and ClinicalBERT in error correction in clinical notes",
      authors:
        "D. Villate, L. Tinjaca, L. Estrada, E. Puertas, J. Pajaro",
      venue:
        "Association for Computational Linguistics (ACL), pp. 461–469",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Verbanex AI at DIPROMATS 2024: Enhancing propaganda detection in diplomatic tweets with fine-tuned BERT and integrated NLP techniques",
      authors:
        "J. Cuadrado, E. Martinez, J. Cuadrado, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3756",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Verbanexai lab at HOMO-MEX 2024: Multiclass and multilabel detection of LGBTQ+ phobic content using transformers",
      authors:
        "R. D. Gonzalez-Henao, D. A. Marrugo-Tobon, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3756",
    },
    {
      year: 2024,
      title:
        "Verbanex AI at CLEF EXIST 2024: Detection of online sexism using transformer models and profiling techniques",
      authors:
        "E. Martinez, J. Cuadrado, J. C. M. Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3740, pp. 1107–1113",
    },
    {
      year: 2024,
      title:
        "Team QTB on feature selection via quantum annealing and hybrid models",
      authors:
        "E. Payares, E. Puertas, J. C. Martínez-Santos",
      venue: "CEUR-WS, vol. 3740, pp. 3105–3114",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Automated detection of depression and anxiety using lexical and phonestheme features in Spanish texts",
      authors:
        "E. Martinez, J. Cuadrado, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3756",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Feature selection for forecasting of energy spot price in the Colombian market",
      authors:
        "M. A. Gonzalez-Sierra, R. Arnedo, E. Puertas, J. C. Martinez-Santos",
      venue: "IEEE",
    },
    {
      year: 2024,
      title:
        "The media framing dataset: Analyzing news narratives in Mexico and Colombia",
      authors:
        "J. Cuadrado, E. Martinez, J. C. Martinez-Santos, E. Puertas",
      venue: "Data in Brief, vol. 58",
    },
    {
      year: 2024,
      title:
        "Assessment of the level of digital maturity through a process analysis",
      authors:
        "J. Vásquez, D. Castillo, C. Rodriguez-Jaraba, M. Soto, E. Puertas",
      venue: "LACCEI",
      citations: 2,
    },
    {
      year: 2024,
      title:
        "Implementation of convolutional neural networks for automated disease detection in cucumber crops",
      authors:
        "A. M. Tovar, E. Puertas, J. C. Martinez-Santos",
      venue:
        "Communications in Computer and Information Science, vol. 2208 CCIS, pp. 156–167",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Unveiling tourist profiles in the department of Sucre: A text analysis approach",
      authors:
        "D. Almanza-Gonzalez, E. Puertas, J. C. Martinez-Santos",
      venue:
        "Communications in Computer and Information Science, vol. 2208 CCIS, pp. 27–40",
      citations: 2,
    },
    {
      year: 2024,
      title:
        "Enhancing vocational guidance with machine learning: Predicting STEM career viability for high school students",
      authors:
        "M. Moreno-Novoa, E. Puertas, J. C. Martinez-Santos",
      venue:
        "Communications in Computer and Information Science, vol. 2209 CCIS, pp. 150–162",
      citations: 1,
    },
    {
      year: 2024,
      title:
        "Trip a-bike: An interactive educational system for learning English as a second language",
      authors:
        "S. Ciccarelli, D. Peña, F. V. Ferraro, J. Carlos Martinez-Santos, E. Puertas",
      venue: "LACCEI",
    },
    // 2023
    {
      year: 2023,
      title:
        "UTB-NLP at SemEval-2023 Task 3: Weirdness, lexical features for detecting categorical framings, and persuasion in online news",
      authors:
        "J. Cuadrado, E. Martinez, A. Morillo, D. Peña, K. Sossa, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Association for Computational Linguistics, pp. 1551–1557",
      citations: 5,
    },
    {
      year: 2023,
      title:
        "Detection of online sexism using lexical features and transformer",
      authors:
        "E. Martinez, J. Cuadrado, J. C. Martinez-Santos, E. Puertas",
      venue: "IEEE (1st IEEE Colombian Caribbean Conference — C3)",
      citations: 2,
      award: "Best Paper Award",
    },
    {
      year: 2023,
      title:
        "Natural language content evaluation system for multiclass detection of hate speech in tweets using transformers",
      authors:
        "D. A. Marrugo-Tobón, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3496",
    },
    {
      year: 2023,
      title:
        "Natural language contents evaluation system for multi-class news categorization using machine learning and transformers",
      authors:
        "D. A. Marrugo, J. C. Martinez-Santos, E. Puertas",
      venue:
        "Communications in Computer and Information Science, vol. 1928 CCIS, pp. 115–126",
      citations: 1,
    },
    {
      year: 2023,
      title:
        "RealCheck: A web application for fake news detection using natural language processing",
      authors: "E. Puertas, J. Vasquez, J. C. Martinez-Santos",
      venue: "IEEE",
      citations: 1,
    },
    {
      year: 2023,
      title:
        "Long-term effects of degradation on photovoltaic system return on investment",
      authors:
        "J. Cuadrado, E. Martinez, E. Puertas, J. C. Martinez-Santos",
      venue:
        "IEEE Latin America Transactions, vol. 21, no. 12, pp. 1282–1290",
      citations: 2,
    },
    {
      year: 2023,
      title:
        "Intelligent system to detect violations in pedestrian areas committed by vehicles in the city of Cartagena de Indias",
      authors:
        "N. Hernández-Díaz, Y. C. Pañaloza, Y. Y. Rios, J. C. Martinez-Santos, E. Puertas",
      venue: "LACCEI",
      citations: 2,
    },
    {
      year: 2023,
      title: "Dataset for detecting motorcyclists in pedestrian areas",
      authors:
        "N. H. Díaz, Y. C. Peñaloza, Y. Y. Rios, J. C. Martinez-Santos, E. Puertas",
      venue: "Data in Brief, vol. 50",
      citations: 3,
    },
    {
      year: 2023,
      title: "Quantum n-gram language models for tweet classification",
      authors: "E. Payares, E. Puertas, J. C. Martinez-Santos",
      venue: "IEEE, pp. 69–74",
      citations: 1,
    },
    {
      year: 2023,
      title:
        "Team UTB-NLP at FinANcES 2023: Financial targeted sentiment analysis using a phonestheme semantic approach",
      authors:
        "J. Cuadrado, E. Martinez, J. C. Martinez-Santos, E. Puertas",
      venue: "CEUR-WS, vol. 3496",
      citations: 1,
    },
    {
      year: 2023,
      title:
        "Researcher profile: An automated solution for searching and gathering people's profiles",
      authors: "J. C. Martinez-Santos, J. Vasquez, E. Puertas",
      venue: "IEEE",
    },
    {
      year: 2023,
      title:
        "Component analysis to design an integral sustainability model for micro, small, and medium-sized enterprises",
      authors: "J. Vásquez, E. Puertas",
      venue: "LACCEI",
    },
    // 2022
    {
      year: 2022,
      title:
        "Presidential preferences in Colombia through sentiment analysis",
      authors:
        "E. Puertas, J. C. Martinez-Santos, P. Andres Pertuz-Duran",
      venue: "IEEE",
      citations: 3,
    },
    {
      year: 2022,
      title:
        "Cost-effectiveness analysis of strategies of COVID-19 vaccination in Colombia",
      authors:
        "G. Morales-Zamora, O. Espinosa, E. Puertas, J. C. Fernández, J. Hernández, V. Zakzuk, M. Cepeda, N. Alvis-Gúzman, C. Castañeda-Orjuela, A. Paternina-Caicedo",
      venue:
        "Value in Health Regional Issues, vol. 31, pp. 101–110",
      citations: 19,
    },
    {
      year: 2022,
      title:
        "Detection of broken bars in three-phase motors by using curve fits and classification algorithms",
      authors:
        "G. Hoyos, E. Puertas, J. L. Villa, J. C. Martinez-Santos",
      venue: "IEEE",
      citations: 1,
    },
    // 2021
    {
      year: 2021,
      title:
        "A sustainability maturity model for micro, small and medium-sized enterprises (MSMEs) based on a data analytics evaluation approach",
      authors:
        "J. Vásquez, S. Aguirre, E. Puertas, G. Bruno, P. C. Priarone, L. Settineri",
      venue: "Journal of Cleaner Production, vol. 311",
      citations: 75,
    },
    {
      year: 2021,
      title:
        "Detection of sociolinguistic features in digital social networks for the detection of communities",
      authors:
        "E. Puertas, L. G. Moreno-Sandoval, J. Redondo, J. A. Alvarado-Valencia, A. Pomares-Quimbaya",
      venue:
        "Cognitive Computation, vol. 13, no. 2, pp. 518–537",
      citations: 19,
    },
    {
      year: 2021,
      title: "Phonetic detection for hate speech spreaders on Twitter",
      authors: "E. Puertas, J. C. Martinez-Santos",
      venue: "CEUR-WS, vol. 2936, pp. 2118–2125",
      citations: 1,
    },
    // 2020
    {
      year: 2020,
      title:
        "Assembly of polarity, emotion and user statistics for detection of fake profiles — PAN at CLEF 2020",
      authors:
        "L. G. Moreno-Sandoval, E. Puertas, A. Pomares-Quimbaya, J. A. Alvarado-Valencia",
      venue: "CEUR-WS, vol. 2696",
      citations: 1,
    },
    // 2019
    {
      year: 2019,
      title:
        "Bots and gender profiling on Twitter using sociolinguistic features — PAN at CLEF 2019",
      authors:
        "E. Puertas, L. G. Moreno-Sandoval, F. M. Plaza-Del-Arco, J. A. Alvarado-Valencia, A. Pomares-Quimbaya, L. Alfonso Ureña-López",
      venue: "CEUR-WS, vol. 2380",
      citations: 4,
    },
    {
      year: 2019,
      title:
        "Celebrity profiling on Twitter using sociolinguistic features — PAN at CLEF 2019",
      authors:
        "L. G. Moreno-Sandoval, E. Puertas, F. M. Plaza-Del-Arco, A. Pomares-Quimbaya, J. A. Alvarado-Valencia, L. Alfonso Ureña-López",
      venue: "CEUR-WS, vol. 2380",
      citations: 2,
    },
    // 2018
    {
      year: 2018,
      title:
        "Age classification from Spanish tweets — the variable age analyzed by using linear classifiers",
      authors:
        "L. G. Moreno-Sandoval, J. F. Mendoza-Molina, E. A. Puertas, A. Duque-Marín, A. Pomares-Quimbaya, J. A. Alvarado-Valencia",
      venue: "SciTePress, vol. 1, pp. 275–281",
      citations: 3,
    },
    {
      year: 2018,
      title: "An automatic approach to generate corpus in Spanish",
      authors:
        "E. Puertas, J. A. Alvarado-Valencia, L. G. Moreno-Sandoval, A. Pomares-Quimbaya",
      venue:
        "Communications in Computer and Information Science, vol. 885, pp. 150–161",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, publications };
