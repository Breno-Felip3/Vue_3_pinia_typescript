import HttpClientRequests from "../http/HttpClientRequests";

export default class UserGatewayHttp
{
    async login(email: string, password: string): Promise<any>{
        const device_name = `vueApp${navigator.userAgent}`
        return await HttpClientRequests.post('/login', {
            email,
            password,
            device_name
        });
    }
}