# <div align="center"> Leddit </div>

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; e como gerenciador de pacotes do NodeJS o npm.
Sobre a divisão dos arquivos, há dois grandes setores. Os `components` são os componentes em si do meu projeto (adicionar playlist, adicionar músicas à playlist, ouvir playlist etc). Já os `Containers` são as páginas em si e podem ser pensadas como a união dos componentes para se mostrar na tela. 

## Sobre
Inspirado nas funcionalidades do [Reddit](https://reddit.com), o projeto contém páginas de login, cadastro, feed com criação de posts e comentários e votos em ambos. O projeto consome duas API's: a que a [Labenu](https://labenu.com.br) desenvolveu e também a API que desenvolvi. Você pode ter acesso ao backend dessa aplicação e contribuir clicando <a target="_blank" href="https://github.com/rafacazal/leddit-backend"> aqui</a>.

> status : 90% concluído 

## Deploy
#### > https://leddit.surge.sh

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:
1. `npm install` para instalar todas as dependências;
2. `npm run start` para rodar localmente o projeto;
3. `npm run build` para gerar uma versão estática do projeto (que ficará na pasta `build`)

## Como contribuir:
- Faça um fork desse repositório;
- Crie uma branch: `git checkout -b minha-branch`;
- Faça um commit com suas alterações: `git commit -m " Minha minhas contribuições"`;
- Faça push para a sua branch:`git push origin minha-branch` e depois confirme a abertura do PR.
