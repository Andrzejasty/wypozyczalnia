const rbm = {
    name: "Kross Vento 5",
    price: 60,
    bicycleimage: "'<img src=\"img/2021_kross_KR_Vento_DSC_5_0_M_28.jpg\"/>'"
};
const rbf = {
    name: "Octane One Gridd 2",
    price: 60,
    bicycleimage: "'<img src=\"img/GRIDD2_GREEN_1024x683(2).jpg\"/>'"
};
const mtbm = {
    name: "Trek Marlin 7",
    price: 50,
    bicycleimage: "'<img src=\"img/TREK-MARLIN-7-2021-1-102572.jpg\"/>'"
};
const mtbf = {
    name: "Kross Lea 6",
    price: 50,
    bicycleimage: "'<img src=\"img/Kross-Lea-6-0-SR-2021-102143.jpg\"/>'"
};
const sbm = {
    name: "Kross Trans 8",
    price: 45,
    bicycleimage: "'<img src=\"img/a89fa7b23e0f4dc27049ffe3f7d32b10.jpg\"/>'"
};
const sbf = {
    name: "Liv Flourish FS 2",
    price: 45,
    bicycleimage: "'<img src=\"img/MY21FlourishFS2_ColorCChameleonP.jpg\"/>'"
};
const cbm = {
    name: "Trek Wahoo 20",
    price: 35,
    bicycleimage: "'<img src=\"img/Wahoo24_19_24065_E_Primary.jpg\"/>'"
};
const cbf = {
    name: "Liv Enchant 20",
    price: 35,
    bicycleimage: "'<img src=\"img/Liv-Enchant-20-2022-Azalea-Pink-.jpg\"/>'"
};

const avail = true;

function checkAvail(){
    var a ="";
    var b ="";
    const chooseSexRadio = document.querySelectorAll('input[name="chooseSex"]');
    for (const radioButton of chooseSexRadio) {
        if (radioButton.checked) {
            a = radioButton.value;
            break;
        }
    }
    const chooseBicTypeRadio = document.querySelectorAll('input[name="chooseBicType"]');
    for (const radioButton of chooseBicTypeRadio) {
        if (radioButton.checked) {
            b = radioButton.value;
            break;
        }
    }
    let x =b+a;
    let days = document.getElementById("daysRent").value;
    document.getElementById("bicycleimg").innerHTML = eval(x).bicycleimage;
    document.getElementById("bikeName").innerHTML = eval(x).name;
    document.getElementById("price").innerHTML = "cena "+eval(x).price+" zł/doba";
    if(avail==true){
        document.getElementById("availb").innerHTML = "Dostępny";
        if(days >0){
            document.getElementById("rentPrice").innerHTML = "Wypożycz za "+eval(x).price*days+"zł";
        }
    }else {
        document.getElementById("availb").innerHTML = "Niedostępny";
    }
}
function rentBicycle(){
    if(document.getElementById("daysRent").value >0){
        alert("Zlecenie przekazane do realizacji");
    }else{
        alert("Niepoprawnie złożone zamówienie");
    }
}