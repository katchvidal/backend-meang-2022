
//  Fichero de interface de contexto global del servidor recibe los parametros para tener una comunicacion entre el cliente y el servidor

export interface IContextServer {
    req: IRequest;
    connection: IConnection;
    transport?: any
}

interface IRequest {
    headers: {
        authorization: string
    };
}

interface IConnection {
    authorization: string;
}