import Circle from "../atoms/Circle";

export default function HeroOverlay() {
  return (
    <>
      <svg width="95vw" height="95vh" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50)">
          <Circle text="PDF • AD BLOCKER • VPN •" />
        </g>
      </svg>
    </>
  );
}
