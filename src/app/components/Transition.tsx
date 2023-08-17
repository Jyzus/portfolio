interface Props {
  changePage: boolean;
}
export const Transition = ({ changePage }: Props) => {
  return (
    <>
      <div
        className={`${
          changePage
            ? "translate-x-0 translate-y-0"
            : "-translate-x-full -translate-y-full"
        } absolute w-full h-screen bg-black duration-200 transition-all ease-in bg-logo bg-center bg-no-repeat`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      ></div>
      <div
        className={`${
          changePage
            ? "translate-x-0 translate-y-0"
            : "translate-x-full translate-y-full"
        } absolute w-full h-screen bg-black duration-200 transition-all ease-in bg-logo bg-center bg-no-repeat`}
        style={{
          clipPath: "polygon(0 100%, 100% 0%, 100% 100%)",
        }}
      ></div>
    </>
  );
};
