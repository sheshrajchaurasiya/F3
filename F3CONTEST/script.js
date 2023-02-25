

let arr = [];
let idx = 1;
if(arr.length === 0){
    document.getElementById('table').classList.add('hidden');
}
let createBtnEl = document.getElementById("createBtn")

// let saveBtnEl = document.getElementById("saveBtn")
let tableBodyContent = document.getElementById("tableBody")

createBtnEl.addEventListener("click", addRow);
function addRow() { 
    console.log("hello") 
    var table = document.getElementById("tableBody");  
    var rowCount = table.rows.length;  
    var row = table.insertRow(rowCount);  
    //Column 1

    var cell0 = row.insertCell(0);  
    var element0 = document.createElement("input");
    element0.id = "ID"+rowCount
    // element0.type = "text";  
    cell0.appendChild(element0);
    
    var cell1 = row.insertCell(1);  
    var element1 = document.createElement("input");
    element1.id = "studentName"+rowCount
    element1.type = "text";  
    cell1.appendChild(element1);
    
    var cell2    = row.insertCell(2);  
    var element2 = document.createElement("input");
    element2.id = "studentRoll"+rowCount
    element2.type = "number";  
    cell2.appendChild(element2);  

    var cell3 = row.insertCell(3);  
    var element3 = document.createElement("input");
    element3.id = "subject"+rowCount
    element3.type = "text";   
    cell3.appendChild(element3);  

    var cell4  = row.insertCell(4);  
    var element4 = document.createElement("input");
    element4.id = "marks"+rowCount
    element4.type = "number";  
    cell4.appendChild(element4);  

    var cell5 = row.insertCell(5);  
    var element5 = document.createElement("input");
    element5.id = "markedBy"+rowCount  
    element5.type = "email";  
    cell5.appendChild(element5);  

    var cell6 = row.insertCell(6);  
    var element6 = document.createElement("button");  
    element6.type = "button";
    element6.name = "save"; 
    element6.id = "saveId"+rowCount
    cell6.appendChild(element6); 
    tableBodyContent.appendChild(row)
    
let saveBtnEl = document.getElementById("saveId0")
console.log("saveBtnEl"+saveBtnEl)
if(saveBtnEl!=null)
saveBtnEl.addEventListener("click",addUserFunction)
}

function addUserFunction(){
    // console.log("addUserFunction")
    let studentNameEl = document.getElementById("studentName"+arr.length)
let studentRollEl = document.getElementById("studentRoll"+arr.length)
let subjectEl = document.getElementById("subject"+arr.length)
let marksEl = document.getElementById("marks"+arr.length)
let markedByEl = document.getElementById("markedBy"+arr.length)
    let student = studentNameEl.value;
    let studentRoll = studentRollEl.value;
    let subject = subjectEl.value;
    let marks = marksEl.value;
    let markedBy = markedByEl.value;
    document.getElementById('table').classList.remove('hidden');

    let objEl = {
        id: idx++,
        Student: student,
        StudentRoll: studentRoll,
        Subject: subject,
        Marks: marks,
        MarkedBy: markedBy
    }
    arr.push(objEl)
    renderDataInTheTable(new Array(arr[arr.length-1]))

}