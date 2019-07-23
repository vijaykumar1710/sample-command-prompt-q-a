const prompts = require('readline').createInterface(process.stdin, process.stdout);

var userdetails={};
let specsflow = require('./bot.js');
    
function intro(){
    prompts.question("Hello. Enter your name:\n",function(user_name){
        prompts.question("Enter Your Mobile No.? \n", function(mobile) {
        prompts.question("For what type of hospital do you need Patient Monitoring System(PMS),"+user_name+"?\n1.Tier-1 hospital(4 or more beds in ICU)\n2.Tier-2 hospital(less than 4 beds in ICU)\n3.Nursing Home or Clinic\nEnter your option:",function(user_type){
            userdetails["number"]=mobile;
            userdetails["user_type"] = user_type;
            if(user_type==1){
                console.log("tier-1 hospital");
                prompts.pause(); 
            }
            else if (user_type==2||user_type==3){
                prompts.question("These are the devices available for you:\n1.Medium Acuity(Efficia Series products - When both budget and quality matter)\n2.Low Acuity(GW Series products - cost-effective, easy to use, and easy to support patient monitor)\nEnter your option:",function(acuity){
                    
                    product["acuity"]=acuityType(acuity);
                    prompts.pause();
                    if (acuity==1){
                        specsflow.specEfficia();
                    }
                    else if (acuity==2){
                        specsflow.specGW();
                    }
                    
                    process.exit;
                });
            }

        });
    });
    
    });

}
intro();
