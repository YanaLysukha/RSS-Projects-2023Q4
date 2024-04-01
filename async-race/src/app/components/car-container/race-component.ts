import Component from "../base-component";
import { ICar } from "../../../types/interfaces";
import "./race-component.css";
import SelectButtonComponent from "../button/select-btn";
import RemoveButtonComponent from "../button/remove-btn";

export function carIcon(carColor: string) {
    const element = new Component({ tagName: "div", className: "car-icon" });
    element.node.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 62.5" enable-background="new 0 0 90 50" xml:space="preserve">
    <path fill=${carColor} d="M19.592,25.344c-3.216,0-5.823,2.604-5.823,5.821c0,3.215,2.607,5.821,5.823,5.821s5.824-2.606,5.824-5.821  C25.416,27.948,22.808,25.344,19.592,25.344z M19.592,34.202c-1.678,0-3.039-1.361-3.039-3.038c0-1.68,1.36-3.039,3.039-3.039  c1.678,0,3.038,1.357,3.038,3.039C22.63,32.841,21.271,34.202,19.592,34.202z"/>
    <path fill=${carColor} d="M69.592,25.344c-3.216,0-5.822,2.605-5.822,5.822c0,3.215,2.606,5.82,5.822,5.82s5.824-2.605,5.824-5.82  C75.416,27.949,72.808,25.344,69.592,25.344z M69.592,34.203c-1.678,0-3.039-1.361-3.039-3.039c0-1.68,1.359-3.039,3.039-3.039  c1.678,0,3.038,1.357,3.038,3.039C72.63,32.842,71.271,34.203,69.592,34.203z"/>
    <path fill=${carColor} d="M86.875,27.875C78,20.188,67.75,20.793,67.75,20.793c-12.125-6.457-25.125-6.918-25.125-6.918  c-10.75-0.25-39.042,4.958-39.042,4.958c2.25,3.417,1.167,5.583,1.167,5.583c-2.583-0.5-2.083,0.5-2.083,0.5  c-0.083,4,10.167,6.085,10.167,6.085c0.05,0.023,0.114,0.046,0.171,0.069c0.051-3.64,3.011-6.573,6.661-6.573  c3.684,0,6.668,2.984,6.668,6.667c0,0.515-0.064,1.014-0.174,1.494c10.451,0.544,24.985,0.641,37.179,0.596  C63.122,32.596,63,31.895,63,31.164c0-3.683,2.984-6.667,6.666-6.667c3.684,0,6.668,2.984,6.668,6.667  c0,0.694-0.106,1.363-0.303,1.992C82.394,33.084,86.562,33,86.562,33l-1.625-2.312L86.875,27.875z M32.313,19.312  c0,0-3.438-0.562-6.938-0.25c0,0,5.5-2.5,7.062-2.625c0,0,16.438-2.897,31.688,5.332C64.126,21.77,63.001,24.188,32.313,19.312z"/><text x="0" y="65" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text><text x="0" y="70" fill=${carColor} font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text>
    </svg>`;

    return element;
}

export class RaceComponent extends Component {
    constructor(car: ICar) {
        const selectBtn = new SelectButtonComponent();
        const removeBtn = new RemoveButtonComponent();
        const carNameElement = new Component({
            tagName: "span",
            className: "car-name",
            textContent: car.name,
        });
        const btnAndNameContainer = new Component(
            {
                tagName: "div",
                className: "btn-and-name-container",
            },
            selectBtn,
            removeBtn,
            carNameElement,
        );
        const flagImg = new Component({
            tagName: "img",
            className: "flag-img",
        });
        flagImg.setAttribute("src", "./img/finish-flag.svg");
        flagImg.setAttribute("alt", "flag image");
        const carContainer = new Component(
            { tagName: "div", className: "car-container" },
            carIcon(car.color),
            flagImg,
        );
        super(
            { tagName: "div", className: "race-container" },
            btnAndNameContainer,
            carContainer,
        );
    }
}
