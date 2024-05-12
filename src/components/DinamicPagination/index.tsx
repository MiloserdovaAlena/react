import { FC, useEffect, useState } from "react";
import { IUniversity } from "./university.interface";
import CardUniversity from "../ItemCard";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const LIMIT_UNIVERSITIES = 15;

const BlockObserver = styled.div`
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #555;
  border-radius: 8px;
  margin-top: 20px;
`;

const DynamicPaginationContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
  color: #777;
`;

const DynamicPagination: FC = () => {
  const [universities, setUniversities] = useState<IUniversity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES;
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`,
      );
      setUniversities((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log("Error fetching universities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading) {
      setCurrentPage((prev: number) => prev + 1);
    }
  }, [inView, loading]);

  return (
    <DynamicPaginationContainer>
      <Title>List Universities</Title>
      {universities.map((university) => (
        <CardUniversity data={university} key={university.name}></CardUniversity>
      ))}
      {loading && <LoadingText>Loading...</LoadingText>}
      <BlockObserver ref={ref}>Loading more...</BlockObserver>
    </DynamicPaginationContainer>
  );
};

export default DynamicPagination;
