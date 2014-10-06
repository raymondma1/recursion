// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
var getElementsByClassName = function (className) {
    // your code here
    //You should use document.body, element.childNodes, and element.classList
    var returnArr = [];
    var search = function (element) {
        //check if elements has class 
        if (element.classList !== undefined && element.classList.contains(className)) {
            returnArr.push(element);
        }
        //goes through child nodes
        if (element.childNodes.length > 0) {
            for (var i = 0; i < element.childNodes.length; i++) {
                search(element.childNodes[i]);
            }
        }

    }
    search(document.body);
    return returnArr;
};
