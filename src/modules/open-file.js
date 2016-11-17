const {dialog} = window.require('electron').remote
const fs = window.require('fs');

function itemsSize(sales) {
  let acc = 0;
  for (let s of sales) {
    acc += s.items.length;
  }
  return acc;
}


export default function() {
    return new Promise(
        function(resolve,reject){
            dialog.showOpenDialog({
                title: 'Open sales file',
                filters: [{name: 'Sales JSON file', extensions: ['json']}],
                properties: ['openFile']
            }, function(fileNames){
                if (fileNames === undefined){
                    reject('No file selected');
                }else{
                    console.log(fileNames);
                    const path = fileNames[0];
                    const name = path.match(/(\w|[-.])+$/i);
                    fs.readFile(path, 'utf-8', function(err, data){
                        if (err){
                            reject(err);
                        }else{
                            const sales = JSON.parse(data);
                            resolve({
                              'sales' : sales,
                              'size' : sales.length,
                              'itemsSize' : itemsSize(sales),
                              'name': name[0],
                              });
                        }
                    })
                }
            })
        }
    )
};
