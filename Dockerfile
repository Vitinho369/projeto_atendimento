FROM eclipse-temurin:21-jre-alpine

# Criar usuário não-root para segurança
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

WORKDIR /app

# Copiar JAR
COPY --chown=spring:spring ./target/atendimento-0.0.1-SNAPSHOT.jar app.jar
# Variáveis de ambiente para otimização
ENV JAVA_OPTS="-Xmx512m -Xms256m"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]