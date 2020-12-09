function TestClass (className) {
    var testElement = document.getElementById("mainNav").classList.contains(className);

    if(testElement == true){
        return true; 
    } else {
        return false; 
    }
};

TestClass("true");




