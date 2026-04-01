export default function Preloader() {
  return (
    <div className="preloader-container">

      {/* Outer Glow Hex */}
      <div className="hex hex-outer"></div>

      {/* Middle Glow Hex */}
      <div className="hex hex-middle"></div>

      {/* Inner Solid Hex */}
      <div className="hex hex-inner">
        <span className="logo">M</span>
      </div>

    </div>
  );
}