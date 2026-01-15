export default function Hexagonal({ text }: { text: String }) {
  const complexPath =
    "M103.604 1.11237C106.66 0.0229232 109.942 -0.272116 113.145 0.253035L215.044 16.9777C219.348 17.6842 222.628 21.2066 223.021 25.5415L226.891 68.347C227.283 72.6819 224.687 76.7332 220.58 78.1969L123.327 112.857C120.271 113.946 116.988 114.241 113.786 113.716L11.8862 96.9916C7.58219 96.2851 4.30176 92.7627 3.90977 88.4278L0.039002 45.6223C-0.352993 41.2874 2.24257 37.2361 6.35024 35.7724L103.604 1.11237Z";

  return (
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 100 100"
        to="360 100 100"
        dur="20s"
        repeatCount="indefinite"
      />

      <path d={complexPath} fill="#99D7F1" />

      <foreignObject width="230" height="100">
        <div className="flex items-center justify-center h-full w-full p-4">
          <div className="text-[#556265] text-center text-2xl font-bold leading-tight">{text}</div>
        </div>
      </foreignObject>
    </g>
  );
}
