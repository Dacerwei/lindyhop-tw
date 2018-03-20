const CLASS_CONTENTS = [
    {
        id: 0,
        titleEn: 'Lindy Hop - Beginner',
        titleTw: 'Lindy Hop - 入門班',
        subTitleEn: '',
        subTtileTw: '',
        style: 'lindyhop',
        levelName: 'beg',
        level: 1,
        coverPhoto: '',
        state: 'open',
        dropIn: false,
        link: '',
        description: ''
    },
    {
        id: 1,
        titleEn: 'Lindy Hop - Beginner/Intermediate',
        titleTw: 'Lindy Hop - 基礎班',
        subTitleEn: '',
        subTtileTw: '',
        style: 'lindyhop',
        levelName: 'beg/int',
        level: 2,
        coverPhoto: '',
        state: 'open',
        dropIn: false,
        link: '',
        description: ''
    },
    {
        id: 2,
        titleEn: 'Charleston - Beginner',
        titleTw: '查爾斯頓 - 入門班',
        subTitleEn: '',
        subTtileTw: '',
        style: 'charleston',
        levelName: 'beg',
        level: 1,
        coverPhoto: '',
        state: 'open',
        dropIn: false,
        link: '',
        description: ''
    },
    {
        id: 3,
        titleEn: 'Solo Jazz - Beginner',
        titleTw: 'Solo Jazz - 入門班',
        subTitleEn: '',
        subTtileTw: '',
        style: 'solojazz',
        levelName: 'beg',
        level: 1,
        coverPhoto: '',
        state: 'open',
        dropIn: true,
        link: '',
        description: ''
    },
    {
        id: 4,
        titleEn: 'Solo Jazz - Advance',
        titleTw: 'Solo Jazz - 進階班',
        subTitleEn: '',
        subTtileTw: '',
        style: 'solojazz',
        levelName: 'adv',
        level: 5,
        coverPhoto: '',
        state: 'open',
        dropIn: true,
        link: '',
        description: ''
    }
];
export default CLASS_CONTENTS;

export const LEVEL_DEFINITIONS = [
    {
        id: 0,
        level: 1,
        title: 'beginner',
        levelName: 'beg',
        imageSrc: '',
        description: {
            en: 'If you have never danced before or if you are not quite comfortable yet with the basics, this is the level for you! Your teachers will take you through the fundamentals of the dance in a fun and easy way. Already after the first day you will be able to swing across the dance floor with the new cool things you’ve learned in class.',
            tw: ''
        }
    },
    {
        id: 1,
        level: 2,
        title: 'beginner/Intermediate',
        levelName: 'beg/int',
        imageSrc: '',
        description: {
            en: 'If you have taken some beginner courses and want to experience your first international workshop in a friendly and fun environment, this is the camp and level for you! You should already know the basic side-by-side movements in Lindy Hop and Charleston, transition into open position and a few of the classic passes or moves. You should have at least 4 months of experience.',
            tw: ''
        }
    },
    {
        id: 2,
        level: 3,
        title: 'Intermediate',
        levelName: 'int',
        imageSrc: '',
        description: {
            en: 'You know the basics of how to communicate steps versus triple steps and you are able to combine them freely into basic, well-known figures such as the sling-shot, send out and circles. You should be able to both dance to faster songs in Charleston feeling and to medium-tempo songs in Lindy hop feeling.',
            tw: ''
        }
    },
    {
        id: 3,
        level: 4,
        title: 'Intermediate/Advance',
        levelName: 'int/adv',
        imageSrc: '',
        description: {
            en: 'You should be able to comfortably lead/follow swingouts (also to higher tempos), tuck-turns, and transitions between Lindy hop and Charleston feeling. Variations like Texas-tommy, sugar-push, and some other fancy steps are on your menu. Your passion for Lindy hop is strong and you’ve been spreading the joy of swing dancing by presenting a small performance, you are teaching your friends or maybe even assist in classes.',
            tw: ''
        }
    },
    {
        id: 4,
        level: 5,
        title: 'Advance',
        levelName: 'adv',
        imageSrc: '',
        description: {
            en: 'You should be able to comfortably lead/follow swingouts to higher tempos – and switch between Lindy and Charleston with ease. Also, leading and following the free combination of steps, triples steps, kicks, ball-changes etc. is in your repertoire. You’ve been working on more fancy variations, including different types of turns and spins and you know how to use your arms to both match your movements and add some style to your look. Perhaps you’ve already taught some beginner’s classes, won a Jack’n’Jill competition, or attracted attention in a performance. Basically, you’re an advanced dancer and able to dance comfortably with pretty much anyone to any music.',
            tw: ''
        }
    },
    {
        id: 5,
        level: 0,
        title: 'Open Level',
        levelName: 'open',
        imageSrc: '',
        description: {
            en: 'Without any restrictions, everyone is welcome to join.',
            tw: ''
        }
    }
];