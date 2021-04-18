function getDetails(){
    var request=new XMLHttpRequest();
    var userName=document.getElementById("username").value;
    var url='https://api.github.com/users/'+userName+'/repos';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        console.log(result);
        table=document.createElement("TABLE");
        table.border="1";
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell1.innerHTML="USERNAME";
        cell2.innerHTML="REPOSITORY"
        cell3.innerHTML="DESCRIPTION";
        console.log(result.list);
        result.forEach((data) => {
            row=table.insertRow(-1);
            cell1=row.insertCell(-1);
            cell2=row.insertCell(-1);
            cell3=row.insertCell(-1);
            cell1.innerHTML=data.owner.login;
            cell2.innerHTML=data.name;
            cell3.innerHTML=data.description;
        });
        var divtab=document.getElementById("result");
        divtab.append(table);
    }
    request.send();
}