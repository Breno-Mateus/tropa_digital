
# 🏇 Tropa Digital — Painel Administrativo

Projeto desenvolvido com React para a criação de um **painel administrativo responsivo**, focado em gerenciamento de eventos e usuários. A aplicação simula um ambiente administrativo com login, navegação entre seções, exibição de dados tabulares com paginação e responsividade para dispositivos móveis.

## 🔐 Login de Acesso

> Como os dados são mockados, utilize as seguintes credenciais para acessar a aplicação:

```js
export const mockUser = {
  email: "usuario@exemplo.com",
  password: "123456"
};
```

---

## 🚀 Tecnologias Utilizadas

| Tecnologia            | Descrição                                  |
|-----------------------|----------------------------------------------|
| React                | Biblioteca principal para construção da UI. |
| React Hook Form      | Gerenciamento de formulários.               |
| Zod                  | Validação de dados integrada ao React Hook Form. |
| Styled Components    | Estilização com CSS-in-JS.                  |
| Zustand              | Gerenciamento de estado global.             |
| React Router DOM     | Roteamento entre páginas.                   |
| hamburger-react      | Animação do menu hambúrguer para mobile.   |
| React Icons          | Ícones prontos para uso em componentes.     |

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/tropa-digital.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Inicie o servidor local:

```bash
npm run dev
# ou
yarn dev
```

A aplicação será executada em `http://localhost:5173`.

---

## 🧪 Funcionalidades

- [x] Login com validação de formulário
- [x] Navegação por menu lateral
- [x] Responsividade com menu hambúrguer
- [x] Exibição tabular de dados paginados
- [x] Separação de lógica em hooks personalizados
- [x] Uso de Zustand para controle de seção selecionada

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Sinta-se livre para usar e modificar como quiser.
