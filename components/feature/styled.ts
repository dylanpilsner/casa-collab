import styled from "styled-components";

type FeatureContent = {
  direction?: string;
};

export const FeatureContent = styled.div<FeatureContent>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;

export const FeatureImg = styled.img`
  max-width: 365px;
  max-height: 365px;

  @media (min-width: 660px) {
    max-width: 600px;
    max-height: 600px;
  }
`;

export const Separator = styled.hr`
  width: 50px;
  border: 1px solid var(--cooper);
  margin: 0;
`;
