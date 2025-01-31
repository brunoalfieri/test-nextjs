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
Para facilitar a execução do projeto, é possível rodá-lo utilizando Docker. Recomendamos o uso do Docker Compose para reduzir a complexidade da configuração.

1. Certifique-se de ter Docker e Docker Compose instalados.
2. Na raiz do projeto, execute o seguinte comando:
  ```bash
    docker compose up
  ```
A aplicação será iniciada automaticamente e estará disponível em http://localhost:3000.

---

### ✨ Componentes 💻
A aplicação foi desenvolvida utilizando principalmente componentes próprios, permitindo maior flexibilidade e demonstrando a capacidade técnica. Entretanto, em algumas situações específicas, MUI foi utilizado para otimizar o tempo de desenvolvimento e manter a consistência visual.

Principais componentes utilizados:

- Input Text: Campo de entrada de texto personalizado.

- Input Textarea: Área de texto expandida para descrições.

- Modal: Componente modal com gerenciamento via Context API.

- Formulários: Conjunto de elementos estruturados para cadastro e edição de produtos.

- Button: Botão reutilizável para interações na interface.

- ButtonLink: Botão com funcionalidade de navegação.

- Typography: Componentes para manipulação de estilos de texto.

### Decisões Técnicas
- **React Hook Form**:
  O React Hook Form é uma biblioteca prática para validação de formulários, utilizada tanto no cliente quanto no servidor. Ela facilita a integração em aplicações fullstack, destacando-se pela compatibilidade com diversas bibliotecas, especialmente o MUI amplamente usado.

- **Prisma**:
  Optei por integrar o Prisma em vez de usar uma simples biblioteca para mockar dados, buscando uma abordagem mais realista com banco de dados. Apesar das limitações do SQLite como gerenciador, principalmente em questões de ordenação, essa escolha torna os testes mais próximos de uma integração completa com backend.

- **Design Pattern dos Componentes**:
  O uso do padrão de composição permite uma customização simples e prática, além de garantir escalabilidade. Um desafio desse padrão é a abstração quando precisamos restringir um escopo bem definido, mas toda modelagem envolve escolhas que impactam no resultado final.

- **Separação da Camada de Serviço**:
  Gosto da abordagem de centralizar todas as conexões em um único lugar. Dessa forma, o projeto garante que todas as integrações sigam o mesmo padrão, o que facilita para o desenvolvedor entender o fluxo e a estrutura do projeto sem se perder.

  - **Uso Intensivo do TypeScript**:
  Um dos maiores problemas do JavaScript é, de fato, a falta de tipagem (um entre muitos, haha). O uso intensivo do TypeScript garante que tudo esteja bem tipado, evitando os famosos problemas de "undefined", além de facilitar o desenvolvimento. O foco é aproveitar ao máximo os recursos do TypeScript, especialmente ao trabalhar com tipos dinâmicos e argumentos, tornando o sistema mais flexível e escalável.






