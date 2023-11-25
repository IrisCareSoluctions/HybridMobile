# IrisCare Soluctions

    O IrisCare é um aplicativo móvel desenvolvido para a prevenção e controle do Retinoblastoma, uma forma de câncer ocular, 
    por meio da análise de imagem, controle periódico e encaminhamento para a Secretaria Municipal e GRAACC.


<img align="center" src="https://github.com/IrisCareSoluctions/HybridMobile/blob/main/assets/evidencia4.png" />

----
# <span style="color: #63C71F;">Pitch</span>

[Assista ao video Pitch]( )

----

# <span style="color: #63C71F;">Demonstração WebApp da Azure </span>

[Assista ao video do back-end integrado rodando](https://www.youtube.com/watch?v=kX0do_P3T9E)

---

# Desenvolvedores:

    -> RM: 93915 -  JAELSON DOS SANTOS

    -> RM: 94311 - MARCOS BILOBRAM

    -> RM: 96320 - NATHÁLIA MAIA

    -> RM: 94972 - RAFAELA DA SILVA

    -> RM: 93613 - VINICIUS DE OLIVEIRA



<div align="center"> 
    <a href="https://github.com/JaelsonJonas">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101295166?v=4" />
    </a>
    <a href="https://github.com/marcosbilobram">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/92834827?v=4" />
    </a>
    <a href="https://github.com/natmaia">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/105464103?s=96&v=4" />
    </a>
    <a href="https://github.com/gsrafaela">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99452621?v=4" />
    </a>
    <a href="https://github.com/ViniOlr">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81593244?v=4" />
    </a>
</div>

<br/>

# Instruções de utilização

1. Clone o repositorio da API apringboot
`https://github.com/IrisCareSoluctions/DigitalBusiness.git`
2. Abra o terminal, navegue até o diretorio da pasta do repositorio e rode o **springboot** com o seguinte comando: 
`.\mvnw spring-boot:run `
3. Clone ester repositorio **react-native expo** 
`https://github.com/IrisCareSoluctions/HybridMobile.git` 
4. Abra o repositorio e rode os seguintes comandos:
   - `npm install` -> baixar as bibliotecas presentes  o projeto
   -  ` npm install -g eas-cli` -> Entrar no EAS
   -  ` eas login` -> Logar no expo
       -  email: devmaia@outlook.com
       -  passwork: Fiap2023    
   - `npx expo start` -> abrindo o projeto com expo
   - escolha a opção que preferir, ler o QRCODE, ou digite `a` para abrir o emulador

`
`

### Tela de Autenticação
---

Permitir que os usuários façam login com authentication token.

- Campos:
  - e-mail 
  - Senha

- Operação:
  - Enviar solicitação de autenticação para `POST http://localhost:8080/api/user/login`.

```
{
  "email": "string",
  "password": "string"
}
```

### Tela de Registro de Usuário
---

Permitir que novos usuários se registrem.

- Campos:
  - Nome Completo
  - CPF
  - Data de Nascimento
  - E-mail
  - Senha
    - Endereço:
      - CEP
      - Número
      - Rua
      - Bairro
      - Cidade
      - Estado
    - Telefone:
       - DDD
       - Número

- Operação:
  - Enviar solicitação de registro para `POST http://localhost:8080/api/user/signup`.

```
{
  "name": "string",
  "cpf": "string",
  "birthday": "string",
  "email": "string",
  "password": "string",
  "address": {
    "zipCode": "string",
    "number": "string",
    "street": "string",
    "neighborhood": "string",
    "city": "string",
    "state": "string"
  },
  "phone": {
    "ddd": "string",
    "number": "string"
  }
}
```

### Tela de Detalhes do Usuário
---

Esta tela obtém detalhes de um usuário específico.

### Campos

- **Nome Completo**
- **CPF**
- **Data de Nascimento**
- **E-mail**
- **Senha**
- **Endereço:**
  - CEP
  - Número
  - Rua
  - Bairro
  - Cidade
  - Estado
- **Telefone:**
  - DDD
  - Número
- **Filhos (se houver):**
  - Lista de Filhos


- Operação:
  - Enviar solicitação para obter os dados de registro para `GET http://localhost:8080/api/user/{id}`.


```json
{
  "name": "string",
  "cpf": "string",
  "birthday": "string",
  "email": "string",
  "password": "string",
  "active": true,
  "phone": {
    "ddd": "string",
    "number": "string"
  },
  "address": {
    "zipCode": "string",
    "number": "string",
    "street": "string",
    "neighborhood": "string",
    "city": "string",
    "state": "string"
  },
    "children": []
}

```

## Tela de Atualização do Usuário

Esta tela atualiza detalhes de um usuário específico.

- Campos:
  - Nome Completo
  - CPF (não será atualizado - valor fixo de criação)
  - Data de Nascimento (não será atualizado - valor fixo de criação)
  - E-mail
  - Senha


- Operação:
  - Enviar solicitação de atualização de registro para `PUT http://localhost:8080/api/user/{id}`.


```json
{
  "name": "string",
  "cpf": "string",
  "birthday": "string",
  "email": "string",
  "password": "string"
}
```

## Tela de exclução do Usuário

Desativa um usuário específico.

- Campos:
  - Nome Completo
  - CPF (não será atualizado - valor fixo de criação)
  - Data de Nascimento (não será atualizado - valor fixo de criação)
  - E-mail
  - Senha


- Operação:
  - Enviar solicitação de exclução de usuario para `DELETE http://localhost:8080/api/user/{id}`.


```json
[
  {
    "type": "string",
    "message": "string"
  }
]

```
## Para documentação completa do projeto acessar:    
  https://api-iriscare.azurewebsites.net/swagger-ui/index.html#/

---
# Desenvolvedores:

    -> RM: 93915 -  JAELSON DOS SANTOS

    -> RM: 94311 - MARCOS BILOBRAM

    -> RM: 96320 - NATHÁLIA MAIA

    -> RM: 94972 - RAFAELA DA SILVA

    -> RM: 93613 - VINICIUS DE OLIVEIRA



<div align="center"> 
    <a href="https://github.com/JaelsonJonas">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101295166?v=4" />
    </a>
    <a href="https://github.com/marcosbilobram">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/92834827?v=4" />
    </a>
    <a href="https://github.com/natmaia">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/105464103?s=96&v=4" />
    </a>
    <a href="https://github.com/gsrafaela">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99452621?v=4" />
    </a>
    <a href="https://github.com/ViniOlr">
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81593244?v=4" />
    </a>
</div>

## Tecnologias Utilizadas 
          
<div align="center" > 
    <img  align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />    
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
    <img align="center" height="50" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
    
          
    
          
    
          
    
          
          
          

</div>

<br/>
