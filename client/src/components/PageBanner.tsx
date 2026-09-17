import type { ReactNode } from "react";
import { withBase } from "@/lib/url";

interface PageBannerProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  children?: ReactNode;
}

export default function PageBanner({ eyebrow, title, description, image, children }: PageBannerProps) {
  return (
    <section className="page-banner">
      <img src={withBase(image)} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
      <div className="page-banner-copy reveal">
        <p className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
