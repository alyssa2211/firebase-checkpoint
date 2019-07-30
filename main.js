// firebase 
document.querySelector("#feedbox").addEventListener("submit" , function(e)
{
e.preventDefault()
submitProduct()
 })

var firebaseConfig = {
        apiKey: "AIzaSyAaNk3u5jqUgkUHcIFNskDRnWWaM5dhIJE",
        authDomain: "fir-checkpoint-2ed96.firebaseapp.com",
        databaseURL: "https://fir-checkpoint-2ed96.firebaseio.com",
        projectId: "fir-checkpoint-2ed96",
        storageBucket: "",
        messagingSenderId: "88177024383",
        appId: "1:88177024383:web:40dc7bc3a4d8d132"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// 1/inport firebase labraries and apikey done ! 

// 2/ create database variable

let database = firebase.database()

function submitProduct(){

// 3/ set a reference

let ref = database.ref("course/"+document.querySelector("#course").value)

  // 4/ prepare data 
        let data= {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            number: document.querySelector("#number").value,
            school: document.querySelector("#school").value,
            course: document.querySelector("#course").value
        }

  //5/ upload data (push/set)

    ref.push(data)
}



