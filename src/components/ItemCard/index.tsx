import { FC } from "react";
import { IUniversity } from "../DinamicPagination/university.interface";
import styled from "styled-components";

const CardStyled = styled.div`
  height: 150px;
  padding: 20px;
  margin: 20px;
  border: none;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <h3>{data.name}</h3>
    <p>{data.country}</p>
  </CardStyled>
);

export default CardUniversity;
