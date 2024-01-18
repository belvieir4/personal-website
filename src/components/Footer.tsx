function Footer() {
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-between border-t border-t-gray-700 bg-gray-950 px-6 py-5">
      <p className="text-xs text-white">
        Designed and developed by{' '}
        <a
          href="https://www.linkedin.com/in/isabelcvieira/"
          target="_blank"
          className="hover:un text-teal-400 hover:underline hover:underline-offset-4"
        >
          Isabel Vieira
        </a>{' '}
        in 2024
      </p>
    </div>
  );
}

export default Footer;
