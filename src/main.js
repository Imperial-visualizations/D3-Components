import * as components from "components";

const ImpVisD3 = {
    install(Vue){
        for(const componentName in components){
            const component = components[componentName]
            Vue.component(component.name,component);
        }
    }
}
export default ImpVisD3;
if (typeof window !== 'undefined' && window.Vue){
    window.Vue.use(ImpVisD3);
}