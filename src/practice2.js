const inject = (items,sections) =>{
    let indexBefore = 0;
    sections.map(section => {let { content: value, index: index } = section;
        if(index>indexBefore){
            items.splice(index+1,0,value);
            indexBefore = index;
        }else{
            items.splice(index,0,value);
        }})
    return items;
}
export { inject };
