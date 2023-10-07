import { Journal } from './journal.js';
import  {Customer }  from "./customer.js";

let customerName = document.getElementById("customerName");
let customerNumber = document.getElementById("customerNumber");
let quantity = document.getElementById("quantity");
let productType = document.getElementById("productType");
let  currentDate = new Date();
let customers = [];
let price = 0;

const journal = new Journal();

window.onload = function(){
    document.getElementById("submit").onclick = submitting();
}



function submitting(){
    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        // Get values from the form
        const customerName = document.getElementById("customerName").value;
        const customerNumber = document.getElementById("customerNumber").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const productType = document.getElementById("productType").value;

         // Get the current date and time
         const currentDate = new Date();
         const formattedDate = currentDate.toLocaleString(); // Format as a string

        // Set the Price value in the form if product type is bricks else R300 * quantity
        if(productType == "brick"){
            document.getElementById("Price").value = quantity*7;
            price = quantity*7;
        }else{
            document.getElementById("Price").value = 300 * quantity;
            price = 300 * quantity;
        }
        
        // Set the date and time value in the form
        document.getElementById("dateTime").value = formattedDate;

        // create customer
        createCustomer(0, customerName, customerNumber);
    
        // You can now use these values as needed, e.g., send them to a server, process, or display them.
        console.log("Customer Name:", customerName);
        console.log("Customer Number:", customerNumber);
        console.log("Quantity:", quantity);
        console.log("Product Type:", productType);
        console.log("Date and Time:", formattedDate);
        console.log()

        recordTransaction(formattedDate, productType, quantity,price)
        printTransactions()
    });
}

function createCustomer(id, name, cellnumber){
    const customer = new Customer(id, name, cellnumber);
    customers.push(customer);
}

function recordTransaction(date, account, quantity,price ){
    
    journal.addEntry(date, account, quantity, price)
}

function printTransactions(){
    journal.printJournal();
}