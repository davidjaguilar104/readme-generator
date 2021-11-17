module.exports = templateData => {
    console.log(templateData); // shows answers object

    return `
    # ${templateData.title}
    `
};