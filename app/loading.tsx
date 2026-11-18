/* eslint-disable @next/next/no-img-element */
// Shown by Next.js while a page is loading.
export default function Loading() {
  return (
    <div className="splash" role="status" aria-live="polite">
      <div className="splash-card">
        <img src="/assets/school-logo.png" alt="Doon Imperial Residential School crest" width={84} height={84} />
        <div className="splash-name">Doon Imperial Residential School</div>
        <div className="splash-bar"><span /></div>
        <div className="splash-msg">Loading…</div>
      </div>
    </div>
  );
}
