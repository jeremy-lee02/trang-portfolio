import { SectionHeading } from './SectionHeading';
import { TimelineRow } from './TimelineRow';

export function ProjectSection({ t, openLightbox }) {
  const p = t.project;
  return (
    <section
      id="project"
      style={{ borderTop: '0.943px solid var(--border-default)', padding: 'var(--v-pad) var(--page-gutter)' }}
    >
      <div className="pin-grid">
        <div className="pin-left">
          <SectionHeading number={p.number} title={p.title} accent="alt" />
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)',
            maxWidth: 260, lineHeight: 1.6,
          }}>{p.sub}</p>
        </div>
        <div>
          {p.items.map((item, i) => (
            <TimelineRow
              key={item.id || i}
              {...item}
              isAlt={true}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
