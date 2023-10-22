interface props {
  href: string;
  textContent: string;
}

const Link: React.FC<props> = ({ href, textContent }) => {
  const activeLink = window.location.href.substring(21);

  return (
    <a
      className={`rounded-md p-1 ${
        activeLink !== href ? "hover:" : ""
      }bg-slate-200 ${activeLink !== href ? "hover:" : ""}text-slate-900 ${
        activeLink === href ? "hover:bg-opacity-80" : ""
      }`}
      href={href}
    >
      {textContent}
    </a>
  );
};

export default Link;
