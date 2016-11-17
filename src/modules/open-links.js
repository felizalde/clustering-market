export function OpenLink(url, event){
    var shell = window.require('electron').shell;
    event.preventDefault();
    shell.openExternal(url);
}
