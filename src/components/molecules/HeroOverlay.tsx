import Wavy from "../atoms/Wavy";

export default function HeroOverlay() {
  return (
    <>
      <svg width="95vw" height="95vh" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50)">
          <Wavy text="CONVERT HEIC TO JPG •" />
        </g>
      </svg>
    </>
  );
}
