//常见数组迭代函数操作
const arr = [5,1,3,2,4,0]

//forEach 遍历元素，无返回值
arr.forEach(key=>{
    console.log(key+'遍历')
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


//sort 排序,接受两个参数,例如正序
result = arr.sort((a,b)=>{
    return a-b
})
console.log(result)


//every 测试数组的所有元素是否都通过了指定函数的测试,通过则返回true否则false，例如判断是否都大于3,result为false
result = arr.every((val,index)=>{
    return val > 3
})
console.log(result)

//some 测试数组的元素是否有通过指定函数的测试,通过则返回true否则false，例如判断是否都大于3，result为true
result = arr.some((val,index)=>{
    return val > 3
})
console.log(result)



//并集，交集，差集求法，合并去重
const a = [1,2,3]
const b = [3,4,5]
//并集
result = [...a,...b]      //方法一
result = a.concat(b)     //方法二
console.log(result)

//交集
result = a.filter(val=>b.includes(val))
console.log(result)

//a对b求差集
result = a.filter(val=>!b.includes(val))
console.log(result)

//合并去重
result = a.concat(b).filter((val,index,arr)=>arr.indexOf(val)===index)  //方法一
result = [...new Set([...a,...b])]                                     //方法二
console.log(result)