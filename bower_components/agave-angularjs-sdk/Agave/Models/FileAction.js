/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function FileAction() {
    this.action = undefined
    this.path = undefined

}

//Make instanceof work


/**
 *Action to perform on the file or folder.
 *
 * @return: FileManagementActionTypeEnum
 */
FileAction.prototype.getAction = function () {

    return this.action;
}


FileAction.prototype.setAction = function (value) {
    this.action = value;
}


/**
 *Name of new directory or target file or folder.
 *
 * @return: string
 */
FileAction.prototype.getPath = function () {

    return this.path;
}


FileAction.prototype.setPath = function (value) {
    this.path = value;
}
     




