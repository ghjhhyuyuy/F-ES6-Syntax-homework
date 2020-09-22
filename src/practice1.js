const parseData = ({data,column}) =>{
    // TODO 这里column的长度，key在哪一位不是确定的，后端的返回可能有变化，应该是采用index匹配key-value的形式而不是写死
    let [{ name: name},{ name: age },{ name: gender },{ name: birthday}] = column;
    let result = []
    // TODO 使用map做数组与数组的转化，不用声明新数组
    // TODO 注意换行
    data.map(value => {let [nameValue, ageValue, genderValue, birthdayValue] = value;
        // TODO 这里可以使用对象的简洁表示法
        let unit = {name:nameValue,age:ageValue,gender:genderValue,birthday:birthdayValue};
        result.push(unit)});
    return result;
}
export { parseData };