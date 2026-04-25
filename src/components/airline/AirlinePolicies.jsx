export default function AirlinePolicies({ data }) {
  if (!data?.sections) return null;

  return (
    <div>
      {data.sections.map((sec, i) => (
        <div key={i}>
          <h3>{sec.title}</h3>
          <p>{sec.text}</p>
        </div>
      ))}

      <ul>
        {data.tips?.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}