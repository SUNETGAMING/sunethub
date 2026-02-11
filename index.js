export default function Home() {
  return (
    <div style={{ background: "#0f0f0f", color: "#ffffff", minHeight: "100vh", padding: "40px", fontFamily: "Arial" }}>
      <h1>SunetHub</h1>
      <p>Odborný přehled světa streamování.</p>

      <div style={{ marginTop: "40px" }}>
        <h2>🎥 Sledujte SUNET živě</h2>
        <ul>
          <li><a href="https://kick.com/" target="_blank">Kick</a></li>
          <li><a href="https://twitch.tv/" target="_blank">Twitch</a></li>
          <li><a href="https://youtube.com/" target="_blank">YouTube</a></li>
        </ul>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Nejnovější články</h2>
        <p>Články se zde budou zobrazovat automaticky.</p>
      </div>

      <footer style={{ marginTop: "60px", fontSize: "14px", opacity: "0.6" }}>
        <p>Názvy produktů a služeb jsou majetkem jejich příslušných vlastníků.</p>
      </footer>
    </div>
  )
}
