export const foodReducer = (state,action) =>{
      switch(action.type){
          case "GET-FOODS":
              return {
                  ...state,
                  foods:action.payload
              }
              
           case "ADD-COMMENT":
               return{
                   ...state,
                   comments:[...state.comments,action.payload]
               }  
           case "CATEGORY-ITEM":
               return{
                   ...state,
                   items:action.payload,
                   loading:false

               }
            case "CLEAR":
                return{
                    ...state,
                    items:[]
                }   
            case "LOADING":
                return{
                    ...state,
                    loading:true
                }    
              
         default: return state; 
      }
}