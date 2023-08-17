type Props = {
  id: string;
  className: string;
};

export const HomeContainers = ({ id, className }: Props) => {
  return (
    <div id={id} className={`${className}`}>
      HomeContainers
    </div>
  );
};
