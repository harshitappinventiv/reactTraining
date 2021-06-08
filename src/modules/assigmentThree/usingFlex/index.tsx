import styled from "styled-components";

// ******************************* components********
import Slidebar from "./slidebar";
import Header from "./header";
import Cards from "./cards";

const Root = styled.div`
  background-color: var(--ice-blue-color);
`;

const Container = styled.div`
  max-width: 1256px;
  margin: 0 auto;
`;

const MainPage = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex-basis: 20%;
  @media (max-width: 900px) {
  flex-basis: 0%;
  display: none;
  }
`;

const ContentSection = styled.div`
  flex-basis: 80%;
  position: relative;
  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

// const BackgroundStyle = styled.div`
//   position: relative;
//   &::before {
//     content: "";
//     top: 0;
//     position: absolute;
//     width: 100%;
//     height: 411px;
//     background-image: linear-gradient(var(--light-cerule-color), #fff);
//     border-bottom-left-radius: 150px;
//     opacity: 0.5;
//   }
// `;

const Section = styled.div`
  padding: 30px 50px;
  @media (max-width: 900px) {
  padding: 30px 20px;
  }
`;

const data = [
  "Buy currency",
  "Verification",
  "Orders",
  "Wallet",
  "Payment methods",
  "Other",
  "Security",
  "Referral programme",
];

function UsingFlex() {
  return (
    <Root>
      <Container>
        <MainPage>
          <Sidebar>
            <Slidebar />
          </Sidebar>
          <ContentSection>
            {/* <BackgroundStyle></BackgroundStyle> */}
            <Section>
              <Header />
              <Cards data={data} />
            </Section>
          </ContentSection>
        </MainPage>
      </Container>
    </Root>
  );
}

export default UsingFlex;
