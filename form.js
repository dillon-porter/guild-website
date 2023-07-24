document.addEventListener("DOMContentLoaded", function() {
    const classSelect = document.getElementById('classSelect');
    const warlockSpecs = document.getElementById('warlockSpecs');
    const mageSpecs = document.getElementById('mageSpecs');
    const rogueSpecs = document.getElementById('rogueSpecs');
    const demonhunterSpecs = document.getElementById('demonhunterSpecs');
    const evokerSpecs = document.getElementById('evokerSpecs');
    const monkSpecs = document.getElementById('monkSpecs');
    const hunterSpecs = document.getElementById('hunterSpecs');
    const shamanSpecs = document.getElementById('shamanSpecs');
    const deathknightSpecs = document.getElementById('deathknightSpecs');

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'warlock') {
            warlockSpecs.style.display = 'block';
        } else {
            warlockSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'mage') {
            mageSpecs.style.display = 'block';
        } else {
            mageSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'rogue') {
            rogueSpecs.style.display = 'block';
        } else {
            rogueSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'demon-hunter') {
            demonhunterSpecs.style.display = 'block';
        } else {
            demonhunterSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'evoker') {
            evokerSpecs.style.display = 'block';
        } else {
            evokerSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'monk') {
            monkSpecs.style.display = 'block';
        } else {
            monkSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'hunter') {
            hunterSpecs.style.display = 'block';
        } else {
            hunterSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'shaman') {
            shamanSpecs.style.display = 'block';
        } else {
            shamanSpecs.style.display = 'none';
        }
    });

    classSelect.addEventListener('change', function() {
        if (classSelect.value === 'death-knight') {
            deathknightSpecs.style.display = 'block';
        } else {
            deathknightSpecs.style.display = 'none';
        }
    });

});