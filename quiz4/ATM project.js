import * as time from 'time';
import * as datetime from 'datetime';
var ATM_ACC, ATM_Bal, ATM_Password, Amount, Date, Option;
ATM_Bal = 1000;
ATM_ACC = Number.parseInt(input("Enter your account number: "));
ATM_Password = input("Enter your password: ");
console.log("Login successful");
time.sleep(2);
console.log("Welcome to ADB bank. Select the transaction you will like to do: /n", "1.Check Balance /n", "2.Top Up account /n", "3.Withdraw Cash /n", "4. Exit");
Option = Number.parseInt(input("Select your Transaction: "));

if (Option === 1) {
  console.log("Your account balance is ", ATM_Bal);
} else {
  if (Option === 2) {
    console.log("To Topup account, go to paybill Mpesa till 342342,  enter your account number, amount then pin and send");
  } else {
    if (Option === 3) {
      Amount = Number.parseFloat(input("How much will you like to withdraw: "));

      if (Amount > ATM_Bal) {
        console.log("Insuffucient funds to withdraw. Your account balance is", ATM_Bal);
      } else {
        console.log("Succesful withdraw of amount: ", Amount);
      }
    } else {
      if (Option === 4) {
        Date = datetime.date.today();
        console.log(" Exit successful", Date);
      }
    }
  }
}
