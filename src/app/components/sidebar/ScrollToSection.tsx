interface Props {
  link: string;
  title: string;
}

export const ScrollToSection = ({ link, title }: Props) => {
  const scroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={() => scroll(link)}
      className="inline-block px-2 py-4 gap-2 w-full h-full text-center font-semibold"
    >
      {title}
    </button>
  );
};
