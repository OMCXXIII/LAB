---
export interface Props {
  title?: string;
  topologyData: string[];
}

const { title = "SYSTEM TOPOLOGY", topologyData } = Astro.props;
---

<section class="topology-map">
  
  <div class="map-title">
    {title}
  </div>

  <div class="ascii-container">
    {topologyData.map((line) => (
      <div class="ascii-line">{line}</div>
    ))}
  </div>

</section>

<style>
.topology-map {
  margin-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 2rem;
}

.map-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-family: monospace;
}

.ascii-container {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 1.5rem;
  border-radius: 4px;
}

.ascii-line {
  color: var(--accent-blue);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
  white-space: pre;
}
</style>
