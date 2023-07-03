const URL ='http://localhost:3001'


const serverError = 'Sorry, unable to process your request.Please try later'

function formatMoney(amount,currency) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: currency });
}

function formatMoneyWithoutCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

 const token = sessionStorage.getItem("token")
 const key = sessionStorage.getItem("key");


const BearerToken = {

        'Authorization':'Bearer ' + token,
        'x-afs-pub-key' :key            
  }


export default {
    BaseUrl : URL,
    serverError : serverError,
    formatMoney : formatMoney,
    metadata : BearerToken, 
    formatMoneyWithoutCurrency : formatMoneyWithoutCurrency
}