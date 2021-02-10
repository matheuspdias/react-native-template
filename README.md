# react-native-template
Template react-native configurado com as principais libs para desenvolvimento RN

<!-- TABLE OF CONTENTS -->


## Sobre o Projeto

Template criado para ajudar no processo de inicialização de um novo projeto React Native. Já configurado com uma estrutura e com as principais libs de desenvolvimento instaladas

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - Framework responsavel por permitir criar aplicações mobile com javascript;
- [Redux](https://redux.js.org/) - é uma biblioteca para armazenamento de estados de aplicações JavaScript. - [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - Irá permitir a manipulação de gestos no react native.
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [React-Navigation](https://reactnavigation.org/docs/getting-started) - é uma biblioteca popular para roteamento e navegação em uma aplicação React Native. Essa biblioteca ajuda a resolver o problema de navegar entre várias telas e compartilhar dados entre elas.
- [Styled-Components](https://github.com/styled-components/styled-components) -é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS.
<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.


### Instalação

Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
npx react-native init NameAppExample --template mpdev-rn-template
```


Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---


### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
mpdev-rn-template
├── src/
│   ├── assets/
│   │   
│   ├── components/
│   │ 
│   ├── reducers/
│   │   └── index.js
│   ├── screens/
│   │    └── Home/
│   │         └── index.js
│   │         └── style.js
│   ├── services/
│   │   └── api.js
│   ├── stacks/
│   │   └── MainStack.js
│   ├── Store.js
├── .gitignore
├── App.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── package.json
```
