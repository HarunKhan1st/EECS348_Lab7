function change_color(text_id, text_id2, text_id3)
{
    let color_text = document.getElementById(text_id).value;
    let color_text2 = document.getElementById(text_id2).value;
    let color_text3 = document.getElementById(text_id3).value;
    document.getElementById("Change_Me").style.color = "rgb("+color_text+", " +color_text2 +", " + color_text3 + ")"; 
}

function change_border(text_id, text_id2, text_id3)
{
    let color_border = document.getElementById(text_id).value;
    let color_border2 = document.getElementById(text_id2).value;
    let color_border3 = document.getElementById(text_id3).value;
	document.getElementById("Change_Me").style.borderColor = "rgb("+color_border+", " +color_border2 +", " + color_border3 + ")";
}

function change_border_size(text_id)
{
    let color_border_size = document.getElementById(text_id).value;
    if (color_border_size < 40)
        {document.getElementById("Change_Me").style.borderWidth = color_border_size + "px";}
    else
    {
        document.getElementById("Change_Me").style.borderWidth = "40px";
    }
}
