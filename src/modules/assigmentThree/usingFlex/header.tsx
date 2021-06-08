import styled from "styled-components";

// ******************************** icons and images ********************************
import LocalsImage from "../../../utils/images";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightDiv = styled.div`
  flex-basis: 50%;
`;

const LeftDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Hello = styled.h4`
  font: normal normal 18px CircularStd, sans-serif;
  color: var(--dark-blue-color);
  opacity: 0.4;
  line-height: 2;
`;

const Support = styled.h1`
  font: normal bold 30px CircularStd, sans-serif;
  color: var(--black);
  line-height: 1.2;
`;

const BackToButton = styled.button`
  padding: 10px 20px;
  background-color: var(--dark-lime-color);
  box-shadow: 0 2px 4px 0 rgba(134, 195, 6, 0.3);
  border-radius: 7px;
  outline: none;
  border: 0;
  font: normal bold 14px AkkuratPro, sans-serif;
  color: var(--white);
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #9fa1a2;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputSearchBox = styled.div`
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 7px 15px 0 rgba(23, 115, 166, 0.07);
  padding: 10px 30px;
  display: flex;
  align-items: center;
  margin: 30px 0;
  @media (max-width: 900px) {
    padding: 10px 20px;
  }
`;

const Input = styled.input`
  font: normal normal 18px AkkuratPro, sans-serif;
  color: var(--dark-blue-color);
  opacity: 0.3;
  line-height: 1.78;
  outline: none;
  border: none;
  margin-left: 20px;
  width: 100%;
  @media (max-width: 900px) {
    margin-left: 10px;
  }
`;

// ******************************* mobile style ****************************
const MobileRoot = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileRightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const IconButon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const ImgDiv = styled.div`
  width: 100px;
  height: 50px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const MobileLeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const mobileNavbar = () => (
  <MobileRoot>
    <Mobile>
      <MobileRightDiv>
        <IconButon>
          <MenuOutlinedIcon />
        </IconButon>
        <ImgDiv>
          <Logo src={LocalsImage.LOGO} />
        </ImgDiv>
      </MobileRightDiv>
      <MobileLeftDiv>
        <SettingsOutlinedIcon />
        <NotificationsNoneOutlinedIcon style={{ margin: "0 10px" }} />
        <Avatar>HG</Avatar>
      </MobileLeftDiv>
    </Mobile>
  </MobileRoot>
);

function Header() {
  return (
    <>
      {mobileNavbar()}
      <Root>
        <RightDiv>
          <Hello>Hello, Anton!</Hello>
          <Support>Support</Support>
        </RightDiv>
        <LeftDiv>
          <BackToButton>BACK TO XCOINS</BackToButton>
          <SettingsOutlinedIcon fontSize="large" />
          <NotificationsNoneOutlinedIcon fontSize="large" />
          <Avatar>HG</Avatar>
        </LeftDiv>
      </Root>
      <InputSearchBox>
        <SearchOutlinedIcon />
        <Input placeholder="Search Xcoins support" />
      </InputSearchBox>
    </>
  );
}

export default Header;
