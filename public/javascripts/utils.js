var AgentInfo = "agentInfo";
var UserInfo = "userInfo";
var UserAccountInfo = "userAccountInfo";
var PolicyCategoryInfo = "policyCategoryInfo";
var PolicyCarrierInfo = "policyCarrierInfo";



var setStorageData = function (key, value) {
    //console.log("setting key="+key+", value="+ value);
    sessionStorage.setItem(key, value);
};

var getStorageData = function (key) {
    //console.log("getting key="+key);
    return sessionStorage.getItem(key);
};