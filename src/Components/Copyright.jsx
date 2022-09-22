import styled from "styled-components";

const Copyright = (props) => {
    return (
        <Styled className="Copyright">
            Copyright © 2013 Css Aythor
        </Styled>
    )
};

export default Copyright;

const Styled = styled.section`
text-align: center;
font-size: 1.5rem;
line-height: 2.8rem;
padding: 0.5rem;
color: var(--color4);
background-color: var(--color2);
`