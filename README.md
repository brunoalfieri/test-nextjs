# Teste Frontend - Gerenciamento de Produtos 🛒

Este projeto é uma **aplicação web para gerenciamento de produtos**, desenvolvida com foco em **Next.js**, gerenciamento de estado, consumo de APIs, estilização com **Tailwind CSS** e implementação de testes.
---

### ✨ Requisitos 💻
- Node.js v22
  - (Baixe aqui)[https://nodejs.org/pt/download]
- Docker Desktop (Opcional)
  - (Baixe aqui)[https://www.docker.com/products/docker-desktop/]

## 🚀 Tecnologias Utilizadas

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **Gerenciamento de estado** (Context API)
- **API** Na própria aplicação

## 🛠️ Funcionalidades

1. **Listagem de Produtos**
   - Exibição de produtos com:
     - Nome do produto
     - Categoria
     - Preço
     - Descrição
     - Imagem

2. **Cadastro de Produtos**
   - Formulário com os seguintes campos:
     - Nome
     - Preço
     - Descrição
     - URL da Imagem
   - O produto cadastrado deve ser exibido na lista automaticamente.

3. **Filtragem e Ordenação**
   - Filtrar produtos pelo nome, categoria, descrição e faixa de preço.
   - Ordenar produtos de acordo com critérios definidos pelo usuário.

## 🔥 Diferenciais (Extras)

- Implementação de **paginação** para melhor experiência do usuário.
- **Responsividade** para diferentes tamanhos de tela.
- **Documentação** sobre as decisões técnicas adotadas.
---

## 🏗️ Como Rodar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/brunoalfieri/test-nextjs.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd test-nextjs
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Renomei o arquivo .env.example para .env:
5. Crie a tipagem do banco de dados:
  ```bash
   npx prisma generate
   ```
6. Crie o banco de dados:
  ```bash
   npx prisma migrate deploy
   ```
7. Inicie a aplicação:
   ```bash
   npm run dev
   ```
8. Acesse no navegador:
   - **http://localhost:3000**

---

## 🧪 Testes

Para executar os testes:
```bash
npm run test
```

---

## 📌 Melhorias Futuras

1. **Aprimorar a UI/UX** para uma melhor experiência.
2. **Adicionar integração com uma API real** no futuro.
3. **Refinar testes** para maior cobertura.
4. **Melhoria na performance**, otimizando renderização e carregamento de dados.

---

### ✨ Docker 💻
É possível executar a aplicação com Docker seguindo os passos abaixo, dando preferência ao Docker Compose para menor complexidade.
1. Na raiz da aplicação execute:
  ```bash
    docker compose up
  ```


---

### ✨ Componentes 💻
A aplicação foi usado principalmente componentes próprios para a possibilidade de analisar a capacidade técnica, em algumas situações foi usado o MUI por conveniencia e tempo.
- Componente Input Text
- Componente Input Textarea
- Componente Modal com foco no Context API
- Formulários
- Componente Button
- Componente ButtonLink
- Componente Typography




