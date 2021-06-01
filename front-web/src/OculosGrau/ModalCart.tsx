import Produtos from '../pagesAdmin/telasAdmin/Produtos';
import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons
} from './styled';

export default () => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto>
                    <ProductInfoArea >
                        <ProductDetails>
                        </ProductDetails>
                        <ProductQuantityArea>
                            
                        </ProductQuantityArea>

                    </ProductInfoArea>
                    <ProductButtons>

                    </ProductButtons>
                </ProductPhoto>
            </ProductArea>

        </Container>
    );
}
