const exeName = 'npemulator.exe';
const version = '1.0.0';
const updatesURL = 'https://charizardfire58.github.io/nproject-emulator/version/updates.json';
const emuFolder = 'resources\\app\\emu\\';

var categories = [
    {
        name: 'All',
        search: ''
    },
    {
        name: 'GB',
        search: '(GB)'
    },
    {
        name: 'GBC',
        search: '(GBC)'
    },
    {
        name: 'GBA',
        search: '(GBA)'
    },
    {
        name: 'NDS',
        search: '(NDS)'
    }
];

var emulators = [
    {
        name: 'DeSmuME',
        category: 'Nintendo DS (NDS)',
        version: '0.9.11',
        executable: 'desmume.exe',
        folder: 'desmume',
        icon: 'desmume.png',
        extensions: '(dsi)(nds)(pme)(srl)'
    },
    {
        name: 'VBA-M',
        category: 'Game Boy (GB), Game Boy Color (GBC), Game Boy Advance (GBA)',
        version: '2.1.0',
        executable: 'vbam.exe',
        folder: 'vbam',
        icon: 'vbam.png',
        extensions: '(gb)(gmb)(sgb)(cgb)(gbc)(agb)(bin)(elf)(gba)(mb)'
    },
    {
        name: 'Visual Boy Advance',
        category: 'Game Boy (GB), Game Boy Color (GBC), Game Boy Advance (GBA)',
        version: '1.7.2',
        executable: 'vba.exe',
        folder: 'vba',
        icon: 'vbam.png',
        extensions: '(gb)(gmb)(sgb)(cgb)(gbc)(agb)(bin)(elf)(gba)(mb)'
    }
];