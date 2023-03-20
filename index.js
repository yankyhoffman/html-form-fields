const input = document.getElementById('phone');
const result = document.getElementById('result');

input.addEventListener('keyup', () => {
    const {value: parsed, valid} = parsePhone(input.value);

    result.innerHTML = parsed;

    if (valid) {
        result.classList.remove('error');
        result.classList.add('success');
    } else {
        result.classList.remove('success');
        result.classList.add('error');
    }
});

function parsePhone(value) {
    const cleaned = ('' + value).replace(/ \.-/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return {value: ['(', match[2], ') ', match[3], '-', match[4]].join(''), valid: true};
    }
    return {value, valid: false};
}

[
    'dhkdsas', '1234567890', '123-456-789', '890-123-4567', '+1-123-456-7890',
    '+12344332334', '+1 (234) 433-2334', '123.456.7890', '1-978-435-3445', '19784353445'
].forEach(n => console.log(`${n} => ${parsePhone(n).value}`));

// el.classList.add('success');
// el.classList.add('error');
// el.classList.remove('error');
