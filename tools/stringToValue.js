export function stringToValue(stringValue){
    if(stringValue==='')return null
    if(/^\-?\d+(\.\d+)?$/g.test(stringValue))return parseFloat(stringValue)
    if(/^\d{4}\-\d{1,2}\-\d{1,2}$/g.test(stringValue))return new Date(stringValue)
    if(stringValue.toLowerCase()==='true')return true
    if(stringValue.toLowerCase()==='false')return false

    return stringValue;
}

export function valueToDate(value){
    if(value instanceof Date)return value;
    if(typeof value === 'number')return new Date(`${value}-12-31`);
    throw new Error(`First parameter of valueToDate must be Date or number.`);
}