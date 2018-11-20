//常见数组高阶函数操作

//创建数组
const arr = [5,1,3,2,4,0]

//forEach 遍历元素，无返回值
arr.forEach(key=>{
    console.log(key)
})

//map 遍历每个元素，并返回值
let result = arr.map(key=>{
    return key +' 是新返回的'
})
console.log(result)

//reduce 接受两个参数a与b，并且返回值作为下一个参数a，例如求和：
result = arr.reduce((a,b)=>{
    return a+b
})
console.log(result)


//filter 筛选，返回为ture的值。例如筛选大于2的所有值
result = arr.filter(key=>key>2)
console.log(result)


//sort 排序,接受两个参数
result = arr.sort((a,b)=>{
    return b-a
})
console.log(result,arr)