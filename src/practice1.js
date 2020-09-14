const parseData = ({data,column}) =>{
    let [{ name: name},{ name: age },{ name: gender },{ name: birthday}] = column;
    let result = []
    data.map(value => {let [nameValue, ageValue, genderValue, birthdayValue] = value;
        let unit = {name:nameValue,age:ageValue,gender:genderValue,birthday:birthdayValue};
        result.push(unit)});
    return result;
}
export { parseData };