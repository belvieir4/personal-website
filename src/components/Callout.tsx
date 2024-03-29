import classNames from 'classnames';
import { HTMLProps } from 'react';

export type CalloutProps = HTMLProps<HTMLDivElement> & {
  title: string;
  text: string;
};

function Callout({ title, text, className }: CalloutProps) {
  return (
    <div
      className={classNames(
        'max-w-[560px] rounded-lg border border-gray-700 p-4',
        className,
      )}
    >
      <h5 className="pb-4 text-xl font-bold text-teal-400">{title}</h5>
      <p className="text-white">{text}</p>
    </div>
  );
}

export default Callout;
