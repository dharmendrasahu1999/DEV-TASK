const colorPalette = document.querySelector('.palette');
const colorGeneratorBtn = document.querySelector('.btn');
function generateColor()
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor

}
function displayMsg(msg)
{
   let notificationBar= document.querySelector(".notification-cont");
  notificationBar.innerText=msg;
  notificationBar.style.display="block";
  let title = document.querySelector(".title");
  title.style.opacity = "0.5";
  setTimeout(()=>{
    notificationBar.style.display="none";
    title.style.opacity = "1";
  },800)


}
function setBgAndCopyColor(colorCode,colorName)
{
    console.log(colorName);
    console.log(colorCode)

  document.body.style.backgroundColor="#"+colorCode;
   var copyText =colorName.innerText;
  navigator.clipboard.writeText(copyText);
    const msg="Color " + copyText + " copied to your clipboard";
    console.log(msg);
    displayMsg(msg)
}
function generatePalette()
{
    colorPalette.innerHTML = '';
    for(let i=1;i<=5;i++)
    {
        let colorCode= generateColor();
        let outer = document.createElement('div');
        let inner  = document.createElement('div');
        let colorName  = document.createElement('h3');
        let copy  = document.createElement('div');
        // let input  = document.createElement('input');
        outer.className = 'outer';
        inner.className = 'inner';
        copy.className = 'copy';
        outer.appendChild(inner);
        outer.appendChild(colorName);
        inner.appendChild(copy);
        copy.innerText="COPY";
        // outer.appendChild(input);
        colorPalette.appendChild(outer);
        inner.style.background="#"+colorCode;
        colorName.innerText="#"+colorCode;
        // input.name='color';
        // input.value="#"+colorCode;
       
        outer.addEventListener('click', (e) => {
            
            setBgAndCopyColor(colorCode,colorName);
            
        });
       outer.addEventListener("mouseover",(e)=>{
            copy.style.display="flex";
            //console.log("test");
        })
        outer.addEventListener("mouseout",(e)=>{
            copy.style.display="none";
            //console.log("test");
        })
        

    }
}

colorGeneratorBtn.addEventListener('click',generatePalette);
generatePalette();