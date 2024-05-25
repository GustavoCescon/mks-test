## Descrição do Projeto

<p style="text-align: left">Este projeto representa minha primeira experiência com Docker, onde busquei mergulhar profundamente no aprendizado da tecnologia. Embora pudesse ter optado por uma arquitetura hexagonal mais complexa, é uma api simples de gerenciamento de filmes desenvolvido com Nest.js e TypeScript. Ele permite que os usuários visualizem uma lista de filmes, adicionem novos filmes, editem informações existentes e excluam filmes da base de dados utilizando bancos de dados PostgreSQL e Redis para caching.</p>


## Tecnologias usadas

<div style="display: flex; margin: 2em; gap: 1em;" >
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" height="45" width="45" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" height="45" width="45" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="45" width="45"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" height="45" width="45" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" height="45" width="45"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height="45" width="45" />
                     
</div>

## Instalação

<p style="text-align: left">
1. Certifique-se de ter o Node.js e o npm instalados em seu sistema.</p></br>
2. Clone este repositório em sua máquina local.</br>
3. Navegue até o diretório do projeto e execute npm install para instalar as dependências.</br>
4. Configure as variáveis de ambiente necessárias no arquivo .env.</br>
5. Execute npm start para iniciar o servidor.</p>

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

-  Link da API - [Aqui](https://api-movie-agpv.onrender.com/)

- Documentação - [Aqui](https://api-movie-agpv.onrender.com/api)

## Considerações

<p style="text-align: left">Considerando minha experiência de dois anos trabalhando com tecnologias como Nest.js, TypeScript, bancos de dados relacionais e Git, sinto-me confiante em abordar projetos de desenvolvimento de software com eficiência e qualidade. Através desses anos, tive a oportunidade de enfrentar uma variedade de desafios e adquirir um profundo conhecimento dessas ferramentas, permitindo-me desenvolver soluções eficazes e escaláveis. Dada a natureza deste projeto e sua relativa simplicidade, não identifiquei a necessidade de realizar um teste específico. Com base em minha experiência anterior e compreensão do escopo do projeto, estou confiante em minha capacidade de fornecer uma solução satisfatória sem a necessidade de um teste adicional.</p>

## Contribuição

<p style="text-align: left">Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull com melhorias ou correções.</p>
