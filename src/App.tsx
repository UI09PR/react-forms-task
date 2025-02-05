import RouterLayout from "./HOC/AppRouter";
import Loader from "./HOC/Loader";
import { useAppSelector } from "./redux/hooks";

/*
Использую tailwind -
Вместо длиных css стилизаций можно маскимально емко
описать что бы хочешь

Куча встроеных утилит и для работы с шириной экрана

Простор для кстомизации

Большой опыт работы с ним

Удобная обработка псевдоклассов
*/

function App(): JSX.Element {
  const loading  = useAppSelector((s) => s.formsDataSlice.loading);
return (
    <div className="absolute top-0 left-0 flex-start-center w-full min-h-screen bg-[#72a39e]">
      <RouterLayout />
      {loading && <Loader type="global" />}
    </div>
  );
}

export default App;
