import Eyebrow from "./Eyebrow";
import { FISIO_PACKAGES } from "@/lib/data/fisio";

export default function Packages() {
  return (
    <section className="packages" id="pacotes">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Eyebrow>Atendimento</Eyebrow>
            <h2>Pacotes de acompanhamento</h2>
          </div>
        </div>
        <div className="pkg-grid">
          {FISIO_PACKAGES.map((pkg) => (
            <div className={`pkg ${pkg.featured ? "featured" : ""}`} key={pkg.name}>
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contato" className={pkg.featured ? "btn btn-primary" : "btn btn-ghost"}>
                Tenho interesse
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
