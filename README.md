# InstaFlow - API para o Envio e Gerenciamento de IMAGENS

API envia uma lista de IMAGENS salvas no cloudinary e recebe imagens e as sava no cloudinary. 

## Requisitos

- Node.js v20.12.2
- Bibliotecas Node: jwt, Nest
- Chave de API da Cloudinary

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/KaioFranklinDev/InstaFlow
cd instaflow
```
### instalar dependencias:

```bash
npm install
```
### crie arquivo .env e e colar Api's keys:
```
CLOUDINARY_API_SECRET=<sua_chave>
CLOUDINARY_API_KEY=<sua_chave>
CLOUDINARY_NAME=<sua_chave>
```
Substitua "sua_chave" pela sua chave de API.

## Uso
Para iniciar o servidor, simplesmente execute o comando :
```
nest start
```
### O comando realiza:

* Inicia o servidor nest em http://localhost:3000


## Arquitetura
### O servidor contém as seguintes rotas/funções principais:

#### Get
* /list-img : mostra a lista de imagens salvas no cloudnary
#### Post
* /send-img: recebe socitalçao POST com um arquivo("uma imagem"). ex: POST>body>form>files>"file":"/cachorrinho.png"
a









## Contribuição
### Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Notas Adicionais

- faltando algumas features.

