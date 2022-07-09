#   Backend GraphQL - NodeJS - Typescript - Apollo - Express
```
    1.  Comenzamos el backend server ( 2022 ) Lo mas robusto posible
    2.  Tecnologias a Usar:
        -   Typescript
        -   Graphql
        -   NodeJs
        -   Express
        -   Apollo
        -   MongoDB
        -   Github Actions
        -   Docker
```


##  Estructura Basica del Proyecto
```
    -   src
        -   lib
        -   config
        -   interfaces
        -   resolvers
        -   schemas
        -   services
```

##  Programando Nodemon
```
    -   Package.json
        -   "scripts": {
                "start": "node build/server.js",
                "build": "tsc -p .",
                "dev": "nodemon \"src/server.ts\" --exec \"ts-node\" \"src/server.ts\" -e ts,graphql,json"
            },
```

##  Configuraciones Iniciales
```
    -   Configuraciones iniciales variables de ambiente y enviroments desarrollo y Produccion
    1.  CONFIGURACIONES
        -   enviroments.ts
        

```
