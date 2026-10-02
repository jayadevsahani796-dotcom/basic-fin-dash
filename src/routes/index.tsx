import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinanceView – Billing & RTGS Dashboard" },
      {
        name: "description",
        content:
          "A beginner-friendly finance dashboard: search and filter demo billing and RTGS transactions, with summary cards for row count, billing total and RTGS magnitude.",
      },
      { property: "og:title", content: "FinanceView – Billing & RTGS Dashboard" },
      {
        property: "og:description",
        content:
          "Search and filter demo billing and RTGS transactions with summary cards. Local currency.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
