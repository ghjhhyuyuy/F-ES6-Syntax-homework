const inject = (items,sections) =>{
    let indexBefore = 0;
    let i = 0;
    sections.sort((a,b) => a.index - b.index).map(section => {let { content: value, index: index } = section;
        items.splice(index+i,0,value);
        i++;
    })
    return items;
}
export { inject };
