import SvgFacebook from "../../svg_components/Facebook";
import {
  ContactFieldName,
  ContactFieldWrapper,
  ContactValue,
  FooterBar,
  Logo,
  SiteMapList,
  SubItem,
  SubList,
  TitleItem,
  Line,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  Circle,
  SocialMediaIcons,
  SquareWrapper,
  VeryBottomContainer,
} from "./Footer.style";

const siteItems = [
  ["Products", "Men", "Women", "Kids", "Sale", "Collections"],
  ["Order status", "Shipping and delivery", "Returns", "Payment options"],
  ["Legals", "Terms of services", "Privacy policy"],
];
const contact = {
  Email: "ecommerce@gmail.com",
  Phone: "972 756 555-0123",
  Address: "2464 Royal Ln. Mesa, New Jersey 45463",
};
const contactArr = Object.entries(contact);
const Footer = () => {
  return (
    <FooterBar>
      <SiteMapList>
        <Logo>LOGO</Logo>
        {siteItems.map((arrItem, index) => (
          <SubList key={index}>
            {arrItem.map((item, index) => {
              return index === 0 ? (
                <TitleItem key={index}>{item}</TitleItem>
              ) : (
                <SubItem key={index}>{item}</SubItem>
              );
            })}
          </SubList>
        ))}
        <SubList>
          <TitleItem>Contact</TitleItem>
          {contactArr.map(([key, value], index) => (
            <ContactFieldWrapper key={index}>
              <ContactFieldName>{key}</ContactFieldName>
              <ContactValue isHighlighted={key === "Phone"}>
                {value}
              </ContactValue>
            </ContactFieldWrapper>
          ))}
        </SubList>
      </SiteMapList>
      <Line />
      <VeryBottomContainer>
        <div style={{ color: "white" }}>Tel Ran &copy; 2023</div>
        <SocialMediaIcons>
          <SquareWrapper>
            <Circle>
              <InstagramIcon />
            </Circle>
          </SquareWrapper>
          <SquareWrapper>
            <Circle>
              <FacebookIcon />
            </Circle>
          </SquareWrapper>
          <SquareWrapper>
            <Circle>
              <TwitterIcon />
            </Circle>
          </SquareWrapper>
        </SocialMediaIcons>
      </VeryBottomContainer>
    </FooterBar>
  );
};

export default Footer;
