function getDetails(){
    const country=document.getElementById("countryName").value;
    const url='https://api.covid19api.com/live/country/'+country;
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then(data=>{
        table=document.createElement("TABLE");
        table.border="1";
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell4=row.insertCell(-1);
        cell5=row.insertCell(-1);
        cell1.innerHTML="DATE";
        cell2.innerHTML="STATE"
        cell3.innerHTML="ACTIVE";
        cell4.innerHTML="DEATHS";
        cell5.innerHTML="RECOVERED";
        console.log(result.list);
        data.forEach((lis) => {
            row=table.insertRow(-1);
            cell1=row.insertCell(-1);
            cell2=row.insertCell(-1);
            cell3=row.insertCell(-1);
            cell4=row.insertCell(-1);
            cell4=row.insertCell(-1);
            cell1.innerHTML=lis.Date;
            cell2.innerHTML=lis.Province;
            cell3.innerHTML=lis.Active;
            cell4.innerHTML=lis.Deaths;
            cell5.innerHTML=lis.Recovered;
        })
        var divtab=document.getElementById("result");
        divtab.append(table);
    })
}