const {dialog} = window.require('electron').remote
const fs = window.require('fs');

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
                    const path = fileNames[0];
                    fs.readFile(path, 'utf-8', function(err, data){
                        if (err){
                            reject(err);
                        }else{
                            resolve(JSON.parse(data));
                        }
                    })
                }
            })
        }
    )
};
