FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Expor a porta em que o servidor Node.js irá escutar
EXPOSE 3000

# Comando para iniciar o servidor Node.js
CMD ["node", "server.js"]
