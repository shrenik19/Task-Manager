const sgmail = require('@sendgrid/mail');

//if dev runs correct then we should delete this line
const sendgridAPIKey = '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';

//if dev runs correct then we should write instead of below this line
//sgmail.setApiKey(process.env.SENDGRID_API_KEY);
sgmail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) =>{
    sgmail.send({
        to: email,
        from: 'shrenik19.sd@gmail.com',
        subject: `Welcome ${name}`,
        text: `Welcome to the app, ${name}. Let me know you get along with the app.`
    });
};

const sendCancelationEmail = (email,name) =>{
    sgmail.send({
        to: email,
        from: 'shrenik19.sd@gmail.com',
        subject: `Cancelation for ${name}'s account`,
        text: `As per you request your account has been canceled ${name}. Hope to see you again in future.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};