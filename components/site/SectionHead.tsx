import type { ReactNode } from "react";

export default function SectionHead({ title, description }: { title: ReactNode; description: string }) {
  return (
    <div className="sec-head reveal">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
