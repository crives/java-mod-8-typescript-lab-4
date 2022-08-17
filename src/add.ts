let spaceString = '';

function prepend<T>(array: T[] | number[] | string[]) {

    for(let i = 0; i < array[0]; i++) {
        spaceString += ' ';
    }
    return spaceString + array[1]; 
}

const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("numSpaces") as HTMLInputElement;
const input2 = document.getElementById("inputString") as HTMLInputElement;

button!.addEventListener("click", function () {
    let array: (string | number)[] = [input1.value, input2.value];

    console.log(prepend(array));
});