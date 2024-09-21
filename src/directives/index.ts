import { Directive, DirectiveBinding } from "vue";
import { userHasPermission } from '../utils/helpers';

export const can: Directive ={
    mounted(elemento: HTMLElement, binding: DirectiveBinding){
        if(!userHasPermission(binding.value)){
            elemento.style.display = 'none'
        }
    }
}