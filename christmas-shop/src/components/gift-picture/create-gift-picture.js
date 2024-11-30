import createElement from "../../assets/js/create-element";

export default function createGiftPicture({ type, alt, src, className }) {
  const imgName = type;
  const imgAlt = alt;
  const imgPath = `${src}images/${imgName}`;
  const picture = createElement("picture", className);
  const sourceAVIF = createElement("source", "", "", {
    srcSet: `${imgPath}.avif`,
    type: "image/avif",
  });
  const sourceWEBP = createElement("source", "", "", {
    srcSet: `${imgPath}.webp`,
    type: "image/webp",
  });
  const img = createElement("img", "img-in-picture", "", {
    src: `${imgPath}.png`,
    alt: imgAlt,
    width: 310,
    height: 230,
  });
  picture.append(sourceAVIF, sourceWEBP, img);
  return picture;
}
