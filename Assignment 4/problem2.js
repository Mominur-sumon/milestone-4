

function sendNotification(email) {
    if(email.indexOf('@')===-1){
        return  "Invalid Email";
    }
    
    const emailParts = email.split('@');
    const username = emailParts[0];
    const domain = emailParts[1];
    return `${username} sent you an email from ${domain}`;
}

let email = 'farhan34@yahoo.com';
email  = "nadim.naem5@outlook.com" ;
email = 'fahim234.hotmail.com';
email = 'sadia8icloud.com';
const msg = sendNotification(email);
console.log(msg);
