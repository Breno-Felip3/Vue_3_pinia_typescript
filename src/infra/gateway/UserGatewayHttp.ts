import User from "../../entities/User";
import HttpClientRequests from "../http/HttpClientRequests";

export default class UserGatewayHttp
{
    async login(email: string, password: string): Promise<User>{
        const device_name = `vueApp${navigator.userAgent}`
        return await HttpClientRequests.post('/login', {
            email,
            password,
            device_name
        });
    }
}