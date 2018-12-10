/**
 * 队列，（元素先进先出即为队列）
 */
class Queue{
    constructor(){
        this.storage = []   //存储元素
    }
    /**
     * 添加元素
     */
    add(el){
        this.storage.push(el)
    }
    /**
     * 移除
     */
    remove(el){
      return  this.storage.shift()
    }
    /**
     * 判断是否存在元素，存在返回false,否则返回true
     */
    isEmpty(){
        return this.storage.length === 0
    }
    /**
     * 返回大小
     */
    size(){
        return this.storage.length
    }
    /**
     * 返回第一个元素
     */
    front(){
        return this.storage[0]
    }
    /** 
     * 清空
     */
    clear(){
        this.storage = []
    }
}


/**
 * 优先队列（现实中的例子是医院的（急诊科）候诊室。医生会优先处理病情比较严重的患者）
 * 逻辑：设置优先级(级别越高越靠前)，然后在正确的位置添加元素(另一种逻辑用入列操作添加元素，然后按照优先级移除它们)
 *  */
class PriorityQueue{
    constructor(){
        this.storage = []
        
    }
    /**
     * @param {*} el  元素
     * @param {Number} Priority  优先级别,默认为0
     */
    add(el,Priority=0){
        const queueElement = {el,Priority}   //创建元素
        if(this.isEmpty()){
            this.storage.push(queueElement)
        }else{
           let isAdd = false  //判断是否储存了元素
           for(let i in this.storage){
               //判断元素的级别是否大于存储的级别
                if(queueElement.Priority>this.storage[i].Priority){
                     this.storage.splice(i,0,queueElement)
                     isAdd = true
                     break ; 
                }
           }
           if(!isAdd){    
               this.storage.push(queueElement)
           }

        }
    }
    isEmpty(){
        return this.storage.length === 0
    }
}

const p = new PriorityQueue()
p.add(1,1)
p.add(3,3)
p.add(2,2)
console.log(p.storage)

/**
 * 循环队列(循环队列的一个例子就是击鼓传花游戏。在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，
 * 这个时候花在谁手里，谁就退出圆圈结束游戏。重复这个过程，直到只剩一个孩子（胜者）)
 * 逻辑原理：队列首项移除，末尾再添加首项（设置移动次数，移除首项，重复全部逻辑，直到剩一个元素为止）
 * @param {*}  queue 队列
 * @param {number} number 移动次数
 */
function loopQueue(queue,number){
    let count = 0  //计数移动次数
    while(queue.size()>1){
        if(count===number){
            console.log('淘汰：'+ queue.remove())
            count = 0
        }else{
            queue.add(queue.remove())
            count ++ ;
        }
    }
    return queue.storage
}
 let queue = new Queue()
 queue.add(1)
 queue.add(2)
 queue.add(3)
 queue.add(4)
 queue.add(5)
 queue.add(6)
 let loop = loopQueue(queue,3)
 console.log(loop)