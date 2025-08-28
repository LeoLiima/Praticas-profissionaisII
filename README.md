# Projeto Avaliador de Filmes

## 1. Descrição

Aplicação full-stack para avaliação e gerenciamento de um catálogo de filmes.  
O sistema permite a visualização de filmes e o registro de avaliações por parte dos usuários.  
Inclui também um painel administrativo para operações de CRUD (Criar, Ler, Atualizar, Deletar) sobre os filmes.

---

## 2. Funcionalidades

- Listagem de filmes do catálogo
- Visualização de detalhes por filme (sinopse, ano, diretor)
- Sistema para registro de avaliações
- Painel administrativo para gerenciamento de filmes (CRUD)

---

## 3. Arquitetura

O projeto é dividido nos seguintes componentes:

- **Frontend**: Interface de usuário desenvolvida com HTML e CSS  
- **API Principal (Node.js)**: Responsável por servir o frontend e processar interações dos usuários, como listagem e avaliação de filmes  
- **Painel de Administração (Java Spring)**: Serviço dedicado ao gerenciamento do catálogo, com interface para operações de CRUD  
- **Banco de Dados (SQL Server)**: Sistema centralizado para armazenamento dos dados


---

## 4. Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3

### Backend (API Principal)
- Node.js
- Express.js

### Backend (Painel de Administração)
- Java 17+
- Spring Boot
- Spring Data JPA
- Thymeleaf
- Maven / Gradle

### Banco de Dados
- Microsoft SQL Server

---

## 5. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (v18.x ou superior)
- [Java JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (v17 ou superior)
- [Maven](https://maven.apache.org/) ou [Gradle](https://gradle.org/)
- [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server)

---

## Licença

Este projeto é distribuído sob a licença MIT.
