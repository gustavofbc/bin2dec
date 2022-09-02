import styled from 'styled-components';

export const Container = styled.footer`
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
        padding: 1rem;

        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.8rem;
    }

    img {
        margin: 0 .25rem;
    }

    a {
        margin-left: .25rem;
        color: var(--black-300);

        transition: .3s;

        &:hover {
            color: var(--white);
        }
    }
    
`