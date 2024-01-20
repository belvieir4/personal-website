export type TextBlockProps = {
  title: string;
  paragraphs: string[];
};

function TextBlock({ title, paragraphs }: TextBlockProps) {
  return (
    <div className="w-full max-w-[560px]">
      <h3 className="pb-2 text-3xl font-bold text-white">{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p className="mt-6 leading-7 text-white" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default TextBlock;
