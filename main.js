var inputs=[];


function get_para_1()
{
    for(i=1 ;i<=6;i++)
    {
    inputs.push(document.getElementById("input_box_"+i).value);
    }
    document.getElementById("show_para_1").innerHTML=inputs.join(",");
}
function get_para_2()
{
    for(i=1 ;i<=6;i++)
    {
    inputs.push(document.getElementById("para_input_box_"+i).value);
    }
    document.getElementById("show_para_2").innerHTML=inputs.join(". ");
}