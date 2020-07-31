     
     
// Log in Button Events 

    const logInButton = document.getElementById("logIn") ;
        logInButton.addEventListener("click" , function () {
            const logInArea = document.getElementById("login-area");
            logInArea.style.display="none";
            const secondPage = document.getElementById("second-page");
            secondPage.style.display="block";
            alert("yay ! You Have got $1200 at your Balance . Enjoy wasting money OR saving some ")
        
        })

        

// LogOut button Events  
     const logOutButton = document.getElementById("logOut") ;
     logOutButton.addEventListener("click", function(){
         const secondPage = document.getElementById("second-page");
         secondPage.style.display= "none";
         const logInArea = document.getElementById("login-area");
         logInArea.style.display = "block"
     })


//  Money amount grabber 

    // let currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText) ;
    //  let currentWithdraw = parseFloat(document.getElementById('currentWithdraw').innerText) ;
    //  let currentBalance = parseFloat(document. getElementById('currentBalance').innerText) ;     


     
// deposit button events

     const depositInput = document.getElementById("depositInput");
     const depositButton = document.getElementById("depositButton");
     
     depositButton.addEventListener("click",function(){
        let currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText)
         let grabDeposit = (parseFloat(depositInput.value))
        const updateDeposit = currentDeposit + grabDeposit ;
        document.getElementById('currentDeposit').innerText = updateDeposit
        depositInput.value = "";
        let currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
        const updateBalance = currentBalance + grabDeposit ;
        document.getElementById('currentBalance').innerText = updateBalance
     })
     

// withdraw Button events

     const withdrawInput = document.getElementById("withdrawInput")
     const withdrawButton = document.getElementById("withdrawButton")

     withdrawButton.addEventListener("click",function(){
        let currentWithdraw = parseFloat(document.getElementById('currentWithdraw').innerText) ;
        let grabWithdraw = (parseFloat(withdrawInput.value))
        const updateWithdraw = currentWithdraw + grabWithdraw ;
        document.getElementById('currentWithdraw').innerText = updateWithdraw;
        withdrawInput.value="";
        let currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
        const updateBalance = currentBalance - grabWithdraw ;
        document.getElementById('currentBalance').innerText = updateBalance

     })







    
    