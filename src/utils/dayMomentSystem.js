import { normalizeRouteRegex } from "next/dist/lib/load-custom-routes";

export function getDayFase() {
    var dayFase;
    var time = new Date().getHours();

    if (time > 4 && time < 12) {
        dayFase = "Morning";
    }
    else if (time >= 12 && time < 18) {        
        dayFase = "Evening";
    }
    else if (time >= 18 && time <= 3) {
        dayFase = "Night";
    }
    else { dayFase = "Morning" }
    
    return dayFase;
}

export function getDayColor(dayFase){
    var backgroundColor;
    
    if (dayFase == "Morning") {
        backgroundColor = "background: linear-gradient(180deg, #6D6875 1.9%, rgba(181, 131, 141, 0.862522) 67.42%, rgba(229, 152, 155, 0.656673) 88.67%, rgba(255, 180, 162, 0.353189) 100%), #E5989B;"
    }
    else if (dayFase == "Evening") {
        backgroundColor = "background: linear-gradient(180deg, #d69265 20.57%, #d9bb59 71.05%, rgba(255, 239, 179, 0.353189) 100%), #F8DE7E;"
    }
    else if(dayFase == "Night"){
        backgroundColor = "background: linear-gradient(180deg, #0F142D 0%, #3B4974 52.71%, #6192B1 100%), #0A2472;"
    }
    return backgroundColor;
}