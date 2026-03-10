import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { PAGES, getPagePath } from "../data/pages";
import { CATEGORIES } from "../data/categories";
import { FAQ_ITEMS } from "../data/faq";
import { PageLayout } from "../components/PageLayout";
import type { FaqItem as FaqItemType } from "../data/types";

const FaqItem = ({ item, index, isOpen, onToggle }: { item: FaqItemType; index: number; isOpen: boolean; onToggle: () => void }) => {
  const cat = item.mecanismeColor;

  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${isOpen ? cat + "30" : COLORS.border}`,
        borderRadius: "12px",
        marginBottom: "12px",
        overflow: "hidden",
        transition: "all 0.3s",
        boxShadow: isOpen ? `0 4px 16px ${COLORS.shadow}` : "none",
      }}
    >
      <div
        onClick={onToggle}
        style={{
          padding: "22px 28px",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: cat + "15",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 800,
            color: cat,
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          {index + 1}
        </span>
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: COLORS.text,
              fontSize: "16px",
              fontWeight: 600,
              margin: "0 0 6px",
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            « {item.phrase} »
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: "6px",
              background: cat + "12",
              color: cat,
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {item.mecanisme}
          </span>
        </div>
        <span
          style={{
            color: COLORS.textMuted,
            fontSize: "20px",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(45deg)" : "none",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>

      {isOpen && (
        <div
          style={{
            padding: "0 28px 24px",
            marginLeft: "44px",
          }}
        >
          {item.reponse.map((para, i) => (
            <p
              key={i}
              style={{
                color: COLORS.textSecondary,
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "12px",
              }}
            >
              {para}
            </p>
          ))}
          {item.liens.length > 0 && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px 16px",
                background: COLORS.bgAlt,
                borderRadius: "8px",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: COLORS.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Approfondir :
              </span>
              {item.liens.map((lien) => {
                const page = PAGES[lien];
                if (!page) return null;
                const linkColor = page.category ? CATEGORIES[page.category]?.color : COLORS.accent;
                return (
                  <Link
                    key={lien}
                    to={getPagePath(lien)}
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: linkColor,
                      textDecoration: "none",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: (linkColor || COLORS.accent) + "10",
                    }}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const FaqPage = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const allOpen = openItems.size === FAQ_ITEMS.length;

  return (
    <PageLayout
      title="« Je ne suis pas antisémite, mais… »"
      subtitle="12 phrases courantes déconstruites une par une"
      pageKey="faq"
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        <button
          onClick={() => {
            if (allOpen) {
              setOpenItems(new Set());
            } else {
              setOpenItems(new Set(FAQ_ITEMS.map((_, i) => i)));
            }
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface,
            color: COLORS.textSecondary,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {allOpen ? "Tout fermer" : "Tout ouvrir"}
        </button>
      </div>

      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={index}
          item={item}
          index={index}
          isOpen={openItems.has(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </PageLayout>
  );
};
