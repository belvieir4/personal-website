export type CalloutListProps = {
  title: string;
  content: string[];
};

function CalloutList({ title, content }: CalloutListProps) {
  return (
    <div className="max-w-[560px] rounded-lg border border-gray-700 p-4">
      <h5 className="pb-4 text-xl font-bold text-teal-400">{title}</h5>
      <ul className="list-disc pl-4">
        {content.map((item, index) => (
          <li className="text-white" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalloutList;
