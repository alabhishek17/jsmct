let firstName=document.getElementById("first_name");
let middleName=document.getElementById("middle_name");
let lastName=document.getElementById("last_name");
let display1=document.getElementById("display-content");
let inputField=document.getElementById("input-detail")
// let displeftAbout=document.querySelector("disp-lift-a")
// console.log(firstName.value);


// const debounce=(fn, delay)=>{
//     let timer; //closure variable is undefind
//     return function (){
//         timer && clearTimeout(timer);
//         // if time is not defind set it run the function after delay
    
//         timer=setTimeout(()=>{
//             fn();
//         },delay);
//     }

// };
//     function displayValue(){
        // console.log(document.getElementById("middle_name").value);
        // displeftAbout.innerTEXT="";
       
        document.getElementById("files").addEventListener("change",(event)=>{
            document.getElementById("dispimg").src=URL.createObjectURL(event.target.files[0]);
        })
        document.getElementById("first_name").addEventListener("input",()=>{
            document.getElementById("disp_lift_a").textContent=" "+document.getElementById("first_name").value;
        })
        document.getElementById("middle_name").addEventListener("change",()=>{
            document.getElementById("disp_lift_a").textContent+=" "+document.getElementById("middle_name").value;
        })
        document.getElementById("last_name").addEventListener("change",()=>{
            document.getElementById("disp_lift_a").textContent+=" "+document.getElementById("last_name").value;
        })
        document.getElementById("desigId").addEventListener("input",()=>{
            document.getElementById("disp_lift_a1").textContent=" "+document.getElementById("desigId").value;
        })
        document.getElementById("addressId").addEventListener("input",()=>{
            document.getElementById("disp_lift_a3").textContent=" "+document.getElementById("addressId").value;
        })
        document.getElementById("mail").addEventListener("input",()=>{
            document.getElementById("disp_lift_a4").textContent=" "+document.getElementById("mail").value;
        })
        document.getElementById("phoneId").addEventListener("input",()=>{
            document.getElementById("disp_lift_a5").textContent=" "+document.getElementById("phoneId").value;
        })
        document.getElementById("summeryId").addEventListener("input",()=>{
            document.getElementById("disp_lift_a6").textContent=" "+document.getElementById("summeryId").value;
        })
        document.getElementById("skill").addEventListener("change",()=>{
            document.getElementById("disp_left_s").textContent+=" ."+document.getElementById("skill").value;
        })
        document.getElementById("achiv").addEventListener("change",()=>{
            document.getElementById("disp_right_a").textContent+=" ."+document.getElementById("achiv").value;
        })
        document.getElementById("descrId").addEventListener("change",()=>{
            document.getElementById("disp_right_a1").textContent+=" ."+document.getElementById("descrId").value;
        })
        document.getElementById("schoolId").addEventListener("change",()=>{
            document.getElementById("disp_right_e1").textContent+=" ."+document.getElementById("schoolId").value;
        })
        document.getElementById("degreeId").addEventListener("change",()=>{
            document.getElementById("disp_right_e2").textContent+=" ."+document.getElementById("degreeId").value;
        })
        document.getElementById("cityId").addEventListener("change",()=>{
            document.getElementById("disp_right_e3").textContent+=" ."+document.getElementById("cityId").value;
        })
        document.getElementById("startId").addEventListener("change",()=>{
            document.getElementById("disp_right_e4").textContent+=" ."+document.getElementById("startId").value;
        })
        document.getElementById("endId").addEventListener("change",()=>{
            document.getElementById("disp_right_e4").textContent+=" ."+document.getElementById("endId").value;
        })
        document.getElementById("descId").addEventListener("change",()=>{
            document.getElementById("disp_right_e5").textContent+=" ."+document.getElementById("descId").value;
        })
        document.getElementById("titleId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex1").textContent+=" ."+document.getElementById("titleId").value;
        })
        document.getElementById("companyId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex2").textContent+=" ."+document.getElementById("companyId").value;
        })
        document.getElementById("locationId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex3").textContent+=" ."+document.getElementById("locationId").value;
        })
        document.getElementById("staId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex4").textContent+=" ."+document.getElementById("staId").value;
        })
        document.getElementById("enId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex4").textContent+=" ."+document.getElementById("enId").value;
        })
        document.getElementById("desId").addEventListener("change",()=>{
            document.getElementById("disp_right_ex5").textContent+=" ."+document.getElementById("desId").value;
        })
        document.getElementById("pro_titleId").addEventListener("change",()=>{
            document.getElementById("disp_right_pro1").textContent+=" ."+document.getElementById("desId").value;
        })
        document.getElementById("pro_compId").addEventListener("change",()=>{
            document.getElementById("disp_right_pro2").textContent+=" ."+document.getElementById("desId").value;
        })
        document.getElementById("pro_desId").addEventListener("change",()=>{
            document.getElementById("disp_right_pro3").textContent+=" ."+document.getElementById("desId").value;
        })
        
       
    // }

    // displayValue()
    
    // const debouncedDisplay = debounce(displayValue, 1000); // Debounce with corrected name

    // firstName.addEventListener("input", debounce(displayValue,1000)); // Attach debounced function
    // middleName.addEventListener("change",debounce(displayValue,1000));
    // lastName.addEventListener("change",debounce(displayValue,1000));
// middleName.addEventListener("input",second)
// document.getElementById("first_name").addEventListener("input",debounce(displayValue,1000));



function generatePDF() {
        
    const element = document.getElementById("pageprint");
    document.getElementById("reportbox").appendChild(display1)
    document.getElementById("reportbox").style.display = "block";
    document.getElementById("reportbox").style.marginTop = "0px"; 
    document.getElementById("pageprint").style.border = "1px solid black";
    html2pdf().from(element).save('download.pdf'); 
    }
    
    function downloadCode(){
    var x = document.getElementById("reportbox");  
    generatePDF();
    setTimeout(function() { window.location=window.location;},3000);}