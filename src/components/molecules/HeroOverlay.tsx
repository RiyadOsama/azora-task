import Circle from "../atoms/Circle";
import Hexagonal from "../atoms/Haxagonal";
import Square from "../atoms/Square";
import Rectangle from "../atoms/Rectangle";
import Wavy from "../atoms/Wavy";

export default function HeroOverlay() {
  return (
    <div className="h-screen w-full overflow-hidden absolute top-0 right-0 bottom-0 left-0 z-[-1]">
      <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <g>
          <g transform="translate(40, 80) rotate(-10 100 100)">
            <Square text="WORK WITH PICS" />
          </g>
          <g transform="translate(80, 220)">
            <Circle text="PDF • AD BLOCKER • VPN •" />
          </g>
          <g transform="translate(20, 400)">
            <Hexagonal text="BOOST TEAMWORK" />
          </g>
          <g transform="translate(60, 520)">
            <Wavy text="HEIC TO JPG • CONVERT •" />
          </g>
        </g>

        <g>
          <g transform="translate(1350, 80) rotate(15 100 100)">
            <Rectangle text="FIX WIFI" />
          </g>
          <g transform="translate(1300, 220) rotate(-5 100 100)">
            <Square text="PLAN YOUR DAY" />
          </g>
          <g transform="translate(1400, 400)">
            <Wavy text="HEIC TO JPG • CONVERT •" />
          </g>
          <g transform="translate(1320, 540) rotate(10 100 100)">
            <Rectangle text="MANAGE YOUR MAC" />
          </g>
        </g>
      </svg>
    </div>
  );
}
