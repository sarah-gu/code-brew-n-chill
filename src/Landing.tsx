import { ComputerIcon } from "./ComputerIcon";

export const Landing = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center">
      <div className="flex flex-row ">
        <ComputerIcon />
        <div className="text-[50px]">Code Brew N Chill</div>
      </div>
      <div> Code Brew</div>
      <div className="w-128 h-72 bg-gray-300 "> group image!</div>
    </div>
  );
};
