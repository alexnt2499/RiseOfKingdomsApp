export default TalentsSchema = {
    name : 'talents',
    primaryKey : 'id',
    properties : {
        id : {type : 'int', indexed : true},
        image : {type : 'string'},
        title : {type : 'string'},
        sub : {type : 'string'},
        date : {type : 'string'}
    }
}