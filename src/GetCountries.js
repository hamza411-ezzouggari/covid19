async function GetCountries(){
    const API="https://covid19.mathdro.id/api/countries";
    let res= await fetch(API) .then((x) =>{return x.json()})
    .then((c) =>{
        if(c.hasOwnProperty('countries')){
            return c.countries;
        }else{
            return null;
        } 
}).catch((error)=>{
    return null;
})
console.log (res)
return res;
}
export default GetCountries