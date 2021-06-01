import styled from 'styled-components';

export const CartArea = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 0px 0px 0px 30px;  
    right: 0px;
`;

export const CartHeader = styled.div`
    width: 220px;
    height: 35px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
`;

export const CartText = styled.div`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
     width: 64px;
     height: auto;
     border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div``;
