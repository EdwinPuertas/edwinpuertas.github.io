import { Column, Heading, Text, Row, Tag, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, publications } from "@/resources";

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
  // Group by year descending
  const byYear = publications.items.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    },
    {} as Record<number, typeof publications.items>
  );

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
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

      <Column gap="m">
        <Heading variant="display-strong-xl">{publications.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {publications.description}
        </Text>
      </Column>

      {years.map((year) => (
        <Column key={year} gap="m">
          <Heading as="h2" variant="heading-strong-xl">
            {year}
          </Heading>
          <Column gap="16">
            {byYear[year].map((pub, i) => (
              <Column
                key={i}
                paddingY="16"
                gap="8"
                style={{ borderBottom: "1px solid var(--neutral-alpha-weak)" }}
              >
                <Row gap="8" wrap vertical="center">
                  {pub.award && (
                    <Tag size="s" variant="brand">
                      {pub.award}
                    </Tag>
                  )}
                  {pub.citations && pub.citations > 0 && (
                    <Tag size="s">
                      {pub.citations} citation{pub.citations > 1 ? "s" : ""}
                    </Tag>
                  )}
                </Row>
                <Text variant="heading-strong-m">{pub.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {pub.authors}
                </Text>
                <Text variant="body-default-s" onBackground="brand-weak">
                  <em>{pub.venue}</em>
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      ))}
    </Column>
  );
}
