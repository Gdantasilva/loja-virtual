# Loja Virtual

### Requisitos back-end

1. Java - 1.8.x
2. Maven - 3.x.x
3. Mysql - 5.x.x

### Etapas para a instalação

**1. Clonar a aplicação**

```bash
git clone ...
```

**2. Configurar o Mysql**
```bash
create database loja_virtual
```

**3. Configurar usuário e senha do Mysql**

+ Abrir `src/main/resources/application.properties`

+ Trocar `spring.datasource.username` e `spring.datasource.password` por sua configuração.

**4. Executar o back-end**

```bash
mvn spring-boot:run
```

O aplicativo começará a ser executado em <http://localhost:8080>.
