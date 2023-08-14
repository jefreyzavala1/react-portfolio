export default function Social({ social }) {
  return (
    <div>
      <ul className="">
        {social.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`}>{val.social}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
