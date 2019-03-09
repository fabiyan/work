// let add=(num)=>{
//     console.log('reducer-action',num)
//     return {
//         type:'ADD',
//         num:num
//     }
// }
// export default add;
export let add=(num)=>{
        console.log('reducer-action',num)
        return {
            type:'ADD',
            num:num
        }
    }
export let minus=(num)=>{
    return {
        type:'MINUS',
        num
    }
}
export let weight=(num)=>{
    return {
        type:'WEIGHT',
        num
    }
}