import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import styles from "./work.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: work.path,
  });
}

const nlpProjects = [
  {
    slug: "trueshield",
    title: "TrueShield",
    badge: "NLP Platform",
    badgeClass: "badgeNlp",
    description:
      "A platform to combat fake news by analyzing and verifying the reliability of user-submitted information using NLP and transformer models.",
  },
  {
    slug: "framelens",
    title: "FrameLens",
    badge: "Media Analysis",
    badgeClass: "badgeNlp",
    description:
      "NLP methodology to analyze how news is framed in Spanish media, identifying ideological and narrative patterns across outlets.",
  },
  {
    slug: "mentalguard",
    title: "MentalGuard",
    badge: "Multimodal AI",
    badgeClass: "badgeNlp",
    description:
      "Multimodal AI system for the early detection of mental health risks in university students using text, audio, and behavioral signals.",
  },
];

const visionProjects = [
  {
    slug: "traffic-monitoring",
    title: "Automated Traffic Monitoring",
    badge: "Computer Vision",
    badgeClass: "badgeVision",
    description:
      "Computer vision system to detect unauthorized vehicle entries in pedestrian zones in Cartagena de Indias using YOLO-based deep learning.",
  },
  {
    slug: "mapping-motion",
    title: "Mapping Motion",
    badge: "Cognitive AI",
    badgeClass: "badgeVision",
    description:
      "Cognitive approach to dyspraxia movement analysis combining computer vision and multimodal signals to support motor disorder assessment.",
  },
];

const appliedProjects = [
  {
    slug: "apollo",
    title: "Apollo",
    badge: "Python Package",
    badgeClass: "badgeTool",
    description:
      "Python package with three channels — Audio (Lyre), Text (Pythia), Vision (Argus) — to accelerate development of complex multimodal AI applications.",
  },
  {
    slug: "pv-roi",
    title: "PV ROI Prediction",
    badge: "Applied Research",
    badgeClass: "badgeApplied",
    description:
      "Innovative ROI calculation method for photovoltaic systems incorporating degradation curves and maintenance factors for realistic long-term estimates.",
  },
];

function ProjectCard({
  slug,
  title,
  badge,
  badgeClass,
  description,
}: {
  slug: string;
  title: string;
  badge: string;
  badgeClass: keyof typeof styles;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <span className={`${styles.badge} ${styles[badgeClass]}`}>{badge}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={`/work/${slug}`} className={styles.cardLink}>
        View Project →
      </a>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionLine} />
    </div>
  );
}

export default function Work() {
  return (
    <div className={styles.container}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{work.title}</h1>
        <p className={styles.pageDescription}>{work.description}</p>
      </div>

      <SectionHeader title="NLP & Language Intelligence" />
      <div className={styles.grid}>
        {nlpProjects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>

      <SectionHeader title="Computer Vision & Multimodal" />
      <div className={styles.grid}>
        {visionProjects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>

      <SectionHeader title="Software & Applied Research" />
      <div className={styles.grid}>
        {appliedProjects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
