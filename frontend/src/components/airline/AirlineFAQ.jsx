import { useState } from "react";

export default function AirlineFaq({ data }) {
  const [activeSection, setActiveSection] = useState(1);

  if (!data) return null;

  const dataList =
    activeSection === 1 ? data.part1 || [] : data.part2 || [];

  return (
    <div>
      <button onClick={() => setActiveSection(1)}>FAQ 1</button>
      <button onClick={() => setActiveSection(2)}>FAQ 2</button>

      {dataList.map((faq, i) => (
        <div key={i}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}