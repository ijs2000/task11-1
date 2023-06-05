let bottomDiv=document.querySelector(".bottomDiv")
let btn=document.querySelector(".submitBtn")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    bottomDiv.innerHTML="";
    let inputNumber=document.querySelector("input");
    let value=inputNumber.value;
    if(value>=1 && value<=1330){
        const book =async () =>{
    
           try {
            let response=await fetch(`https://api-thirukkural.vercel.app/api?num=${value}`);
             
            let data =await response.json();
           
            console.log(data);
            let lin1=data.line1;
            let lin2=data.line2;
            let meaning=data.tam_exp;
            let englishKural=data.eng;
            let englishKuralMeaning=data.eng_exp;
            let tamilSect=data.sect_tam;
            let englishSect=data.sect_eng;
            let display=document.createElement("div")
            bottomDiv.append(display)
            
            display.innerHTML +=`
            <div class="kuralDisplay">
            <div class="tamilKural">
                <div  class="tamilTitle">திருக்குறள்: ${value} - ${tamilSect}</div>
                <div class="tamilline">
                <div  class="tamilline1">${lin1}</div>
                <div class="tamilline2">${lin2}</div>
                </div>         
               <div class="tamilMeaningHeading">பொருள்:</div>
               <div class="tamilMeaning">${meaning}</div>
            </div>
            <div class="englishKural">
                <div  class="englishTitle">Thirukkural: ${value} - ${englishSect}</div>
                <div class="englishline">${englishKural}</div>
                <div class="englishMeaningHeading">Meaning:</div>
                <div class="englishMeaning">${englishKuralMeaning}</div>
            </div>
            </div>
            `
           } catch (error) {
            console.log(error)
           }
    }
    book();
}
    else{
        alert("Please Enter The value - 1 to 1330");
        inputNumber.value=""
    }
})
