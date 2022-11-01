/*
Query style 
$("#someEl").click(function() {....})
*/

var wakeUp = (callback) => {
    console.log("I'm waking up!");
    if(callback)
    if(typeof callback === 'function')
        callback();
};

var checkPhone = (callback) => {
    console.log('Checking Phone!');
    if(callback)
    if(typeof callback === 'function')
        callback();
};

var eatBreakfast = (callback) => {
    console.log("I'am eating Breakfast!")
    if(callback)
    if(typeof callback === 'function')
        callback();
};

// Bad! sychronous way (Xấu! cách đồng bộ)
// wakeUp();
// checkPhone();
// eatBreakfast();

wakeUp(()=>{
    checkPhone(()=>{
        eatBreakfast();
    })
})