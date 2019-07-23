let searchAll = require('./search');
let compare = require('./compare');

var json = fetch('products.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

console.log(json);

var product= { };
var userdetails={ };
const prompts = require('readline').createInterface(process.stdin, process.stdout);

module.exports = {
    specEfficia : function(){  

    prompts.resume();
      prompts.question("Do you want a PMS with:\n1.Touch\n2.Non-touch\nEnter your option:", function(screen_type) {
          if (screen_type==1){
                prompts.question("What is your preferred screen size?\n1. 7 inch\n2. 12 inch\n3. 15 inch\nEnter your option:", function(screen_size) {  
                    prompts.question("Basic features available are "+ product['basic_features'] +"\nDo you need any extra add-on: \n1.SpO2\n2.Invasive Blood pressure\n3.ECG\n4.All the above\n5.None\nEnter your option:", function(addon) {  
                          
                            product["screen_type"]=module.exports.screenType(screen_type);
                            product["screen_size"]=module.exports.touch_screenSize(screen_size);
                            product["basic_features"]=d;
                            product["add_ons"]=module.exports.addontype(addon);
                            console.log(product);
                            console.log(userdetails);  
                            compare.callfuntionCompre(products,product); 
                            process.exit(); 
                             
                            }); 
                            
                    });  
            }
            else if (screen_type==2){
                prompts.question("What is your preferred screen size?\n1. 7 inch\n2. 12 inch\n", function(screen_size) {  
                    prompts.question("Do you need any extra add-on: \n1.SpO2\n2.Invasive Blood pressure\n3.ECG\n4.All the above\n5.None\n ", function(addon) {  
                          
                            product["screen_type"]=module.exports.screenType(screen_type);
                            product["screen_size"]=module.exports.non_touch_screenSize(screen_size);
                            product["basic_features"]=d;
                            product["add_ons"]=module.exports.addontype(addon);
                            
                            console.log(product); 
                            console.log(userdetails);
                            compare.callfuntionCompre(products,product);  
                            process.exit(); 
                             
                            
                            });  
                    });  
              

            }
     
    });  
    },

    specGW : function(){

        prompts.resume();
      prompts.question("Do you want a PMS with:\n1.Touch\n2.Non-touch\nEnter your option:", function(screen_type) {
          if (screen_type==1){
                prompts.question("What is your preferred screen size?\n1. 7 inch\n2. 12 inch\n3. 15 inch\nEnter your option:", function(screen_size) {  
                     
                            product["screen_type"]=module.exports.screenType(screen_type);
                            product["screen_size"]=module.exports.touch_screenSize(screen_size);
                            product["basic_features"]=d;
                            console.log(product);
                            console.log(userdetailes);  
                            process.exit(); 
                             
                            });  
            }
            else if (screen_type==2){
                prompts.question("What is your preferred screen size?\n1. 7 inch\n2. 12 inch\n", function(screen_size) {  
                         
                            product["screen_type"]=module.exports.screenType(screen_type);
                            product["screen_size"]=module.exports.non_touch_screenSize(screen_size);
                            product["basic_features"]=d;
                            userdetails["number"]=mobile;
                            console.log(product);
                            console.log(userdetailes); 
                            process.exit(); 
                         
                            });   
              

            }
     
    }); 
     
    },

    intro : function(){
        
        prompts.question("Hello. Enter your name:\n",function(user_name){
            prompts.question("For what type of hospital do you need Patient Monitoring System(PMS),"+user_name+"?\n1.Tier-1 hospital(4 or more beds in ICU)\n2.Tier-2 hospital(less than 4 beds in ICU)\n3.Nursing Home or Clinic\nEnter your option:",function(user_type){
                userdetails["user_type"] = user_type;
                if(user_type==1){
                    console.log("tier-1 hospital");
                    prompts.pause(); 
                }
                else if (user_type==2||user_type==3){
                    prompts.question("These are the devices available for you:\n1.Medium Acuity(Efficia Series products - When both budget and quality matter)\n2.Low Acuity(GW Series products - cost-effective, easy to use, and easy to support patient monitor)\nEnter your option:",function(acuity){
                        
                        product["acuity"]=module.exports.acuityType(acuity);
                        prompts.pause();
                        if (acuity==1){
                            module.exports.specEfficia();
                        }
                        else if (acuity==2){
                            module.exports.specGW();
                        }
                        
                        process.exit;
                    });
                }
    
            });
            
    
    
        });
    },

    acuityType : function(option){
        
            switch(option){
                case '1':
                    return "mid_range";
                case '2':
                    return "low_range";
            }
        
    
    },

    screenType : function(option){
        switch(option){
            case '1':
                return "touch_screen";
            case '2':
                return "non_touch_screen";
        }
    },

    touch_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            case '3':
                return "15_inch";
        }
        
    },
    non_touch_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            
        }
        
    },

    addontype : function(selected_option){
        switch(selected_option){
            case '1':
                return "SpO2";
            case '2':
                return "Invasive Blood pressure";
            case '3':
                return "ECG";
            case '4' :
                return "[invasive_bp,ecg,co2]";
            case '5':
                return "None"
        }
    }
}

let specsflow = require('./bot.js');
//specsflow.intro();