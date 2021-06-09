import styled from "styled-components";

// ******************************* components********
import Slidebar from "./slidebar";
import Header from "./header";
import Cards from "./cards";

const Root = styled.div`
  background-color: var(--ice-blue-color);
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: 900px) {
    max-width: 1256px;
  }
`;

const MainPage = styled.div`
  @media (min-width: 900px) {
    display: flex;
  }
`;

const Sidebar = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
    flex-basis: 20%;
  }
`;

const ContentSection = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    top: 0;
    position: absolute;
    width: 100%;
    height: 411px;
    background-image: linear-gradient(var(--light-cerule-color) 100%, #fff 0%);
    border-bottom-left-radius: 150px;
    opacity: 0.5;
    z-index: -1;
  }
  @media (min-width: 900px) {
    flex-basis: 80%;
  }
  @media (max-width: 900px) {
    &::before {
      display: none;
    }
  }
`;

const Section = styled.div`
  padding: 20px 0;
  @media (min-width: 900px) {
    padding: 20px 50px;
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

function UseGrid() {
  return (
    <Root>
      <Container>
        <MainPage>
          <Sidebar>
            <Slidebar />
          </Sidebar>
          <ContentSection>
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

export default UseGrid;
