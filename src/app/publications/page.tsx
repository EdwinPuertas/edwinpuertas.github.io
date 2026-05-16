import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, publications } from "@/resources";
import PublicationsClient from "./PublicationsClient";
import styles from "./publications.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: publications.title,
    description: publications.description,
    baseURL: baseURL,
    path: publications.path,
    image: "/images/og/home.jpg",
  });
}

export default function PublicationsPage() {
  return (
    <div className={styles.container}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={publications.title}
        description={publications.description}
        path={publications.path}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{publications.title}</h1>
        <p className={styles.pageDescription}>{publications.description}</p>
      </div>

      <PublicationsClient items={publications.items} />
    </div>
  );
}
