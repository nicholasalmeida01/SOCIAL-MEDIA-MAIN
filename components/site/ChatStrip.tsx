import type { ChatThread } from "@/lib/data/testimonials";
import { WhatsAppCheckIcon } from "./icons";

export default function ChatStrip({ threads }: { threads: ChatThread[] }) {
  return (
    <div className="chat-strip reveal">
      {threads.map((c, i) => (
        <div className="chat-card" key={i}>
          <div className="chat-wa-header">
            <div className="chat-wa-avatar">{c.initials}</div>
            <div>
              <div className="chat-wa-name">{c.client}</div>
              <div className="chat-wa-status">online</div>
            </div>
          </div>
          <div className="chat-wa-body">
            {c.bubbles.map((b, j) => (
              <div className={`chat-wa-bubble-row ${b.self ? "out" : ""}`} key={j}>
                <div className={`chat-wa-bubble ${b.self ? "out" : ""}`}>
                  {b.text}
                  <div className="chat-wa-meta">
                    {b.time}
                    {b.self ? <WhatsAppCheckIcon /> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
