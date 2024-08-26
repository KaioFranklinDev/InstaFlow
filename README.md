# InstaFlow - API para o Envio e Gerenciamento de IMAGENS

Este projeto realiza a monitoria de ligações telefônicas de um call center, utilizando a API da Fluxoti para obter as gravações das chamadas, o modelo Whisper para transcrição de áudios e a API da OpenAI para avaliar as ligações com uma pontuação de 0 a 100.

## Requisitos

- Node.js v20.12.2
- Bibliotecas Node: jwt, Nest
- Chave de API da Cloudnary
- Chave de API db

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
### O servidor contém as seguintes funções principais:

#### Get
* /logout : encerra sessão
#### Post
* /login: recebe dados pra entar
* /singin : criar conta









## Contribuição
### Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Notas Adicionais

- isntalar dependencias

