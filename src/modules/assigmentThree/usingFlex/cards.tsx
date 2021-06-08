import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ItemCard = styled.div`
  background-color: var(--white);
  border-radius: 40px;
  box-shadow: 0 7px 15px 0 rgba(23, 115, 166, 0.07);
  padding: 30px 30px;
  flex-basis: 29%;
  min-width: 280px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Heading = styled.h1`
  font: normal bold 18px CircularStd, sans-serif;
  color: var(--black);
`;

const ParaGraphDiv = styled.div`
  margin: 20px 0;
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
