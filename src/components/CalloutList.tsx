import classNames from 'classnames';
import { HTMLProps } from 'react';

export type CalloutListProps = Omit<HTMLProps<HTMLDivElement>, 'content'> & {
  title: string;
  content: string[];
};

function CalloutList({ title, content, className }: CalloutListProps) {
  return (
    <div
      className={classNames(
        'max-w-[560px] rounded-lg border border-gray-700 px-4 pt-4',
        className,
      )}
    >
      <h5 className="pb-4 text-xl font-bold text-teal-400">{title}</h5>
      <ul className="list-disc pl-4">
        {content.map((item, index) => (
          <li className="mb-4 text-white" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalloutList;
