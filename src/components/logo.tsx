// Rounded triangle mark with an accent dot, drawn in currentColor.
export function Logo() {
  return (
    <span className="inline-flex items-end gap-2" aria-hidden="true">
      <svg width="38" height="32" viewBox="0 0 40 34" fill="none">
        <path
          d="M16.33 9.96 Q20 4 23.67 9.96 L32.33 24.04 Q36 30 29 30 L11 30 Q4 30 7.67 24.04 Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="mb-[3px] size-[7px] rounded-full bg-accent" />
    </span>
  );
}
