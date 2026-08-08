import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="testi-grid reveal">
      {items.map((t, i) => (
        <div className="testi-card" key={i}>
          <video className="testi-video" autoPlay muted loop playsInline>
            <source src="/video/testimonial-placeholder.mp4" type="video/mp4" />
          </video>
          <span className="testi-tag">EM BREVE</span>
          <div className="testi-overlay">
            <div className="testi-name">{t.name}</div>
            <div className="testi-role">{t.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
