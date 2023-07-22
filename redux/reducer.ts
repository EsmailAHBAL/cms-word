export const reducer = (state = {name:"caten"},payload :{type:string,data?:any}) => {
 if(payload.type =='Get') return {name:"changed"}
  return state
}