import Link from "next/link";
import React from "react";
import styled from "styled-components";
type Props = {};
const Posts = (props: Props) => {
  const StyleLink = styled.a`
    color: red;
    cursor: pointer;
  `;
  return (
    <div>
      <Link href="/posts/create">
        <StyleLink>create post Link</StyleLink>
      </Link>
    </div>
  );
};

export default Posts;
