import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MyDocument from "../../components/MyDocument";

interface IMyForm {
  picture: FileList;
  name: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const StyledDownloadLink = styled(PDFDownloadLink)`
  display: inline-block;
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #4caf50;
    color: #fff;
  }
`;

const Anna = () => {
  const [task, setTasks] = useState<IMyForm | null>(null);

  const { register, handleSubmit } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const MyForm = (data: IMyForm) => {
    setTasks(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(MyForm)}>
        <StyledInput
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
          placeholder="Enter name"
        />
        <StyledInput
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Изображение",
          })}
        />
        <StyledButton type="submit">Сохранить</StyledButton>
      </StyledForm>
      {task?.name && task?.picture && (
        <StyledDownloadLink document={<MyDocument name={task.name} picture={task.picture} />} fileName="lab_pdf.pdf">
          {({ loading, error }) => {
            try {
              if (loading) return "Loading document...";
              if (error) throw new Error("Error generating document");
              return "Download now!";
            } catch (error) {
              console.error("PDF generation error:", error);
              return "Error generating PDF";
            }
          }}
        </StyledDownloadLink>
      )}
    </>
  );
};

export default Anna;
