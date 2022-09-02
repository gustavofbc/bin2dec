import styled from 'styled-components';

export const Container = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #2E384D;

    img {
        margin-top: -5rem;
        padding: 1rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 450px;

    input {
        height: 3.6rem;
        width: 100%;
        background: var(--white);
        
        margin: 1rem;
        padding: 1rem;
        font-size: 1.1rem;

        border: 3px solid #1F2729;
        border-radius: .25rem;
    }

    button {
        width: 7.2rem;
        height: 3.6rem;
        font-size: 1.2rem;
        font-weight: bold;
        
        color: var(--white);
        background: var(--black-300);
        margin: 1rem;

        border: none;
        border-radius: .25rem;
        box-shadow: 10px 5px 4px rgba(0, 0, 0, 0.25);
        
        transition: background-color .3s;

        &:hover {
            background: var(--black-900);
        }
    }
    

    p {
        width: 100%;
        height: 3.6rem;
        
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 600;

        color: var(--white);
        background: var(--black-300);
        border: 3px solid #FFFFFF;
        border-radius: .25rem;
    }
`