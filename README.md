# React III ❤️
``Nosso dontpad: http://dontpad.com/on13-react``

## `Chamada, apresentação das monitoras e acordos`
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

Conteúdo da aula: 
>> Chegou nossa última aula. Vamos focar 100% em produzir um projeto guiado, revisar todos os conteúdos e ter um extra com testes unitários. 🚀

1) Introdução aos Testes unitários com React Testing Library
2) Projeto Guiado

<br>
<br>

## 1) Introdução aos Testes unitários com React Testing Library
Como pessoas iniciantes na programação uma das ferramentas que pode nos dar confiança em nosso trabalho e em cada linha de código(cobertura de testes) que escrevemos são os testes.

Além disso, o mercado espera que advoguemos pela qualidade em nosso trabalho.

Por isso, em entrevistas de emprego costumam perguntar se temos alguma familiaridade com testes unitários. Essa aula vai ser o seu passo incial para sua resposta a essa pergunta ser 'SIM'.

> Benefícios de testar seu código:

* Encontrar e corrigir bugs
* Aumentar a confiabilidade da sua aplicação
* Otimizar o tempo da pessoa QA
* Serve como documentaçãos

<br/>
<br/>


> Bloco de teste

* Renderizar o componente que queremos testar
* Encontrar os elementos que queremos interagir
* Interagir com esses elementos
* Afirmar o resultado esperado

Quando criamos nossas aplicações com create-react-app a configuração para usar testes já vem toda pronta. São alguns daqueles arquivos default que a gente apagou lá na primeira aula.

Vamos aprender a testar em react? Na prática a gente vai imitar comportamento humano interagindo com a aplicação só que de forma automatizada. Sim, você vai poder dizer que começou a estudar testes unitários e automatizados com React Testing Library. Vamos lá!

1) Vamos verificar no package.json se temos as dependencias testing library e o script de test

2) Escrevemos o arquivo de test com a extensão .test.js ou .spec.js

3) Dentro do arquivo de test vamos importar o arquivo que queremos testar e também as funções do testing library

```
import { render, screen } from '@testing-library/react'
import App from './App'
```

4) Para criar seu teste a sintaxe pode ser esta abaixo:

```
describe('Hello world', () => {
  it('should render hello world', () => {
    render(<App />);
    const helloElement = screen.getByText('Hello, World!')
    expect(helloElement).toBeInTheDocument()
  })
})
```

5) Para rodar o scrip de test, no terminal rodamos yarn test

>No futuro, é muito importante estudar sobre TDD (Programação orientada a testes), saber também como criar mocks de objetos, chamadas de API e funções. Além de ser bastante críticas em avaliar quais casos de testes fazem sentido. :) 

<br>
<br>

> Material de apoio nos estudos de testes com React Testing Library:

- playlist completa com o básico: https://www.youtube.com/watch?v=7dTTFW7yACQ&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&t=6s
- documentação: https://testing-library.com/docs/
- artigo de projeto com teste no react e com typescript: https://blog.rocketseat.com.br/introducao-a-testing-library-testando-componentes-react/
- Priorização de uso das queries: https://www.youtube.com/watch?v=5ptcfSEH7vw


<br>
<br>

<br>
<br>

# 2) Projeto Guiado - App Minha listinha

<img src="https://media.giphy.com/media/G1tgxOE7F1GSIdCIvQ/giphy.gif" alt="Gif app minha listinha" width="500px">

Uma aplicação simples de TODO LIST, contendo 3 funcionalidades:

* Inserir uma nova tarefa (Não permitir criar a tarefa sem escrever nada no titulo da tarefa)
* Marcar tarefas como concluídas
* Apagar tarefas

> Nossa aplicação terá cobertura de testes com React Testing Library para as 3 funcionalidades

# Nossas tarefas

[x] Create React App

[x] Criar o component Header (html, css e tests)

[x] Criar o component List com a função de add uma tarefa (html, css e tests)

[] Criar e testar as funções de completar uma tarefa 

[x] Criar e testar as funções de deletar uma tarefa

[] Incluir configuração do Netlify

[x] Subir no github

[x] Subir no Netlify

---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Vamos usar o mesmo projeto Minha listinha feito na sala de aula e apenas incluir os componentes abaixo:


1) Incluir um menu
2) Incluir footer
3) Incluir uma página com tema livre( você decide o conteúdo)
4) Criar rotas
5) Atualizar no github para atualizar automaticamente no netlify.
6) A entrega da semana no classroom serão 2 links: o seu link do netlify e o seu link do github
7) Arraseee!


#### Vamos nos conectar!
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [tiktok](https://www.tiktok.com/@simaraconceicao?)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com)
