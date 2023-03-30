import "./hostBox.css";

export default function HostBox({ name, picture }) {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  return (
    <div className="host-box">
      <div className="host-name">
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
      <img src={picture} alt={name} />
    </div>
  );
}
