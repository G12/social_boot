Meteor.startup(function () {
  //Note: reset less secure on google settings after testing
  //https://www.google.com/settings/u/0/security/lesssecureapps
  process.env.MAIL_URL="smtp://surrealranchhand@gmail.com:48is!okG12@smtp.gmail.com:465/";
  console.log('this is the mail_url: ', process.env.MAIL_URL);
})
