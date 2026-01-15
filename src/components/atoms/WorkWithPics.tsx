export default function WorkWithPics() {
  return (
    <>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 86.5 86.5"
          to="360 86.5 86.5"
          dur="10s"
          repeatCount="indefinite"
        />

        <rect width="173" height="173" rx="16" ry="16" fill="#F0AD84" />

        <foreignObject width="173" height="173">
          <div className="flex items-center justify-center h-full w-full p-4">
            <div className="text-[#A54E34] text-center text-3xl font-bold leading-tight">WORK WITH PICS</div>
          </div>
        </foreignObject>
      </g>
    </>
  );
}
