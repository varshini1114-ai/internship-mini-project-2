async function login(){

    const pin =
        document
        .getElementById("pin")
        .value;

    const response =
        await fetch(
            "http://localhost:5000/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify({
                    pin
                })
            }
        );

    const data =
        await response.json();

    if(data.success){

        document
        .getElementById("loginPage")
        .style.display = "none";

        document
        .getElementById("diaryPage")
        .style.display = "block";

    }else{

        alert("Wrong PIN");
    }
}

function format(command){

    document.execCommand(command);
}

async function saveEntry(){

    const date =
        document
        .getElementById("date")
        .value;

    const content =
        document
        .getElementById("editor")
        .innerHTML;

    await fetch(
        "http://localhost:5000/entries",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify({
                date,
                content
            })
        }
    );

    alert(
        "Entry Saved Successfully"
    );
}