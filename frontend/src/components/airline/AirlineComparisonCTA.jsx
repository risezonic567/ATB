export default function AirlineComparisonCTA({ data }) {
  if (!data || !Array.isArray(data.comparison)) return null;

  return (
    <div>
      <h2>{data.comparisonTitle}</h2>

      {data.comparison.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}