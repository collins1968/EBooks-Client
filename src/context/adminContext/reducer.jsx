const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD-USERS":
            return {
                ui: action.payload
            }
        case "VIEW-USERS":
            return {
                ui: action.payload
            }
        case "VIEW-BOOKS":
            return {
                ui: action.payload
            }
        case "ADD-BOOKS":
            return {
                ui: action.payload
            }
        case "VIEW-AUTHORS":
            return {
                ui: action.payload
            }
        case "ADD-AUTHORS":
            return {
                ui: action.payload
            }
        case "VIEW-PURCHASES":
            return {
                ui: action.payload
            }
        
        default:
            return state;
    }
}

export default Reducer;