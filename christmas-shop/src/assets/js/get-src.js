export default function getSrc() {
  const isGiftPage = window.location.pathname.includes("/gifts");
  const src = isGiftPage ? "../" : "./";
  return src;
}
