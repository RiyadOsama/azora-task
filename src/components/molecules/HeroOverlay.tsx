import Circle from "../atoms/Circle";
import Hexagonal from "../atoms/Haxagonal";
import Square from "../atoms/Square";
import Rectangle from "../atoms/Rectangle";
import Wavy from "../atoms/Wavy";

export default function HeroOverlay() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid" className="h-full w-full">
        <g>
          <g transform="translate(50, 50) rotate(-10 100 100)">
            <Square text="WORK WITH PICS" />
          </g>

          <g transform="translate(100, 180)">
            <Circle text="PDF • AD BLOCKER • VPN •" />
          </g>

          <g transform="translate(0, 350)">
            <Hexagonal text="BOOST TEAMWORK" />
          </g>

          <g transform="translate(50, 500)">
            <Wavy text="HEIC TO JPG • CONVERT •" />
          </g>
        </g>

        <g>
          <g transform="translate(950, 50) rotate(15 100 100)">
            <Rectangle text="FIX WIFI" />
          </g>

          <g transform="translate(850, 200) rotate(-5 100 100)">
            <Square text="PLAN YOUR DAY" />
          </g>

          <g transform="translate(1000, 300)">
            <Wavy text="HEIC TO JPG • CONVERT •" />
          </g>

          <g transform="translate(900, 450) rotate(10 100 100)">
            <Rectangle text="MANAGE YOUR MAC" />
          </g>
        </g>
      </svg>
    </div>
  );
}
