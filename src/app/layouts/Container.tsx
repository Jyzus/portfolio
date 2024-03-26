interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  classNameContainer?: string;
  id?: string;
}

const Container = ({ className, children, id, classNameContainer }: Props) => {
  return (
    <div
      className={`${className} w-full min-h-[calc(100vh-64px)] md:min-h-screen `}
      id={id}
    >
      <div
        className={`${classNameContainer} container mx-auto w-full min-h-[calc(100vh-64px)] md:min-h-screen px-4 pb-4 pt-20 md:pt-4 `}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
