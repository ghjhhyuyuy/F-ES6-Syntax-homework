const inject = (items,sections) =>{
    // TODO 未使用的变量 indexBefore
    let indexBefore = 0;
    let i = 0;
    // TODO 注意换行与缩进
    // TODO 不是map的使用场景，且map/forEach内函数第二个参数就是index，不用重新声明i
    sections.sort((a,b) => a.index - b.index).map(section => {let { content: value, index: index } = section;
        items.splice(index+i,0,value);
        i++;
    })
    return items;
}
export { inject };
