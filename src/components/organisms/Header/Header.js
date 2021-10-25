import React from "react";
import AddItemButton from "components/molecules/AddItemButton/AddItemButton";
import Title from "components/molecules/Title/Title";

import Search from "components/organisms/Search/Search";
import { Col, Row, Stack } from "react-bootstrap";

import { Wrapper } from "./Header.style.js";

function Header() {
  return (
    <Row>
      <Wrapper>
        <Col>
          <Stack direction="horizontal" gap={3}>
            <Title isHeader />
            <AddItemButton />
          </Stack>
          <Row>
            <Search />
          </Row>
        </Col>
      </Wrapper>
    </Row>
  );
}

export default Header;
