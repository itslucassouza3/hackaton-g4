import { useState } from "react";
import { Row, Col, Drawer, Dropdown, Menu, Button, Space } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/User";


const menu = (
  <Menu items={[
    {
      key: '1',
      label: (
        <Link to="/profile">
          Meu Perfil
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/signup">
          Sair
        </Link>
      ),
    },
  ]} />
);


const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const { user } = useUser()

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        {user.candidate ? (
          <>
            <CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <Link to='/joblist'><Span>{t("Vagas")}</Span></Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
              <Span>{t("Empresas")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("product")}>
              <Link to='/joblist'><Span>{t("Minhas vagas")}</Span></Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")}
            >

              <Dropdown overlay={menu}>
                <img src="https://avatars.githubusercontent.com/u/61891084?v=4" alt="" />
              </Dropdown>
            </CustomNavLinkSmall>
          </>
        ) : (
          <>
            <CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <Link to='/talentbank'>Banco de talentos</Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("product")}>
              <Link to='/huntjobList'>Minhas Vagas</Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{ width: "180px", cursor: 'pointer' }}
              onClick={() => scrollTo("contact")}
            >
              <Dropdown overlay={menu} >
                <img src="https://avatars.githubusercontent.com/u/61891084?v=4" alt="" />
              </Dropdown>
            </CustomNavLinkSmall>
          </>
        )
        }
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <p>ByeByeGupy</p>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
