

function spy(){
    return 10 + 2;
}


function receivesAFunction(spy){
    spy();
}


function returnsANamedFunction(){
    return spy;
}

function returnsAnAnonymousFunction(){
    return function() {
        10 + 2
    }
}