import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-full h-full flex flex-col  justify-center bg-red-100">
      <div className="w-[60%] m-auto">
      <p className="text-[54px] w-fit font-serif text-center">
        An Error occurred
        <span className="text-red-400">{error.message}</span>
      </p>
      <p className="text-[54px] w-fit font-serif text-red-500 m-auto">
        {error.status} - {error.statusText || "Bad request"}
      </p>
      </div>
      
    </div>
  );
};
