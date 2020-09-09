// num=[4,7,8,5]
// const num2 = num.find(function(index){
//     if (index>5) {
//         return index
//     }

// })

// console.log(num2)\

// const  friends=["ashik","ash","nilla","moushumi"]

// const result = friends.map(function(element){
//      return element.length
// })

// // console.log(result)

// let result2=Math.min(...result)
// console.log(result2);
// let  index =result.indexOf(result2)
// console.log(index)
// console.log(friends[index])

const actors=[
    {id:45 , name:"manna"},
    {id:47 , name:"umar sani"},
    {id:75 , name:"wannbeGumb"}
]
const idArr=actors.filter(function(element){
    if(element.id>40){
        return element.id
    }
})

console.log(idArr)
// var idArr=[]
// for (let i = 0; i < actors.length; i++) {
//     const element = actors[i].id;
//     idArr.push(element)

    
// }
// console.log(idArr)







