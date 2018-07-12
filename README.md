# Loja Virtual

Aplicação web para uma loja virtual fictícia. Possui a funcionalidade de listar, cadastrar, alterar e excluir produtos.

## Instalação Rápida

**1. Instalar Docker CE**
**2. Clonar a aplicação**
```bash
git clone https://github.com/meloafc/loja-virtual.git
```
**3. Navegar para a aplicação clonada**
```bash
cd loja-virtual
```
**4. Executar o docker**
```bash
docker-compose up --build
```

O docker irá instalar e configurar todas as dependências necessárias para executar a aplicação, depois de alguns minutos a aplicação estará execultando em:
```bash
http://192.168.99.100:4200
```
ou
```bash
http://localhost:4200
```

## Instalação Manual
### Requisitos back-end

1. Java - 1.8.x
2. Maven - 3.x.x
3. Mysql - 5.x.x

### Etapas para a instalação

**1. Clonar a aplicação**

```bash
git clone https://github.com/meloafc/loja-virtual.git
```

**2. Configurar o Mysql**
```bash
create database loja_virtual
```

**3. Configurar usuário e senha do Mysql**

+ Abrir `src/main/resources/application.properties`

+ Trocar `spring.datasource.url`, `spring.datasource.username` e `spring.datasource.password` por sua configuração.

**4. Executar o back-end**

```bash
cd back-end/loja-virtual
mvn spring-boot:run
```

O back-end começará a ser executado em <http://localhost:8080>.

### Requisitos front-end

1. Nodejs - 8.x.x
2. NPM - 5.x.x
3. Angular cli - 1.7.x

**1. Executar o front-end**
```bash
cd ../../front-end/loja-virtual
ng serve
```

O front-end começará a ser executado em http://localhost:4200.

### Tecnologias utilizadas
+ Spring boot
+ Mysql
+ Angular
+ Bootstrap
+ Docker