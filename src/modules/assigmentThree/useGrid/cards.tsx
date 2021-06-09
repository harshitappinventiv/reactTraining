import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  place-items: center;
  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemCard = styled.div`
  background-color: var(--white);
  border-radius: 40px;
  box-shadow: 0 7px 15px 0 rgba(23, 115, 166, 0.07);
  padding: 30px 30px;
  min-width: 250px;
`;

const Heading = styled.h1`
  font: normal bold 18px CircularStd, sans-serif;
  color: var(--black);
`;

const ParaGraphDiv = styled.div`
  margin: 30px 0;
`;

const Paragraph = styled.p`
  font: normal normal 14px AkkuratPro, sans-serif;
  color: var(--cerule-color);
  line-height: 1.57;
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

const Article = styled.p`
  font: normal normal 14px AkkuratPro, sans-serif;
  color: var(--cerule-color);
  line-height: 1.57;
  color: var(--dark-lime-color);
  cursor: pointer;
`;

type AppProps = {
  data: any;
};

function Cards({ data }: AppProps) {
  return (
    <Root>
      {data.length > 0 &&
        data.map((heading: string, index: number) => (
          <ItemCard key={index}>
            <Heading>{heading}</Heading>
            <ParaGraphDiv>
              {[
                "What currencies do we accept?",
                "What is the minimum order amount?",
                "What is a Cash Advance Fee?",
                "Ethereum orders and smart contracts",
                "Ethereum orders and smart contracts",
              ].map((item, i) => (
                <Paragraph key={i}>{item}</Paragraph>
              ))}
            </ParaGraphDiv>
            <Article>See all articles</Article>
          </ItemCard>
        ))}
    </Root>
  );
}

export default Cards;
