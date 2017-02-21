/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

//Request for a file/folder to be moved on the target system. Metadata will be preserved after move.
function FileRenameAction() {
    this.action = "RENAME";
    this.append = false;
}

//Make instanceof work
FileRenameAction.prototype = new FileAction();

FileRenameAction.prototype.constructor = FileRenameAction;



/**
 *New name of the file or folder specified in the URL.
 *
 * @return: string
 */
    FileAction.prototype.getPath = function () {

    return this.path;
}


FileAction.prototype.setPath = function (value) {
    this.path = value;
}





