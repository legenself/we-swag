//3.0.1
//通过we-swag生成


//Memo
const Memo={
    type:'object',
    description:'消息',
    properties:{  
            id:{
                type:"integer", 
                description:"消息id",format:'int32' 
            }, 
            uid:{
                type:"string", 
                description:"消息Uid",format:'uuid' 
            }, 
            createAt:{
                type:"string", 
                description:"消息创建时间",format:'date-time' 
            }, 
            content:{
                type:"string", 
                description:"消息内容" 
            }, 
            userUid:{
                type:"string", 
                description:"消息的发送人",format:'uuid' 
            }, 
            publich:{
                type:"boolean", 
                description:"消息是否公开" 
            }, 
    } 
}
//typee
const typee={
    type:'string',
    enum:["typea","typeb"],
}
//subInput
const subInput={
    type:'object',
    properties:{  
            name:{
                type:"string", 
                description:"名称" ,maxLength:15
            }, 
            age:{
                type:"number", 
                description:"年龄",format:'double' ,minimum:0,maximum:120
            }, 
            height:{
                type:"number", 
                description:"",format:'double' ,minimum:0
            }, 
            tt:{
                type:"object",schema:typee, 
                description:"" 
            }, 
    } 
}
//ComplexInput
const ComplexInput={
    type:'object',
    description:'测试复杂输入',
    properties:{  
            name:{
                type:"string", 
                description:"名称" ,maxLength:15
            }, 
            age:{
                type:"number", 
                description:"年龄",format:'double' ,minimum:0,maximum:120
            }, 
            height:{
                type:"number", 
                description:"高度",format:'double' ,minimum:0
            }, 
            coop:{
                type:"object",schema:subInput, 
                description:"" 
            }, 
    } 
}
//User
const User={
    type:'object',
    description:'用户信息表',
    properties:{  
            id:{
                type:"integer", 
                description:"用户自增id",format:'int32' 
            }, 
            uid:{
                type:"string", 
                description:"用户Uid",format:'uuid' 
            }, 
            account:{
                type:"string", 
                description:"用户账户" 
            }, 
            password:{
                type:"string", 
                description:"用户密码" 
            }, 
    } 
}
//WeatherForecast
const WeatherForecast={
    type:'object',
    properties:{  
            date:{
                type:"string", 
                description:"",format:'date-time' 
            }, 
            temperatureC:{
                type:"integer", 
                description:"",format:'int32' 
            }, 
            temperatureF:{
                type:"integer", 
                description:"",format:'int32' 
            }, 
            summary:{
                type:"string", 
                description:"" 
            }, 
    } 
}

export  {
    Memo,typee,subInput,ComplexInput,User,WeatherForecast,
}
