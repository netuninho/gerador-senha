<h1 align="center">Gerador de Senha</h1>
<p align="center">Este projeto foi desenvolvido como parte de um desafio para a vaga de Pessoa Desenvolvedora Front End (Vaga Afirmativa para Mulheres) na Alura.</p>

### Tabela de conteúdos

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#funcionalidades"> Funcionalidades</a> • 
 <a href="#uso">Uso</a> • 
 <a href="#instalação">Instalação</a> • 
 <a href="#tecnologias">Tecnologias</a> 
</p>

### Objetivo

O objetivo deste projeto é criar um gerador de senhas personalizável que permite aos usuários criar senhas seguras de acordo com suas preferências.

Para acessar o site clique aqui -> [AQUI](https://gerador-senha-iota.vercel.app)

### Funcionalidades

- **Geração de Senha**: Cria senhas aleatórias com base nas características selecionadas (letras maiúsculas, minúsculas, números e símbolos).
- **Tamanho da senha**: Permite a escolha da quantidade de caracteres.
- **Avaliação de Força**: Classifica a força da senha gerada como fraca, média ou forte.
- **Botões de Ação**: Inclui botões para copiar a senha gerada e gerar uma nova senha.

Para determinar a força da senha, é seguido um padrão específico que considera:

-**Fraca**: Nenhum campo selecionado, apenas letras maiúsculas selecionado, apenas letras minúsculas selecionado, ambos letras maiúsculas e minúsculas selecionado.
-**Média**: Letras maiúsculas, minúsculas e mais algum campo selecionado.
-**Forte**: Todos os campos selecionados.

### Uso

1. **Escolha as características**: Marque as opções desejadas para a senha (letras maiúsculas, minúsculas, números, símbolos).
2. **Defina o comprimento da senha**: Ajuste o tamanho da senha se necessário.
3. **Gere a senha**: Clique no botão "Gerar Senha" para criar uma nova senha.
4. **Copie a senha**: Utilize o botão "Copiar Senha" para copiar a senha gerada para a área de transferência.

### Instalação

Para executar este projeto localmente, siga estas etapas:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd nome-do-repositorio
    ```
3. **Instale o SASS**:
    ```bash
    npm install -g sass
    ```

4. **Compile os arquivos SASS** (se necessário):
    ```bash
    sass src/styles/main.scss:dist/styles/main.css
    ```

5. **Abra o arquivo HTML em um navegador**.

###  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- HTML
- CSS
- SASS
- Javascript
