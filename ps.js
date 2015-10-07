/* Extremely basic use of BP.TF API. Makes it easy to search for items price." */

/* Edit This */
var apiKey = "Put Backpack.tf API key here";
/* End Editing */

var http = require('http');
var fs = require('fs');
getList(){
    //get the shit
    var request = http.get("http://http://backpack.tf/api/IGetPrices/v4/?key=" + apiKey, function(response) {
        pipe(file);
        return file;
    });
}

/* Scan for item from Backpack.tf price list
     Item Name (name of item
 *  Quality Integer (see: https://wiki.teamfortress.com/wiki/WebAPI/GetSchema. and some other shit)
 *  Craftable: ture of false
 *  Note: assumes that item is tradable
 */

scanForItem(var itemName, var qualityInt,  var craftInt, var quality){

    //get item list
    var file = getList();

    //JSON to OBJ
    var textFile = JSON.parse(file);

    //bad response
    if (textFile.response[0] != 1){
        return false;
    }
    //set time pricelist created
    var sn = textFile.response[2];
    //get 
    var file = fs.createWriteStream("sync-" + sn + ".JSON");
    
    //USD value of ref
    var refVal = textFile.response[3];

    //The name of the smallest currency as it appears in the priceindex objects.
    var smallCur = textFile.response[4];

    //The definition index of the smallest currency.
    var smalInx = textFile.response[5];
/* No longer needed, but there jnc     */
    //find item
    //int i = 0;
    //while((textFile.response[6] - 1) => i)){
    
     //   if(textFile.response[6].items[i] = itemName) break;

      //  i++;
   // }  
   // var currency = textFile.response[6].items[i].prices[qualityInt].
    var currency = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.currency;

    var valInCur = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.value;

    var valInCurHigh = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.value_high;
    
    var valRaw = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.value_raw;

    var valRawHigh = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.value_high_raw;

    var lastUpdate = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.last_update;

    var difference = textFile.response.items.itemName.prices.qualityInt.Tradable.Craftable.qualityInt.difference;

    //get date and time
    var d = new Date();
    var curTime = d.getTime();

    var itemIndex[] = [ currency, valInCur, valInCurHigh, valRaw, valRawHigh, lastUpdate, curTime, difference ];

    return itemIndex;
    
}


   
    
    
