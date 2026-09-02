const loveButton = document.getElementById('loveButton');
const loveModal = document.getElementById('loveModal');
const closeModal = document.getElementById('closeModal');
const nameHeart = document.getElementById('nameHeart');

const name = 'Fiore';
const heartPattern = [
    '    *****       *****  ',
    '  *********   *********',
    ' ***********************',
    ' ***********************',
    '  ********************* ',
    '   *******************  ',
    '     ***************    ',
    '       ***********      ',
    '         *******        ',
    '           ***          ',
    '            *           '
    ];

const buildHeart = () => {
    let index = 0;

    nameHeart.textContent = heartPattern
    .map(line =>
    line.replace(/\*/g, () => {
        const letter = name[index % name.length];
        index += 1;
        return letter;
    })
    )
    .join('\n');
};

loveButton.addEventListener('click', () => {
    buildHeart();
    loveModal.showModal();
});

closeModal.addEventListener('click', () => {
    loveModal.close();
});

loveModal.addEventListener('click', (e) => {
    if (e.target === loveModal) loveModal.close();
});
