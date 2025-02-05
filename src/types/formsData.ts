import { z } from "zod";

export const firstFormSchema = z.object({
  phone: z
    .string()
    .min(10, "Телефон должен содержать минимум 10 символов")
    .regex(/^\d{4}\s\d{3}\s\d{3}$/, "Формат: 0XXX XXX XXX"),
  firstName: z.string().min(1, "Имя обязательно"),
  lastName: z.string().min(1, "Фамилия обязательна"),
  gender: z.enum(["male", "female"], { errorMap: () => ({ message: "Выберите пол" }) }),
});

export const secondFormSchema = z.object({
  workPlace: z.string().min(1, "Рабочее место не может быть пустым"),
  address: z.string().min(1, "Адрес обязателен для заполнения"),
});

export const thirdFormSchema = z.object({
  money: z.number().min(200, "Минимум 200$").max(1000, "Максимум 1000$"),
  dayTime: z.number().min(10, "Минимум 10 дней").max(30, "Максимум 30 дней"),
});

/*
Использую zod так как вместо десяти строк можно написать 1
Вместо кучи проверок каждого поля можно завести схему
Он довольно емкий и не затратный
Поддержка типов и обширный функционал
*/

export type FirstFormT = z.infer<typeof firstFormSchema>;
export type SecondFormT = z.infer<typeof secondFormSchema>;
export type ThirdFormT = z.infer<typeof thirdFormSchema>;

export type FormDataState = FirstFormT & SecondFormT & ThirdFormT;
