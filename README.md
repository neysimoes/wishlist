# Wishlist

Esse projeto tem como objetivo demonstrar a implementação de uma lista de desejos.

## Stack

- [NX](https://nx.dev/)
- [Fastify](https://fastify.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind](https://tailwindcss.com/)
- [SVGR](https://react-svgr.com/)

## Rodando localmente

```sh
npx nx run-many -t serve
```

**Ou se você preferir rodar isoladanmente cada projeto**

```sh
npx nx serve <project> # frontend | backend
```

- Frontend: http://localhost:5173/
- Backend: http://localhost:3000/

## Rodando testes

**Todos:**

```sh
npx nx run-many -t test
```

**Isoladamente:**

```sh
npx nx test <project> # frontend | backend
```

## Ícones

O projeto utiliza [Material Symbols & Icons](https://fonts.google.com/icons) para ícones.
Os ícones foram adicionados em forma de SVG ao projeto e convertidos em componentes React usando [SVGR](https://react-svgr.com/)

### Adicionando ícones

Adicione o arquivo em `/frontend/public/icon` no formato SVG e rode o comando:

```sh
npm run icons
```

Os ícones serão convertidos em componentes e estarão na pasta `/frontend/src/app/icon`
