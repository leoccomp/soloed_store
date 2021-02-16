import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 938px;
  height: 601px;
  left: 247px;
  top: 217px;

  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
    left: 20vw;
    top: 217px;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 218px;
  height: 285px;

  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  border-bottom: 0;

  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 111px;
  height: 138px;

  > img {
    max-width: 111px;
    max-height: 138px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 32px;

  background: #ffff00;
  color: #000000;
  border-radius: 0px 0px 8px 8px;
  border: none;

  > svg {
    margin-right: 15px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const DescAndPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  width: 118px;
  height: 38px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #2c2c2c;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 78px;
  height: 26px;

  background: #373737;
  border-radius: 5px;

  > span {
    color: #ffff00;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Description = styled.span`
  width: 192px;
  height: 25px;

  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
`;
