"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/types";
import styles from "./publications.module.css";

interface Props {
  items: Publication[];
}

const BADGE_ORDER = ["CLEF", "SemEval", "IberLEF", "IEEE", "Journal", "CCIS", "LACCEI", "ACL", "LNCS", "Conf"];

export default function PublicationsClient({ items }: Props) {
  const [query, setQuery] = useState("");
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [activeBadge, setActiveBadge] = useState<string | "all">("all");

  const years = useMemo(
    () =>
      Array.from(new Set(items.map((p) => p.year))).sort((a, b) => b - a),
    [items]
  );

  const badges = useMemo(() => {
    const set = new Set(items.map((p) => p.badge));
    return BADGE_ORDER.filter((b) => set.has(b));
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return items.filter((p) => {
      if (activeYear !== "all" && p.year !== activeYear) return false;
      if (activeBadge !== "all" && p.badge !== activeBadge) return false;
      if (q) {
        return (
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [items, query, activeYear, activeBadge]);

  const byYear = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const pub of filtered) {
      const arr = map.get(pub.year) ?? [];
      arr.push(pub);
      map.set(pub.year, arr);
    }
    return map;
  }, [filtered]);

  const visibleYears = useMemo(
    () =>
      Array.from(byYear.keys()).sort((a, b) => b - a),
    [byYear]
  );

  return (
    <>
      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search title, author, venue…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Year</span>
          <button
            className={`${styles.filterBtn} ${activeYear === "all" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveYear("all")}
          >
            All
          </button>
          {years.map((y) => (
            <button
              key={y}
              className={`${styles.filterBtn} ${activeYear === y ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Type</span>
          <button
            className={`${styles.filterBtn} ${activeBadge === "all" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveBadge("all")}
          >
            All
          </button>
          {badges.map((b) => (
            <button
              key={b}
              className={`${styles.filterBtn} ${activeBadge === b ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveBadge(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {visibleYears.length === 0 ? (
        <p className={styles.empty}>No publications match your search.</p>
      ) : (
        visibleYears.map((year) => (
          <section key={year} className={styles.yearSection}>
            <div className={styles.yearHeader}>
              <span className={styles.yearBadge}>{year}</span>
              <div className={styles.yearLine} />
            </div>

            {byYear.get(year)!.map((pub, i) => {
              const cardContent = (
                <>
                  <div className={styles.cardBadgeRow}>
                    <span className={styles.badge}>{pub.badge}</span>
                    {pub.award && (
                      <span className={styles.awardBadge}>★ {pub.award}</span>
                    )}
                    {pub.citations && pub.citations > 0 ? (
                      <span className={styles.citationBadge}>
                        {pub.citations} citation{pub.citations > 1 ? "s" : ""}
                      </span>
                    ) : null}
                  </div>
                  <h3 className={styles.cardTitle}>{pub.title}</h3>
                  <p className={styles.cardAuthors}>{pub.authors}</p>
                  <p className={styles.cardVenue}>{pub.venue}</p>
                </>
              );

              return pub.doi ? (
                <a
                  key={i}
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={i} className={styles.card}>
                  {cardContent}
                </div>
              );
            })}
          </section>
        ))
      )}
    </>
  );
}
