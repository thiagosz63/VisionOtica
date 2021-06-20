INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos SPEEDO', 253.00, 'imagem/1.png', 'SP1216 02B Azul Escuro Com Haste 360 Lente Tam 55.', 0);
INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos Arnette', 400.00, 'imagem/2.png', 'THE SEEKER AN7182 2702 Azul Striped Lente Tam 49.',0);
INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos SPEEDO', 350.00, 'imagem/5.png', 'SP1216 02B Azul Escuro Com Haste 360 Lente Tam 55.', 1);
INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos Arnette', 400.00, 'imagem/6.png', 'THE SEEKER AN7182 2702 Azul Striped Lente Tam 49.',1);
INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos SPEEDO', 350.00, 'imagem/7.png', 'SP1216 02B Azul Escuro Com Haste 360 Lente Tam 55.', 2);
INSERT INTO tb_product (name, price, image_Uri, description, categoria) VALUES ('Óculos Arnette', 400.00, 'imagem/8.png', 'THE SEEKER AN7182 2702 Azul Striped Lente Tam 49.',2);


INSERT INTO tb_client (nome,email, cpf, sexo, senha, categoria) VALUES ('thiago','thiagosz63@gmail.com', '73550999062', 'Masculino','123456',0);
INSERT INTO tb_client (nome,email, cpf, sexo, senha,categoria) VALUES ('thiago','admin@gmail.com', '80308147049', 'Masculino','123456', 1);

INSERT INTO tb_client (nome,email, cpf, sexo, senha, categoria) VALUES ('felipe','felipe@gmail.com', '12545395010', 'Masculino','123456',0);
INSERT INTO tb_client (nome,email, cpf, sexo, senha,categoria) VALUES ('felipe','admin@gmail.com.br', '12365495112', 'Masculino','123456', 1);

INSERT INTO tb_pedido (quantidade, preco, data_Venda, status, cliente_id) VALUES (2, 23.5, '2016-02-06', 0, 1);
INSERT INTO tb_pedido (quantidade, preco, data_Venda, status, cliente_id) VALUES (2, 23.5, '2016-02-06', 0, 2);

INSERT INTO tb_pedido_product (pedido_id, product_id) VALUES (1 , 1);
INSERT INTO tb_pedido_product (pedido_id, product_id) VALUES (1 , 2);

INSERT INTO tb_pedido_product (pedido_id, product_id) VALUES (2 , 3);
INSERT INTO tb_pedido_product (pedido_id, product_id) VALUES (2 , 4);
