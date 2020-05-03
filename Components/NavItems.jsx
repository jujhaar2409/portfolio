import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
// import window from "global";

const A = styled.a`
  color: #fff;
  font-size: 27px;
  font-weight: bold;
  padding: 14px 0 4px 0;
  text-align: center;
  margin: 0;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  width: 115px;

  &.selected {
    /* font-style: italic; */
    /* font-family: "Times New Roman", Times, serif; */
    /* border: black solid 1px; */
    background-color: #007deb;
  }

  &:hover:not(.selected),
  &:active {
    letter-spacing: 0.5px;
  }
`;

const LinkContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 35px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavItems = () => {
  return (
    <LinkContainer>
      <MyLink>Home</MyLink>
      <MyLink>Projects</MyLink>
      <MyLink>Skills</MyLink>
      <MyLink>Contact</MyLink>
    </LinkContainer>
  );
};

const MyLink = (props) => {
  const [classname, setClassname] = useState("");
  useEffect(() => {
    let loc = window.location.pathname.split("/")[1];
    if (loc === "" && props.children.toLowerCase() === "home") {
      setClassname("selected");
    } else if (loc === props.children.toLowerCase()) {
      setClassname("selected");
    } else {
      setClassname("");
    }
  }, []);

  return (
    <Link
      href={props.children != "Home" ? "/" + props.children.toLowerCase() : "/"}
    >
      <A className={classname} onClick={props.clicked}>
        {props.children}
      </A>
    </Link>
  );
};

export default NavItems;
