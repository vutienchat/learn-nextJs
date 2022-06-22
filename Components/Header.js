import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  const MenuMain = styled.ul`
    display: flex;
  `;
  const MenuItem = styled.a`
    cursor: pointer;
    display: block;
    line-height: 50px;
    padding: 0 10px;
    &:hover {
      background-color: #f2f3f5;
      border-radius: 5px;
    }
  `;
  const Logo = styled.img.attrs({
    src: "https://profile.canva.com/users/UAEh74zTSs4/avatars/1/50.png",
  })`
    width: 50px;
    height: 50px;
  `;
  const DFlex = styled.div`
    display: flex;
    box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
    padding: 8px 32px;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
  `;
  return (
    <DFlex justify="space-between" align="center">
      <Logo />
      <nav>
        <MenuMain>
          <li>
            <Link href="/">
              <MenuItem>Home</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <MenuItem>Blogs</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <MenuItem>About</MenuItem>
            </Link>
          </li>
        </MenuMain>
      </nav>
    </DFlex>
  );
};

export default Header;
