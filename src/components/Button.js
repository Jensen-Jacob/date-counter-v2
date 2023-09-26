export default function Button({ classname, onClick, text }) {
  return (
    <button className={`${classname}`} onClick={onClick}>
      {text}
    </button>
  );
}
