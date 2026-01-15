export default function Circle({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="20s"
          repeatCount="indefinite"
        />

        <circle cx="100" cy="100" r="85" fill="#DBEAE5" />

        <path id="circlePath" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />

        <text fill="#304361" className="text-xl font-bold" fontFamily="Arial Black, sans-serif">
          <textPath href="#circlePath" letterSpacing="3">
            {text}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
