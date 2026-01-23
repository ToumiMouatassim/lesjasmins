"use client";

import { FC, useState } from "react";
import SpecialitesCard from "./SpecialitesCard";
import { specialitesList } from "@/data/data";

const ITEMS_PER_PAGE = 3;

const SpecialitesSection: FC = () => {
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = specialitesList.slice(startIndex, endIndex);

  const hasPrev = page > 0;
  const hasNext = endIndex < specialitesList.length;

  return (
    <section className="container my-5">
      <div className="row">
        {currentItems.map((item) => (
          <SpecialitesCard
            key={item.id}
            title={item.title}
            src={item.src}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => setPage(page - 1)}
          disabled={!hasPrev}
        >
          ← Prev
        </button>

        <button
          className="btn btn-primary"
          onClick={() => alert("Redirect to appointment page")}
        >
          Prendre rendez-vous
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => setPage(page + 1)}
          disabled={!hasNext}
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default SpecialitesSection;
