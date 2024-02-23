export default function Navbar() {
  return (
    <header className="bg-slate-500">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 font-semibold text-xl leading-6 text-indigo-900"
          >
            Appointy
          </a>
        </div>
        <div className="flex gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
