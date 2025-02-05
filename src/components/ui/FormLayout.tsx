import React from "react";

interface FormLayoutProps {
  children: React.ReactNode;
  handleNext?: () => void;
  handleBack?: () => void;
  nextText?: string;
  title: string;
}

export default function FormLayout({
  children,
  handleNext,
  handleBack,
  title,
  nextText = "Вперед",
}: FormLayoutProps): JSX.Element {
  return (
    <div className="mt-6 p-6 border rounded-xl shadow-lg bg-white w-full">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
      <div className="flex items-center justify-end gap-4 mt-5">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={handleBack}>
            Назад
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleNext}>{nextText}</button>
      </div>
    </div>
  );
}
