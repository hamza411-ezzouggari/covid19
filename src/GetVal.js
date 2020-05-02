async function GetVal(Select){
    var API="https://covid19.mathdro.id/api/countries/"+Select;
    if(Select==''){
      API="https://covid19.mathdro.id/api/"
    }

    console.log('GETVAL STARTED WITH LINK '+API)
    let res= await fetch(API) .then((y) =>{return y.json()}) .then((a) =>{
        console.log('GETVAL GOT DATA ')
        console.log(a)
        if(a.hasOwnProperty('confirmed')){
            return a
        }else{
            return null;
        }
    }).catch((error)=>{
        console.log('GETVAL DIDCATCH ERROR ')
        console.log(error)
        return null;
    })
    return res;
}
export default GetVal