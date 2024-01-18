export type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="flex items-center rounded-lg border border-gray-700 px-4 py-[6px]">
      <span className="text-sm text-white">{children}</span>
    </div>
  );
};

export default Tag;
