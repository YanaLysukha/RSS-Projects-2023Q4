import Component from "../base-component";
import { ICar } from "../../../types/interfaces";
import { RaceComponent } from "../car-container/race-component";

async function getCarsAmountInGarage() {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url);
    const jsonResult = await response.json();
    const totalCars = jsonResult.length;
    return totalCars;
}

export async function createGarageAmountElement() {
    const garageAmountElement = new Component({
        tagName: "div",
        className: "garage-amount",
        textContent: `Garage (${await getCarsAmountInGarage()})`,
    });
    return garageAmountElement;
}

export function createPageNumberGarage() {
    const pageNumberGarage = new Component({
        tagName: "div",
        className: "page-number-garage",
        textContent: "Page #1",
    });
    return pageNumberGarage;
}

export async function addRaceComponent() {
    async function getCars(): Promise<ICar[]> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    const cars = await getCars();
    const raceComponents = cars.map((car) => new RaceComponent(car));
    return raceComponents;
}

let garageView: Component;

export async function createGarageView() {
    garageView = new Component(
        {
            tagName: "div",
            className: "garage-view",
        },
        await createGarageAmountElement(),
        createPageNumberGarage(),
        ...(await addRaceComponent()),
    );
    return garageView;
}

export function addToGarage(car: ICar) {
    const raceComponent = new RaceComponent(car);
    garageView.append(raceComponent);
    // garageView.append(createRaceComponent(car));
}
