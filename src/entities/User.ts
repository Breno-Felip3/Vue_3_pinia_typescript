import Permission from "./Permission";

export default class User{
    private permissions:Permission[] = []

    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password?: string,
    ){}

    getPermissions(): Permission[]{
        return this.permissions
    }

    addPermissions(permission: Permission): void{
        this.permissions.push(permission)
    }

    syncPermissions(permissions: Permission[]): void{
        this.permissions = permissions
    }
}