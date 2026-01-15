import Hexagonal from "../atoms/Haxagonal";

export default function HeroOverlay() {
  return (
    <>
      <svg width="95vw" height="95vh" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50)">
          <Hexagonal text="POST TEAMWORK" />
        </g>
      </svg>
    </>
  );
}
