interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

export default function Arrow({ direction, onClick }: Props) {
  const arrowSymbol = direction === "left" ? "‹" : "›";

  return (
    <button
      className={`arrow ${direction}`}
      onClick={onClick}
      aria-label={`Right or Left`}
    >
      {arrowSymbol}
    </button>
  );
}
