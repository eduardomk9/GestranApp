# GestranApp

## Description
Front End Application for GestranAPI.
Architecture explain:</br>
Inside public folder i have the viwes and structures as MVC:
</br>
hmtl files -> Viwes.</br>
CSS - > style files.</br>
js -> in this folder i have a clean division of api(Connection and Service from controllers), models, utils, views folder(used for js files for the view files) and lib for Libraries</br>


## 🚀 Installation/Implemetation
To run project in local you should have instaled the SDK for node.js and use the command npm -i or you can use Docker with commands below
obs: Be sure there is no other application running in 3000 port for this example.
<details>
  <summary>Click to show/hide</summary>
  
```CMD
docker build -t gestranapp .

docker run -p 3000:3000 gestranapp
```
</details>

## 📋 Usage
The application is ready to run/build with docker container or local with npm.

## ♾️ Business worflow explanation and logic front-to-back
1 - Read the readme from GestranAPI and prepare some data for the test ;</br>
2 - Login with a Inspector user, the table only render for the especific user;</br>
3 - Create a Inspection</br>
4 - Use the green button with 'plus' symbol to add the details about inspection, the filds of inspection should render dynamically if the data was created right in database</br>


## 🤝 TODO list
Views for, manage users, manage vehicles, supervisor home;</br>
Review data workflow end-to-end;</br>

## ☝️ Sugestions
Attachment System for pictures of Inspection;</br>

## 🖥️ Used Technologies
Javascript;</br>
Node.Js;</br>
BootStrap;</br>
HTML & CSS;</br>
Docker;</br>

## 📝 License
Only for study and non-distributable.


# [PT-BR]
# GestranApp

## Descrição
Aplicativo de Front End para GestranAPI.
Explicação da arquitetura:</br>
Dentro da pasta public, tenho as visualizações e estruturas como MVC:
</br>
Arquivos html -> Visualizações.</br>
CSS - > arquivos de estilo.</br>
js -> nesta pasta tenho uma divisão clara de api (Conexão e Serviço dos controladores), modelos, utils, pasta de visualizações (usada para arquivos js para os arquivos de visualização) e lib para Bibliotecas</br>


## 🚀 Instalação/Implementação
Para executar o projeto localmente, você deve ter o SDK para node.js instalado e usar o comando npm -i ou pode usar o Docker com os comandos abaixo
obs: Certifique-se de que não há outra aplicação em execução na porta 3000 para este exemplo.
<details>
  <summary>Click to show/hide</summary>
  
```CMD
docker build -t gestranapp .

docker run -p 3000:3000 gestranapp
```
</details>


## 📋 Uso
O aplicativo está pronto para ser executado/construído com contêiner Docker ou localmente com npm.

## ♾️ Explicação do fluxo de negócios e lógica de ponta a ponta
1 - Leia o readme do GestranAPI e prepare alguns dados para o teste ;</br>
2 - Faça login com um usuário Inspector, a tabela só será renderizada para o usuário específico;</br>
3 - Crie uma Inspeção</br>
4 - Use o botão verde com o símbolo de 'mais' para adicionar os detalhes sobre a inspeção, os campos da inspeção devem ser renderizados dinamicamente se os dados foram criados corretamente no banco de dados</br>


## 🤝 Lista de Tarefas
Visualizações para, gerenciar usuários, gerenciar veículos, página inicial do supervisor;</br>
Revisar o fluxo de dados de ponta a ponta;</br>

## ☝️ Sugestões
Sistema de Anexos para fotos de Inspeção;</br>

## 🖥️ Tecnologias Utilizadas
Javascript;</br>
Node.Js;</br>
BootStrap;</br>
HTML & CSS;</br>
Docker;</br>

## 📝 Licença
Apenas para estudo e não distribuível.
