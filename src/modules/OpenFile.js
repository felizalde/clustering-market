'use strict';

const {dialog} = window.require('electron').remote

const openFile = () => {
 dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}, function(fileNames){
     console.log(fileNames);
 })
}

export default openFile;
