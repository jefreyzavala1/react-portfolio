export default function Social({ social }) {
  return (
    <div className="ml-auto">
      <ul className="flex space-x-4">
        {social.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`}>{val.social}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
