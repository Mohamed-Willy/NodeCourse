module.exports = (temp, element) => {
    let output = temp.replace(/{%ProductName%}/g, element.productName);
    output = output.replace(/{%Image%}/g, element.image);
    output = output.replace(/{%Price%}/g, element.price);
    output = output.replace(/{%From%}/g, element.from);
    output = output.replace(/{%Nutrients%}/g, element.nutrients);
    output = output.replace(/{%Quantity%}/g, element.quantity);
    output = output.replace(/{%Description%}/g, element.description);
    output = output.replace(/{%ID%}/g, element.id);

    if (!element.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }

    return output;
};