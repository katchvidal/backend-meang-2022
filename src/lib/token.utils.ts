import { EXPIRETIME, MESSAGES, SECRET_KEY } from "../configs/constants";
import jsonwebtoken from 'jsonwebtoken'
import { IJsonWebToken } from "../interfaces/token.interfaces";


class GenerateToken {
    private secretKey = SECRET_KEY as string;
    sign(data: IJsonWebToken, expiresIn : number = EXPIRETIME.H24) {
        return jsonwebtoken.sign(
            { User : data.user },
            this.secretKey,
            { expiresIn, algorithm: 'HS512' }
        );
    }

    verify(token: string) {
        try {
            return jsonwebtoken.verify(token, this.secretKey) as string;
        } catch (error) {
            //  Si el token no es valido entrara por aqui
            return MESSAGES.TOKEN_VERIFICATION_FAILED
        }
    }

}


export default GenerateToken;