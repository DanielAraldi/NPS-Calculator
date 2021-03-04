<h1 align="center">
    <img alt="Trilha Node.js" src=".github/logo.png" height="200px" />
    <br>Next Level Week #4 - Trilha Node.js<br/>
    Typescript | Node.js | Jest
</h1>

<p align="center">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DanielAraldi/NPS-Calculator?style=flat-square">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/DanielAraldi/NPS-Calculator?style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/DanielAraldi/NPS-Calculator?style=flat-square">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1?style=flat-square"><br/>
</p>

<p align="center">
    <a href="#bookmark-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
</p>

## :bookmark: Sobre o Projeto

O **NPS-Calculator** é uma aplicação criado com intuito de enviar e-mails para os clientes, com o objetivo de calcular a satisfação dos clientes sobre o sistema que estão utilizando.

Sistema foi elaborado como proposta de ensino para seus participantes.

Essa aplicação foi realizada durante a **Next Level Week #4**, projeto da [Rocketseat](https://rocketseat.com.br/).

## :rocket: Tecnologias Utilizadas

- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Typeorm](https://typeorm.io/#/)
- [Typescript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)
- [Yarn](https://yarnpkg.com/)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - Por fim, é **preciso** ter um gerenciador de pacotes seja o **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/DanielAraldi/NPS-Calculator.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd api
  # Instalando as dependências do projeto.
  $ yarn # npm install
  # CONFIGURANDO O BANCO DE DADOS
    # - CRIAÇÃO DE TABELAS:
    $ yarn typeorm migrations:run # npm typeorm migrations:run
    # - EXCLUIR ÚLTIMA TABELA CRIADA:
    $ yarn typeorm migration:revert # npm typeorm migration:revert
  # Inicie a API
  $ yarn dev # ou npm dev
  # Inicia os testes com Jest
  $ yarn test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<sup>Projeto desenvolvido com a tutoria de [Daniele Leão](https://github.com/danileao), da [Rocketseat](https://rocketseat.com.br/).</sup>
