import styled from "styled-components";

//  ******************************* images ********
import LocalsImage from "../../../utils/images";

const Root = styled.div`
  background-color: var(--ice-blue-color);
`;

const ImgDiv = styled.div`
  width: 100px;
  height: 50px;
  margin: 30px 0 30px 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavBar = styled.div``;

const Topics = styled.h2`
  color: var(--dark-blue-color);
  font: normal bold 10px AkkuratPro, sans-serif;
  opacity: 0.4;
  letter-spacing: 1px;
  margin-bottom: 15px;
  padding-left: 20px;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
`;

const List = styled.li`
  font: normal bold 14px AkkuratPro, sans-serif;
  color: var(--dark-blue-color);
  line-height: 1.57;
  padding: 10px 0 10px 20px;
  margin-right: 20px;
  transition: all 0.2s;
  border-top-right-radius: 23px;
  border-bottom-right-radius: 23px;
  &:hover {
    background-color: var(--light-cerule-color);
    color: var(--cerule-color);
    opacity: 0.5;
  }
`;

function Slidebar() {
  return (
    <Root>
      <ImgDiv>
        <Logo src={LocalsImage.LOGO} />
      </ImgDiv>
      <NavBar>
        <Topics>TOPICS</Topics>
        <UnorderedList>
          {[
            "Buy Currency",
            "Verification",
            "Orders",
            "Wallet",
            "Payment methods",
            "Other",
            "Security",
            "Referral programme",
          ].map((item: any, index: number) => (
            <List key={index}>{item}</List>
          ))}
        </UnorderedList>
      </NavBar>
    </Root>
  );
}

export default Slidebar;
