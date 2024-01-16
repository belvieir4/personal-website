export type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="flex items-center rounded-lg border border-gray-700 px-3 py-2">
      <span className="text-sm text-white">{children}</span>
    </div>
  );
};

export default Tag;
