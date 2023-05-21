import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "decodeHtml"
})
export class DecodeHtml implements PipeTransform {

    transform(value: string | undefined) {
        if (!value)
            return "";

        const tempElement = document.createElement("div")
        tempElement.innerHTML = value
        return tempElement.innerText
    }

}