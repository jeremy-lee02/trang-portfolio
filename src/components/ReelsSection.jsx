import { FilmCard } from './FilmCard';

export function ReelsSection({ t }) {
  const r = t.reels;
  return (
    <div className="stack-reel">
      <div className="reel-label">{r.sectionLabel}</div>
      <div className="filmstrip-row">
        {r.items.map((item, i) => <FilmCard key={i} {...item} />)}
      </div>
    </div>
  );
}
