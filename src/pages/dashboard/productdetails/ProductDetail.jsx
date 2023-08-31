import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const param = useParams();
  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-[53px] text-red-400">ProductDetail {param.id}</p>
    </div>
  );
};
