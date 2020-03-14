export default SheduleSchema = {
  
        name : 'shedules',
        primaryKey : 'id',
        properties : {
            id : {type : 'int', indexed : true},
            note : {type : 'string'},
            topic : {type : 'int'},
            date : {type : 'int'},
            checkUTC : {type : 'bool'}
        }
    

}