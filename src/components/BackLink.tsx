import Link from './Link';

function BackLink() {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <hr className="mb-20 w-40 rounded-sm border-2 border-teal-400" />
      <div className="mb-20 mt-8 flex max-w-[560px] flex-col items-center">
        <h4 className="text-2xl font-bold text-white">Other projects</h4>
        <p className="mb-8 mt-2 text-center leading-7 text-white">
          If you want to see other projects, click in the link bellow.
        </p>
        <Link to="/">Go to project list</Link>
      </div>
    </div>
  );
}

export default BackLink;
