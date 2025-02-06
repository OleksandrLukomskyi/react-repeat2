export default function Controls({ onPrev, onNext, isFirst, isLast }) {
  return (
    <div>
      <button disabled={isFirst} onClick={onPrev}>
        Prev
      </button>
      <button disabled={isLast} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
