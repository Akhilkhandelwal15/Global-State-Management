export const saveToLocalStorage = (state)=>{
    try{
        console.log("state:", state);
        const serialized = JSON.stringify(state);
        localStorage.setItem("reduxState", serialized); 
    }
    catch(error){
        console.log("Error occur while saving the state", error);
    }
}

export const loadFromLocalstorage = ()=>{
    try{
        const serialized = localStorage.getItem("reduxState");
        if(serialized==null) return undefined;
        return JSON.parse(serialized);
    }
    catch(error){
        console.log("Error occur while loading state", error);
    }
}