export default function Rectangle({ text }: { text: string }) {
  return (
    <>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="20s"
          repeatCount="indefinite"
        />

        <rect width="230" height="128" rx="16" ry="16" fill="#DF96AE" />

        <foreignObject width="230" height="128">
          <div className="flex items-center justify-center h-full w-full p-4">
            <div className="text-[#844461] text-center text-3xl font-bold leading-tight">{text}</div>
          </div>
        </foreignObject>
      </g>
    </>
  );
}
