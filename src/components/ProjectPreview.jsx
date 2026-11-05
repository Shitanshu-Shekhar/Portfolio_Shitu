function FilmArtwork({ tone, mark }) {
  return <div className={`film-artwork ${tone}`} aria-hidden="true"><span className="film-art-glow" /><span className="film-art-mark">{mark}</span><span className="film-art-lines" /></div>;
}

function CinemaPreview() {
  return (
    <div className="preview preview-cinema" aria-label="Illustration of CinemaHub's booking interface" role="img">
      <div className="preview-nav"><b>◈ cinema<span>hub</span></b><span>Movies　Theatres　My bookings</span><i>Account ↗</i></div>
      <div className="cinema-screen">
        <div className="film-row"><FilmArtwork tone="film-wine" mark="◒" /><FilmArtwork tone="film-olive" mark="◈" /><FilmArtwork tone="film-amber" mark="◍" /></div>
        <div className="seats-card"><small>SELECT YOUR SEATS</small><div className="screen-curve" /><div className="seat-map">{Array.from({ length: 20 }, (_, index) => <span className={index === 8 || index === 17 ? 'seat seat-taken' : index === 12 || index === 13 ? 'seat seat-selected' : 'seat'} key={index} />)}</div><div className="seat-legend"><i /> Available <i /> Selected</div></div>
      </div>
      <span className="preview-label">BOOK A BETTER NIGHT OUT</span>
    </div>
  );
}

function CodePreview() {
  return (
    <div className="preview preview-code" aria-label="Illustration of the Code2Hire preparation dashboard" role="img">
      <aside className="code-preview-nav"><b>c<span>2</span>h</b><span className="nav-selected">▦　Overview</span><span>⌘　DSA tracker</span><span>◷　Roadmaps</span><span>⌁　Contests</span></aside>
      <div className="code-preview-main"><header><div><small>YOUR PREPARATION, AT A GLANCE</small><b>Build your next step.</b></div><span className="avatar">SS</span></header>
        <div className="metric-row"><div><small>DSA PROGRESS</small><b>Personal</b></div><div><small>QUESTION RECORDS</small><b>Trackable</b></div><div><small>ROADMAP</small><b>Yours to shape</b></div></div>
        <div className="analytics-card"><div><b>Progress analytics</b><small>A clearer view of your practice</small></div><div className="analytics-graph"><span /><span /><span /><span /><span /><span /><span /></div><div className="graph-axis"><i>Explore</i><i>Reflect</i><i>Improve</i></div></div>
        <div className="roadmap-strip"><span>✦</span><b>Personalized roadmap</b><i>Keep moving ↗</i></div>
      </div>
    </div>
  );
}

function MeshPreview() {
  return (
    <div className="preview preview-mesh" aria-label="Illustration of MeshPay's offline-ready dashboard" role="img">
      <aside className="mesh-preview-nav"><b>⌁ mesh<span>pay</span></b><span className="mesh-selected">⌂　Dashboard</span><span>↗　Send payment</span><span>◉　Offline mode</span><span>↻　Activity</span><span>▣　Mesh devices</span></aside>
      <div className="mesh-preview-main"><header><small>YOUR WORKSPACE</small><span><i /> Internet connected</span></header><b className="mesh-greeting">Good day <span>✳</span></b><p>Wallet and offline payment activity.</p><div className="mesh-callout"><b>⌁　Offline-ready demo</b><small>Queued instructions settle after backend verification.</small></div><div className="mesh-stats"><div><small>DEMO BALANCE</small><b>₹9,000</b></div><div><small>DEVICE QUEUE</small><b>0</b></div><div><small>LEDGER</small><b>13</b></div></div><div className="mesh-recent"><b>Recent activity</b><span><i /> Demo ledger entry <small>Settled</small></span><span><i /> Demo ledger entry <small>Settled</small></span></div></div>
    </div>
  );
}

export default function ProjectPreview({ projectId }) {
  if (projectId === 'cinema') return <CinemaPreview />;
  if (projectId === 'code2hire') return <CodePreview />;
  return <MeshPreview />;
}
