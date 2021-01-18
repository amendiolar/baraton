export default function () {
    const token = window.localStorage.getItem('token');
    console.log(token)
    if(token){
        // eslint-disable-next-line no-unused-vars
        const [header, payload, signature] = token.split('.')
        const base64 = payload.replace('-','+').replace('_','/');
        const payloadObject = JSON.parse(window.atob(base64));
        console.log(payloadObject)
        return payloadObject
    }else{
        return null;
    }
}