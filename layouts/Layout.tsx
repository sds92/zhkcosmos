import React from 'react';
import { Header, PageContent, Footer, Navigation } from 'components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [hoverNav, setHoverNav] = React.useState<boolean>(false);

  return (
    <>
      <Header
        isHover={hoverNav}
        navHover={setHoverNav}
        isNav={showNav}
        navClick={() => setShowNav(!showNav)}
      />
      <Navigation navClick={() => setShowNav(!showNav)} show={showNav} hover={hoverNav}/>
      <main hidden={showNav} className={`overflow-hidden`}>
        <PageContent>{children}</PageContent>
      </main>
      <Footer hidden={showNav} />
    </>
  );
};

export default Layout;
