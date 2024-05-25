## Descrição do Projeto

<p style="text-align: left">Este projeto representa minha primeira experiência com Docker, onde busquei mergulhar profundamente no aprendizado da tecnologia. Embora pudesse ter optado por uma arquitetura hexagonal mais complexa, decidi por uma abordagem mais simples para este teste. O projeto consiste em uma API RESTful de gerenciamento de filmes, com autenticação de usuários, utilizando bancos de dados PostgreSQL e Redis para caching.</p>


## Tecnologias usadas

<div style="display: flex; margin: 2em; gap: 1em;" >
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" height="45" width="45" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" height="45" width="45" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="45" width="45"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" height="45" width="45" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" height="45" width="45"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height="45" width="45" />
                     
</div>

## Rodando o Docker Compose

```bash

# Subindo o container
docker-compose up -d

# Encerrando o container
docker-compose down
```

<p style="text-align: left">Rode as magrations.</p>

```bash

# Criar a migration
npm run"migration:create"

# Gerar migrate
npm run migration:generate

```

## Acessando a Documentação e a API

-  Link da API - [Aqui](http://34.123.109.37:3000/users)

- Documentação - [Aqui](http://34.123.109.37:3000/api)

## Considerações

<p style="text-align: left">Não achei nescessário a existências de testes e2e e unitários devido a simplicidade da aplicação, o desenvolvimento desses testes não me daria um ganho de tempo se testados na mão, visto que cada rota era produzida unicamente e logo em seguida, testada, por isso não os inclui no repositorio.</p>