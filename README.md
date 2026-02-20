# Sistema Funerário – Gestão de Atendimentos  
API REST + Frontend Web

Este projeto representa um sistema de atendimentos funerários, desenvolvido como teste técnico para a vaga de Desenvolvedor Full Stack Júnior.

A aplicação simula o fluxo básico de uma funerária, permitindo registrar e acompanhar atendimentos relacionados a óbitos, contato com familiares e status do serviço.

A solução é composta por:
- **Backend**: API REST em Spring Boot  
- **Frontend**: Aplicação web em React com Tailwind CSS  

---

## Descrição da Solução

O sistema tem como objetivo centralizar os atendimentos funerários, facilitando o controle interno da funerária.

Cada atendimento representa um serviço prestado, contendo informações como:
- Nome do falecido
- Data do falecimento
- Telefone para contato
- Status do atendimento
- Descrição ou observações
- Datas de criação, atualização e exclusão lógica

### Funcionalidades principais
- Cadastro de atendimentos funerários
- Listagem de atendimentos ativos
- Consulta de atendimento por ID
- Exclusão lógica de atendimentos
- Comunicação frontend com backend via API REST
- Organização em camadas (Controller, Service, Repository, DTO)

---

## Tecnologias Utilizadas

### Backend (API REST)
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL

### Frontend (Web)
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---

##  Como Executar o Projeto

Para executar o projeto baixe através do GitHub, a partir do seguinte comando:

```bash
git clone https://github.com/Vitinho369/projeto_atendimento.git
cd projeto_atendimento
```
Baixe o projeto duas vezes, onde você terá que utilizar um projeto
para ser destinado a executar o Frontend e outro para executar o Backend

Para executar o backend do projeto, execute o seguinte comando para trocar a branch e veja as informações em README.md:


```bash
git checkout backend
```


Para executar o frontend do projeto, execute o seguinte comando para trocar a branch e veja as informações em README.md:


```bash
git checkout frontend
```