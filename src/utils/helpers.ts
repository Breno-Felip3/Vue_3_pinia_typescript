import { useUsersStore } from "../stores/users";

export const userHasPermission = (permissionName: string): boolean =>{
    const useStore = useUsersStore()
    const user = useStore.me
    let hasPermission = false
    user?.permissions.map(permission => {
        if(permission.name === permissionName){
            hasPermission = true;
        }
    })

    return hasPermission
}
