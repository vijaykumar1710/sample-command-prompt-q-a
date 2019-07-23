function searchAll(list,product){
   
   /**  var value = list.filter(function(candidate){
        Object.keys(product).every(key => candidate[key] == product[key] );
    } );
    console.log(value);
    */
    
    for( i =0; i<list.length; i++){
        if(JSON.stringify(product) === JSON.stringify(list[i])){
            console.log(list[i]);
        }else{
            console.log("No matches found.....")
        }
    }
}



module.exports = {callfuntionSearch : searchAll};



/**product= { 
    id:'1',
    name:'efficia_m40', 
    acquity:"mid_range", 
    screen_type:"touch_screen",
    //screen_type:null, 
    screen_size:"12_inch",
    basic_feautures:['oxygen_saturation', 'respiratoy', 'heart_rate','non_invasive_bp','temperature'],
    add_ons:['invasive_bp','ecg','co2'] 
}; 
*/


