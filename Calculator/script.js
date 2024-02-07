const $display = document.querySelector('input[type="text"]');
const $button = document.querySelectorAll('input[type="button"]');

$button.forEach(($button) => {
    $button.addEventListener('click', ()=> {
        const value = $button.value;

        if (value === 'C') {
            $display.value = '';
            return;
        }

        if(value === '=') {
            // const express = $display.value.replace(/X/g, '*');
            // $display.value = eval(express);
            // return;
        }

        $display.value += value;
    })
})