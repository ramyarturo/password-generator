const specials = '!@#$%^&*()_+{}:"<>?[];,./`~';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

const all = specials + lowercase + uppercase + numbers;

const generatePassword = (length = 5, includeOptions) => {
    let result = "";
    let all = ""
    let a = [1]
    console.log(includeOptions)
    includeOptions.find(item => item.key === "includeSymbols").isChecked && (all += specials)
    includeOptions.find(item => item.key === "includeMayus").isChecked && (all += uppercase)
    includeOptions.find(item => item.key === "includeMinus").isChecked && (all += lowercase)
    includeOptions.find(item => item.key === "includeNumbers").isChecked && (all += numbers)

    console.log("todo", all)
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    for (let i = 0; i < length; i++) {
        result += all[values[i] % all.length];
    }
    return result;
}

export default generatePassword