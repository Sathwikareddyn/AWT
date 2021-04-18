function getWeather(){
    var request=new XMLHttpRequest();
    var city=document.getElementById("city").value;
    var apiKey="b3fb0e85a655087b7836f58113eac8c8";
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        table=document.createElement("TABLE");
        table.border="1";
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell1.innerHTML="DATE";
        cell2.innerHTML="MIN_TEMP"
        cell3.innerHTML="MAX_TEMP";
        console.log(result.list);
        result.list.forEach((data) => {
            row=table.insertRow(-1);
            cell1=row.insertCell(-1);
            cell2=row.insertCell(-1);
            cell3=row.insertCell(-1);
            cell1.innerHTML=data.dt_txt;
            cell2.innerHTML=data.main.temp_min;
            cell3.innerHTML=data.main.temp_max;
        });
        var divtab=document.getElementById("result");
        divtab.append(table);
    }
    request.send();
}
