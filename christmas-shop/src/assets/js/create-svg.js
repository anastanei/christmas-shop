export default function createSvg() {
  const requireSvg = require.context("../../assets/svg", false, /\.svg$/);
  requireSvg.keys().forEach(requireSvg);
}
