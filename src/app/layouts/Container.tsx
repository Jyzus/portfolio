interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
}

const Container = ({ className, children, id }: Props) => {
  return (
    <div
      className={`${className} container mx-auto px-4 w-full min-h-[calc(100vh-64px)] md:min-h-screen py-4`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Container;
