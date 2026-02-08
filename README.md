<h1 align="center">Customer Manager App (PT-BR)</h1>

<p align="center">
  <strong>Languages:</strong><br>
  <a href="README.md">Português</a> |
  <a href="README.en.md">English</a>
</p>

O **Customer Manager App** é uma aplicação **Full Stack** para gerenciar clientes de forma simples e moderna.

Gerencie clientes com um CRUD moderno, formulários reativos, Angular, Spring Boot e PostgreSQL.

---

## **Como rodar o projeto**

### **Ambientes**

- **Local:** usa `application-local.properties` e PostgreSQL local.
- **Produção:** usa `application-prod.properties` e PostgreSQL no Render (env vars).

### **Pré-requisitos**

- Java 21
- Node.js 18+
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)
- PostgreSQL em execução

### **1. Configurar o Banco de Dados (Local)**

Crie um banco no PostgreSQL:

```sql
CREATE DATABASE localhost_customer_manager_app;
```

As credenciais locais ficam em `backend/src/main/resources/application-local.properties`.

### **2. Rodar o Backend (Spring Boot)**

No diretório `/backend`:

```bash
SPRING_PROFILES_ACTIVE=local mvn spring-boot:run
```

Windows PowerShell:

```powershell
$env:SPRING_PROFILES_ACTIVE="local"; mvn -q -DskipTests spring-boot:run
```

O backend estará disponível em: `http://localhost:8080/api/customers`

### **3. Rodar o Frontend (Angular)**

No diretório `/frontend`:

```bash
npm install
ng serve
```

O frontend estará disponível em: `http://localhost:4200`

### **Produção (Render + Vercel)**

- Backend: Render (Spring Boot + PostgreSQL)
- Frontend: Vercel (Angular)
- Render env vars: `DB_URL`, `DB_USER`, `DB_PASSWORD`, `SPRING_PROFILES_ACTIVE=prod`

## **Funcionalidades do Projeto**

O **Customer Manager App** oferece um CRUD completo com uma interface moderna e responsiva.

### **Principais Funcionalidades**

- **Criar Cliente:**  
  Formulário reativo com validação e feedback visual.

- **Listar Clientes:**  
  Tabela responsiva com botões de ação (Atualizar / Deletar).

- **Atualizar Cliente:**  
  Edição de dados com formulário pré-preenchido via ID.

- **Deletar Cliente:**  
  Exclusão com atualização instantânea da lista.

- **Interface Moderna:**  
  - Tema Warm Sand com cards leves  
  - Tipografia Manrope  
  - Botões com hover e foco  
  - Layout centralizado e responsivo  

- **Validação e erros amigáveis:**  
  - Validação no frontend e backend  
  - Mensagens claras por campo e erros 400 amigáveis  

## **Screenshots**

![Get all customers](docs/screenshots/get-all-customers.png)
![Update customer](docs/screenshots/update-customer.png)
![Add new customer](docs/screenshots/add-new-customer.png)

## **Aprendizados Técnicos**

Durante o desenvolvimento deste projeto foram aplicadas diversas boas práticas:

- Uso de **componentes standalone** no Angular  
- **Reactive Forms** com validação e patch de dados  
- Integração REST entre **Angular e Spring Boot**  
- Configuração de **CORS** e rotas dinâmicas  
- Estilização moderna e **UX responsiva**

## **Contribuições**

Contribuições são muito bem-vindas!  
Para colaborar:

1. Faça um fork do repositório  
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`  
3. Commit suas alterações seguindo o padrão **Conventional Commits**  
4. Envie um Pull Request

## **Licença**

Este projeto está sob a licença **MIT**.

## Autor

**Piter Gomes** — Aluno de Ciências da Computação (5º Semestre) & Desenvolvedor Full-Stack

[Email](mailto:piterg.bio@gmail.com) | [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | [GitHub](https://github.com/pitercoding) | [Portfolio](https://portfolio-pitergomes.vercel.app/)
