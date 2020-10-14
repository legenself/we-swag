function getPath(path){
    var items=path.split("/");
    return items[3]
}

module.exports=function(data){
    var schemas=data.components.schemas;
    for(var key in schemas){
        var required=schemas[key].required;
        var senum=schemas[key].enum;
        schemas[key].enum=JSON.stringify(senum)
        for(var property in schemas[key].properties){
            if(schemas[key].properties[property].$ref){
                if(schemas[key].properties[property].$ref){
                    schemas[key].properties[property].type='object'
                    schemas[key].properties[property].schema=getPath(schemas[key].properties[property].$ref)
                }
                delete schemas[key].properties[property].$ref
                continue
            }
 

            if(required&&required.indexOf(property)>-1){
                schemas[key].properties[property].required=true
               
            }

        }
    }
  
    return data
}
