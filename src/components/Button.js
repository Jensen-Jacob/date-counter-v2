export default function Button({ classname, onClick, children }) {
  return (
    <button className={`${classname}`} onClick={onClick}>
      {children}
    </button>
  );
}
