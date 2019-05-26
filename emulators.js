const exeName = 'PokeRoms.exe';
const version = '1.0.2';
const updatesURL = 'https://charizardfire58.github.io/PokeRoms-Emulator/version/updates.json';
const emuFolder = 'emu\\\\';

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
    },
    {
        name: 'ROM',
        search: '(ROM)'
    }
];

var emulators = [
    {
        name: 'PokeRoms ROM MANAGER',
        category: 'Game Boy (GB), Game Boy Color (GBC), Game Boy Advance (GBA), Nintendo DS (NDS), Rom Manager (ROM)',
        version: '1.0.0.0',
        executable: 'pokeroms-downloader.ink',
        folder: 'desmume',
        icon: 'p.png',
        extensions: ''
    },
    {
        name: 'DeSmuME',
        category: 'Nintendo DS (NDS)',
        version: '0.9.12',
        executable: 'desmume.exe',
        folder: 'desmume',
        icon: 'desmume.png',
        extensions: '(dsi)(nds)(pme)(srl)'
    },
    {
        name: 'MyZoom',
        category: 'Nintendo DS (NDS)',
        version: '1.8.36',
        executable: 'myzoom.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: ''
    },
    {
        name: 'NGZoom',
        category: 'Nintendo DS (NDS)',
        version: '1.0',
        executable: 'ngzoom.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: ''
    },
    {
        name: 'No$gba',
        category: 'Nintendo DS (NDS), Game Boy Advance (GBA)',
        version: '2.6a',
        executable: 'no$gba.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: '(dsi)(nds)(pme)(srl)(agb)(bin)(elf)(gba)(mb)'
    },
    {
        name: 'No$gba2X',
        category: 'Nintendo DS (NDS)',
        version: '1.0',
        executable: 'no$gba2x.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: ''
    },
    {
        name: 'No$gba',
        category: 'Nintendo DS (NDS), Game Boy Advance (GBA)',
        version: '2.9d',
        executable: 'no$gba.exe',
        folder: 'no$gba_',
        icon: 'nocashgba.png',
        extensions: '(dsi)(nds)(pme)(srl)(agb)(bin)(elf)(gba)(mb)'
    },
    {
        name: 'No$Mooz',
        category: 'Nintendo DS (NDS)',
        version: '1.0',
        executable: 'no$mooz.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: ''
    },
    {
        name: 'No$Zoomer',
        category: 'Nintendo DS (NDS), Game Boy Advance (GBA)',
        version: '2.3.0.2',
        executable: 'no$zoomer.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: '(dsi)(nds)(pme)(srl)(agb)(bin)(elf)(gba)(mb)'
    },
    {
        name: 'NOZ',
        category: 'Nintendo DS (NDS)',
        version: '2.3',
        executable: 'noz.exe',
        folder: 'no$gba',
        icon: 'nocashgba.png',
        extensions: ''
    },
    {
        name: 'VBA Link',
        category: 'Game Boy (GB), Game Boy Color (GBC), Game Boy Advance (GBA)',
        version: '1.8.0',
        executable: 'vbalink.exe',
        folder: 'vbalink',
        icon: 'vbam.png',
        extensions: '(gb)(gmb)(sgb)(cgb)(gbc)(agb)(bin)(elf)(gba)(mb)'
    },
    {
        name: 'VBA-M',
        category: 'Game Boy (GB), Game Boy Color (GBC), Game Boy Advance (GBA)',
        version: '2.0',
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