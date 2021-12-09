function checklength(name, reg){
    if(name.length > reg.length){
        return name.length - reg.length;
    }else{
        return reg.length - name.length;
    }
}

function clicked() {
    let Reg = document.getElementById("SReg").value; 
    let Name = document.getElementById("SName").value;

    let regNumber = Reg.substring(0, 5);
    console.log(regNumber);
    
    if(regNumber < 0) {alert("Invalid Registration Number");}

    // In case if Reg number is Odd
    if(regNumber % 2 != 0){

        alert("Adding SIBLING node, As Reg Number is Odd");
                    
        // generate a sibling node id
        var index = 0;
        var target = document.getElementById("container");

        while(regNumber[index] != undefined && Name[index] != undefined){

        // Getting character of regNumber at specific index
        var reg = regNumber[index];

        // Getting character of Name at specific index
        var name = Name[index];

        var idOfNewPara = reg + name;
        console.log(idOfNewPara);

        index++;

        //add a sibling node
        let paraNumber = index + 1;

        let newParagraph='<p id="'+idOfNewPara+'" class="paragraph">Paragraph : "'+paraNumber+'"<br>Paragraph id is : "'+idOfNewPara+'"</p>';
        target.insertAdjacentHTML("beforeend",newParagraph);
        }

        //check the remaining charcters if none then print "No More nodes can be Added"
        if(checklength(Name, regNumber) == 0)
        {
            let EndParagraph='<p class="paragraph">No more Nodes can be Added</p>';
            target.insertAdjacentHTML("beforeend", EndParagraph);
        }
        else{
            let EndParagraph='<p class="paragraph">Cannot form more Pairs, Hence No more Nodes can be added</p>';
            target.insertAdjacentHTML("beforeend", EndParagraph);
        }
    }
    
    // In case if Reg number is Even
    else{
        alert("Adding CHILD node, As Reg Number is Even");
        //generate a child node id
        var index = 0;
        var target = document.getElementById("para");

        while(regNumber[index] != undefined && Name[index] != undefined){

        var reg = regNumber[index];
        var name = Name[index];
        var idOfNewPara = reg + name;
        console.log(idOfNewPara);
        
        index++;

        //add a child node     
        let paraNumber = "item" + index;
        var newElement = document.createElement("p");
        newElement.className = "paragraph";
        var newText = document.createTextNode("["+paraNumber+"]"+'Paragraph id is : '+idOfNewPara+'');
        newElement.appendChild(newText);
        target.appendChild(newElement);
        }

        //check the remaining charcters if none then print "No More nodes can be Added"
        if(checklength(Name, regNumber)==0)
        {
            let EndParagraph = '<p class="paragraph">No more Nodes can be Added</p>';
            target.insertAdjacentHTML("beforeend", EndParagraph);
        }
        else{
            let EndParagraph = '<p class="paragraph">Cannot form more Pairs, Hence No more Nodes can be added</p>';
            target.insertAdjacentHTML("beforeend", EndParagraph);
        }
    }


}