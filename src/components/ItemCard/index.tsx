import { FC } from "react";
import { IUniversity } from "../DinamicPagination/university.interface";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  height: 200px;
  padding: 20px;
  margin: 20px;
  border: none;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  gap: 20px;
  @media screen and (max-width: 768px) {
    height: 500px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 130px;
    height: 200px;
    border-radius: 8px;
    padding: 0px 30px 0px 30px;
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
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <img src={data.poster.url} alt={data.name} />
    <Block>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Block>
  </CardStyled>
);

export default CardUniversity;
