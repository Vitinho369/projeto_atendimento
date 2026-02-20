# Sistema Funerário – Gestão de Atendimentos (Execução do Backend)
É necessário ter o docker instalado para executar o banco de dados

Inicie o Docker e execute os seguintes comando:

```bash
docker-compose up --build
```

Em seguinda, execute o seguinte comando para iniciar o backend:

### Windows (PowerShell)

* Defina variáveis de ambiente (apenas em ambiente de desenvolvimento)

```bash
$env:DATABASE_HOST="localhost"
$env:DATABASE_PORT="5432"
$env:DATABASE_NAME="atendimento"
$env:DATABASE_USERNAME="postgres"
$env:DATABASE_PASSWORD="123"
$env:HOST_URL="http://localhost:5173"
```

* Execute:

```bash
.\mvnw spring-boot:run
```

### Linux / macOS (terminal Bash)

* Defina variáveis de ambiente (apenas em ambiente de desenvolvimento)

```bash
export DATABASE_HOST=localhost
export DATABASE_PORT=5432
export DATABASE_NAME=atendimento
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=123
export HOST_URL=http://localhost:5173
```

* Execute:

```bash
mvn spring-boot:run
```

#### A API estará disponível em:

```bash
http://localhost:8080
```

Exemplo de endpoint: GET http://localhost:8080/atendimentos