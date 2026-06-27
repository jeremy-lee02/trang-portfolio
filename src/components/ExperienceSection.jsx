import { SectionHeading } from './SectionHeading';
import { TimelineRow } from './TimelineRow';

export function ExperienceSection({ t, openLightbox }) {
  const e = t.experience;
  return (
    <section
      id="experience"
      style={{ borderTop: '0.943px solid var(--border-default)', padding: 'var(--v-pad) var(--page-gutter)' }}
    >
      <div className="pin-grid">
        <div className="pin-left">
          <SectionHeading number={e.number} title={e.title} />
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)',
            maxWidth: 260, lineHeight: 1.6,
          }}>{e.sub}</p>
        </div>
        <div>
          {e.items.map((item, i) => (
            <TimelineRow
              key={item.id || i}
              {...item}
              isAlt={false}
              defaultOpen={i === 0}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
