# IrisCare Soluctions

    O IrisCare é um aplicativo móvel desenvolvido para a prevenção e controle do Retinoblastoma, uma forma de câncer ocular, por meio da análise de imagem, controle periódico e encaminhamento para a Secretaria Municipal e GRAACC.

# 

# Endpoints

    Para teste de CRUD principal escolhemos o User.

    ## Endpoints da API

| Método   | Endpoint                                     | Descrição                                      |
|----------|----------------------------------------------|------------------------------------------------|
| `POST`   | `/api/user/login`                            | Autentica um usuário.                          |
| `POST`   | `/api/user/signup`                           | Registra um novo usuário.                      |
| `GET`    | `/api/user/{id}`                             | Obtém detalhes de um usuário específico.       |
| `PUT`    | `/api/user/{id}`                             | Atualiza detalhes de um usuário específico.    |
| `DELETE` | `/api/user/{id}`                             | Desativa um usuário específico.                |
| `POST`   | `/api/user/{id}/children`                    | Registra um novo filho para um usuário.        |
| `GET`    | `/api/user/{id}/children/{childId}`          | Obtém detalhes de um filho específico.         |
| `GET`    | `/api/user/{id}/children`                    | Obtém todos os filhos de um usuário.           |
| `PUT`    | `/api/user/{id}/children/{childId}`          | Atualiza detalhes de um filho específico.      |
| `PUT`    | `/api/user/{id}/children/{childId}/active`   | Atualiza o status ativo de um filho específico.|
| `PUT`    | `/api/user/{id}/phone`                       | Atualiza o telefone de um usuário.            |
| `PUT`    | `/api/user/{id}/address`                     | Atualiza o endereço de um usuário.            |
 

### Tela de Autenticação

Permitir que os usuários façam login.

- Campos:
  - Nome de usuário (ou e-mail)
  - Senha

- Operação:
  - Enviar solicitação de autenticação para `POST /api/user/login`.

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


---

## Tela de Registro de Usuário

Permitir que novos usuários se registrem.

- Campos:
  - Nome de usuário
  - Senha
  - E-mail
  - Primeiro nome
  - Último nome

- Operação:
  - Enviar solicitação de registro para `POST /api/user/signup`.

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
        <img align="center" height="100" width="100" style="border-radius: 50%;" src="https://github.com/natmaia/arquivosFotosReadme/blob/main/fotoperfil.jpg" />
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