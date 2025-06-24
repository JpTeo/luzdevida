import { useState } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";

interface IValues {
  nombre: string;
  email: string;
  mensaje: string;
}

const initialValues: IValues = {
  nombre: "",
  email: "",
  mensaje: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist(); // ✅ agrega esto
    const values = formState.values;

    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));
    if (Object.values(errors).every((error) => error === "")) {
      
      try {
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID!,
          process.env.REACT_APP_TEMPLATE_ID!,
          {
            name: values.nombre,
            email: values.email,
            message: values.mensaje,
          },
          process.env.REACT_APP_USER_ID!
        );

        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));

        notification["success"]({
          message: "Éxito",
          description: "Tu mensaje fue enviado correctamente.",
        });
      } catch (error) {
        notification["error"]({
          message: "Error",
          description:
            "Hubo un problema al enviar el mensaje. Por favor, intenta más tarde.",
        });
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
