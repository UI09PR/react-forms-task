import { useAppSelector } from "../../redux/hooks";

const ModalQuestion: React.FC<{ title: string; info: string; closeCallBack: () => void }> = ({
  title,
  info,
  closeCallBack,
}) => {
  const { moadlShow } = useAppSelector((state) => state.formsDataSlice);
  if (moadlShow)
    return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-[100%] p-2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold whitespace-normal break-normal">{title}</h2>
        <p>{info}</p>
        <button onClick={closeCallBack} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Закрыть
        </button>
      </div>
    </div>;
};

export default ModalQuestion;
