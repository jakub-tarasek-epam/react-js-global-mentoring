import React from 'react';

import { Wrapper, Stack } from "./Navigation.styles";

function Navigation() {
    return (
        <Wrapper>
            <Stack direction="horizontal" gap={3}>
                <div>ALL</div>
                <div>DOCUMNETARY</div>
                <div>COMEDY</div>
                <div>HORROR</div>
                <div>CRIME</div>
                <div className="ms-auto">SORT BY</div>
                <div>RELEASE DATE</div>
            </Stack>
            <span><strong>39</strong> movies found</span>
        </Wrapper>
    )
}

export default Navigation;
