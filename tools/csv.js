
export function CSVToObject( strData, strDelimiter ){
    const array = CSVToArray( strData, strDelimiter  )
    const [ keys ] = array.splice(0,1);
    const keysObjects = keys.map(key=>key.substr(0,1).toLowerCase()+key.substr(1));
    //console.log('keysObjects',keysObjects);
    
    return array.map(rowArray=>{
        const rowObject = {};
        let isEmpty = true;
        for(let i=0,l=rowArray.length;i<l;i++){

            let value = rowArray[i];

            if(value==='')value=null
            else if(!isNaN(parseFloat(value)))value=parseFloat(value)
            else if(value.toLowerCase()==='true')value=true
            else if(value.toLowerCase()==='false')value=false
            
            rowObject[keysObjects[i]] = value;

            if(value)isEmpty=false;
        }
        if(isEmpty)return null
        return rowObject;
    }).filter(row=>row)
}

export function CSVToArray( strData, strDelimiter = "," ){

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
}