import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AddCountryForm.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Назва має містити щонайменше 3 символи")
    .required("Назва обов'язкова"),
  flag: yup
    .mixed()
    .required("Прапор обов'язковий")
    .test("fileType", "Тільки зображення (jpg, png)", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value[0]?.type);
    }),
  description: yup.string().max(300, "Опис має бути до 300 символів"),
  population: yup
    .number()
    .typeError("Населення має бути числом")
    .positive("Населення має бути більше 0")
    .required("Населення обов'язкове"),
  languages: yup
    .array()
    .of(yup.string().required("Мова обов'язкова"))
    .min(1, "Необхідно вказати хоча б одну мову"),
  currency: yup.string().required("Валюта обов'язкова"),
  area: yup
    .number()
    .typeError("Площа має бути числом")
    .positive("Площа має бути більше 0"),
  traditions: yup.array().of(yup.string().required("Традиція обов'язкова")),
});

const AddCountryForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "traditions",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-country-form">
      <div>
        <label>Назва країни</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Прапор</label>
        <input type="file" {...register("flag")} />
        <p>{errors.flag?.message}</p>
      </div>

      <div>
        <label>Опис</label>
        <textarea {...register("description")} />
        <p>{errors.description?.message}</p>
      </div>

      <div>
        <label>Населення</label>
        <input type="number" {...register("population")} />
        <p>{errors.population?.message}</p>
      </div>

      {/* <div>
        <label>Мова(и)</label>
        <input {...register("languages")} placeholder="Вкажіть через кому" />
        <p>{errors.languages?.message}</p>
      </div> */}

      <div>
        <label>Валюта</label>
        <input {...register("currency")} />
        <p>{errors.currency?.message}</p>
      </div>

      <div>
        <label>Площа</label>
        <input type="number" {...register("area")} />
        <p>{errors.area?.message}</p>
      </div>

      <div>
        <label>Традиції</label>
        {fields.map((field, index) => (
          <div key={field.id} className="tradition-field">
            <input
              {...register(`traditions.${index}`)}
              placeholder={`Традиція ${index + 1}`}
            />
            <button type="button" onClick={() => remove(index)}>
              Видалити
            </button>
            <p>{errors.traditions?.[index]?.message}</p>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append("")}
          className="add-tradition-btn"
        >
          Додати традицію
        </button>
      </div>

      <button type="submit">Додати країну</button>
    </form>
  );
};

export default AddCountryForm;
