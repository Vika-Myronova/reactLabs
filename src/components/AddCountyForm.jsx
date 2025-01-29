import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ThemeProvider } from "@/context/ThemeContext";
import styles from "./AddCountryForm.module.css";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  flag: yup.mixed().required(),
  description: yup.string().max(300),
  population: yup.number().positive().required(),
  currency: yup.string().required(),
  area: yup.number().positive(),
  traditions: yup.array().of(yup.string().required()),
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
    <>
      <ThemeProvider>
        <Link href="/">
          <button>Home</button>
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["add-country-form"]}
        >
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
              <div key={field.id} className={styles["tradition-field"]}>
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
              className={styles["add-tradition-btn"]}
            >
              Додати традицію
            </button>
          </div>

          <button type="submit">Додати країну</button>
        </form>
      </ThemeProvider>
    </>
  );
};

export default AddCountryForm;
