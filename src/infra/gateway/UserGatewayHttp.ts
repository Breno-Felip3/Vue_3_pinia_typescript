import HttpClientRequests from "../http/HttpClientRequests";
import { NAME_TOKEN } from '../../utils/constants';
import User from "../../entities/User";
import Permission from "../../entities/Permission";

export default class UserGatewayHttp
{
    async login(email: string, password: string): Promise<Response>{
        const device_name = `vueApp${navigator.userAgent}`
        return await HttpClientRequests.post('/login', {
            email,
            password,
            device_name
        })
        .then(response => {
            localStorage.setItem(NAME_TOKEN, response.data.token)
            return Promise.resolve(response)
        })
    }

    async getMe(): Promise<User>{
        const response = await HttpClientRequests.withAuthorization().get('/me')
        .catch(error => {
            if(error.response.status === 401){
                localStorage.removeItem(NAME_TOKEN)
            }
        })
        const {id, name, email, permissions} = response.data
        const user = new User(id, name, email);

        const permissionsUser: Permission[] = permissions.map((permission: any) => {
            return new Permission(permission.id, permission.name, permission.description)
        });
        user.syncPermissions(permissionsUser);
        return user;
    }
}