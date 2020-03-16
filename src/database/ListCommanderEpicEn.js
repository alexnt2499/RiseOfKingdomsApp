import VanMinhImage from './../database/VanMinh';
import TalentIcon from './../database/Icon';
export default [
    {
        id: 1,
        name : 'Baibars',
        image : require('./../../assets/images/Commander/Epic/Baibars/Baibars.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Baibars/tuongBaibars.png'),
        about : 'Baibars was the forth Sultan of Egypt and Syria during the Mamluk dynasty. In September 1260, he routed the invading Mongol army at the Battle of Ain Jalut - this was the first major defeat ever suffered by the Mongols. During the battle, Baibars implemented a strategy of hit-and-run tactics, which baited the Mongol forces into an devastating ambush. Baibars is renowned both for his victories against the Mongols and Crusaders, and for the administrative reforms he implemented within the sultanate. An ambitious military leader, Baibars organized an army and restructured the existing navy. He donated heavily to public works, including building roads, mosques, schools, and post offices, as well as irrigation projects to increase the country\'s grain production. Baibars\' reign pushed the Crusader\'s out of Mamluk territory once and for all, and began a new age of Mamluk supremacy in the Eastern Mediterranean.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill1.png'),
                type : 'Active',
                name : 'Sandstorm',
                rage : 'Rage Requirement: 1000',
                about : `Deals massive damage (Damage Factor 300) to enemies in a forward-facing fan-shaped area (maximum 3 targets) and reduces current target's march speed by 30% for the next 2 seconds`,
                update : `Direct Damage Factor: 300 / 375 / 450 / 600 / 750\nMarch Speed Reduction: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill2.png') ,
                name : 'Arabian Knights',
                type : 'Passive',
                rage : '',
                about : 'Increases attack of cavalry units by 8%.',
                update : 'Cavalry Attack Bonus: 8% / 10% / 12% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill3.png') ,
                name : 'No Escape',
                type : 'Passive',
                rage : '',
                about : `When attacking cities, normal attacks have a 100% chance to decrease garrison attack by 1% and defense by 1%.`,
                update : 'Attack Reduction: 1% / 2% / 3% / 5% / 7%\nDefense Reduction: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill4.png') ,
                name : 'Lord Panther',
                type : 'Passive',
                rage : '',
                about : 'Upon leaving battle (But not when routed), heals a portion of slightly wounded units (Healing Factor 75) and increases march speed by 20% for the next 10 seconds.',
                update : 'Healing Factor: 75 / 100 / 125 / 150 / 200\nMarch Speed Bonus: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Baibars/skill5.png') ,
                name : 'Blot Out The Sun',
                type : 'Update skill 1',
                rage : '',
                about : 'Deals massive damage (Damage Factor 1000) to enemies in a forward- facing fan-shaped area (maximum 5 targets) and reduces current target\'s march speed by 50% for the next 2 seconds.',

            },

        ],
        VanMinh : VanMinhImage.Arabia,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-talent-tree-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-talent-tree-2-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/baibars-cavalry-1024x576.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 2,
        name : 'Belisarius',
        image : require('./../../assets/images/Commander/Epic/Belisarius/Belisarius.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Belisarius/tuongBelisarius.png'),
        about : 'Flavius Belisarius was a Byzantine general who lived during the 6th century AD. He is often regarded as one of the greatest generals of the Byzantine Empire. Belisarius is know for being one of the “last of the Romans” – one of the last individuals who embodied the virtues of the Roman Empire. Flavius played a key role in Emperor Justinian’s plan to reconquer the Mediterranean territory formerly controlled by the Western Roman Empire, leading imperial armies against the Sasanian empire (Persia), the Vandal kingdom of the North Africa, encroaching upon Constantinople. Originally a member of Justinian’s bodyguard, Flavius came to the emperor’s attention early on, and was given his first command at the age of 25. Not much is known about Belisarius’ personal life, but two primary I pulses guided his actions: loyalty to the Emperor and love for his wife, Antonia. Despite the inconsistent treatment he received from Justinian, Belisarius’ faithfulness never wavered, and his loyalty has gone down in history as one of the noblest elements of Justinian’s era.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill1.png'),
                type : 'Active',
                name : 'Deception',
                rage : 'Rage Requirement: 1000',
                about : 'Decreases target attack by 10% and defense by 10% for the next 2 seconds, then deals massive damage (Damage Factor 150) to the target on the next turn.',
                update : 'Attack Reduction: 10% / 15% / 20% / 25% / 30%\nDefense Reduction: 10% / 15% / 20% / 25% / 30%\nDirect Damage Factor: 150 / 210 / 270 / 360 / 450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill2.png') ,
                name : 'Irresistible',
                type : 'Passive',
                rage : '',
                about : 'Increases damage dealt to barbarians and other neutral units by 5%.',
                update : 'Bonus Damage to Barbarians: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill3.png') ,
                name : 'Bucellarii',
                type : 'Passive',
                rage : '',
                about : 'Increases defense of cavalry units by 5%. Increases march speed by 10% for 10 seconds after leaving battle.',
                update : 'Cavalry Defense Bonus : 10% / 15% / 20% / 25% / 30%\nMarch Speed Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill4.png') ,
                name : 'Oblique Tactics',
                type : 'Passive',
                rage : '',
                about : 'When target army has been reduced to less than 50% strength, increases damage dealt to target by Belisarius’ army by 10 %.',
                update : 'Phần thưởng thiệt hại: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Belisarius/skill5.png') ,
                name : 'Bloodthristy Bucellarii',
                type : 'Passive',
                rage : '',
                about : 'Increases defense of cavalry units by 30%. Increases march speed by 50% for 10 seconds after leaving battle.',

            },

        ],
        VanMinh : VanMinhImage.Bi,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Mobility,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/belisarius-talent-build-1024x578.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 3,
        name : 'Boudica',
        image : require('./../../assets/images/Commander/Epic/Boudica/Boudica.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Boudica/tuongBoudica.png'),
        about : 'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61. However, the Roman governor Gaius Suetonius Paulinus’ eventual victory over Boudica confirmed Roman control of the province. Boudica then either killed herself to avoid capture or died of illness. Interest in these events revived in the English Renaissance and led to Boudica´s fame in the Victorian era. Boudica has remained an important cultural symbol in the United Kingdom. The absence of the native British literature during the early part of the first millennium means that knowledge of Boudica´s rebellion comes solely form the writings of the Romans.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill1.png'),
                type : 'Active',
                name : 'Lament of the Insurgent',
                rage : 'Rage Requirement: 1000',
                about : 'Deals massive damage to the target and reduces its rage. Decreases attack of target\'s troops for the next 2 seconds.',
                update : 'Direct Damage Factor: 225 / 300 / 375 / 450 / 600\nAttack Reduction: 10% / 13% / 16% / 20% / 25%\nRage Reduction: 50 / 60 / 70 / 80 / 100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill2.png') ,
                name : 'Group Battle',
                type : 'Passive',
                rage : '',
                about : `Increases damage dealt to barbarians and other neutral units by troops led by this commander and increases commander experience obtained from these targets by 20%.`,
                update : 'Bonus Damage to Barbarians: 5% / 10 % / 15 % / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill3.png') ,
                name : 'Celtic Blood',
                type : 'Passive',
                rage : '',
                about : 'Boudica restores rage and heals some of the slightly wounded units in her army whenever she uses a skill.',
                update : 'Rage Restored: 10 / 20 / 30 / 40 / 50\nHealing Factor: 150 / 200 / 250 / 300 / 400'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill4.png') ,
                name : 'Queen of the Iceni',
                type : 'Passive',
                rage : '',
                about : 'Troops normal attacks have a chance to increase the damage dealt to enemy.',
                update : 'Bonus Damage (5% Chance): 10% / 20% / 30% / 40% / 50%\nBonus Damage (3% Chance): 20% / 40% / 60% / 80% / 100%\nBonus Damage (2% Chance): 30% / 60% / 90% / 120% / 150%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Boudica/skill5.png') ,
                name : 'Roar of the Insurgent',
                type : 'Update skill 1',
                rage : '',
                about : 'Deals massive damage (Damage Factor 1000) to the target and reduces its rage by 100. Decreases attack of target\'s troops by 25% for the next 2 seconds.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Peacekeeping,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/boudica-talent-tree-1024x578.jpg'
            }
        ],
        partner : [],
        trangBi : 'man rợ'
    },
    {
        id: 4,
        name : 'Eulji Mundeok',
        image : require('./../../assets/images/Commander/Epic/Mundeok/Mundeok.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Mundeok/tuongMundeok.png'),
        about : `Eulji Mundeok was born in the mid-6th century and died sometime after 618. As one of the most distinguished military leaders of the Goguryeo period, Eulji Mundeok's leadership and tactical acumen were the decisive factors in defeating the Sui invasion. Facing numerically superior forces, he developed a strategy that allowed him to secure a decisive victory. Such brilliant tactical success earned him a permanent place among Korea's most famous leaders. Kim Bu-sik, the author of the Samguk Sagi, also attributed the victory over Sui to Eulji Mundeok. Nowadays in Korea, Eulji Mundeok is recognized as one of the greatest figures in its national history.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill1.png'),
                type : 'Active',
                name : 'Water Attack',
                rage : 'Rage Requirement: 1000',
                about : 'Attacks the target and deals massive damage. Decreases defense of the target for 2 seconds.',
                update : 'Direct Damage Factor: 300 / 375 / 450 / 600 / 750\nDefense Reduction: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill2.png') ,
                name : 'Cold Welcome',
                type : 'Passive',
                rage : '',
                about : 'Increases garrison defense when this commander is service as garrison commander.',
                update : `Defense Bonus: 1% / 2% / 3% / 4% / 5% `
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill3.png') ,
                name : 'Battle of Salsu',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of infantry units and defense of infantry units.',
                update : 'Infantry Attack Bonus: 4% / 5% / 6% / 8% / 10%\nInfantry Defense Bonus: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill4.png') ,
                name : 'Strike Back',
                type : 'Passive',
                rage : '',
                about : 'When attacked, Eulji Mundeok has a 10% chance to increase his own troops\' damage on the next turn.',
                update : 'Damage Bonus: 20% / 40% / 60% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Mundeok/skill5.png') ,
                name : 'War and Peace',
                type : 'Update skill 1',
                rage : '',
                about : 'Increases the attack of infantry units by 15% and defense of infantry units by 15%.',

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/eulji-mundeok-minex-troops-talent-tree-1024x584.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/eulji-field-flad-fight-talent-tree-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/eulji-mundeok-garrison-talent-tree-1024x584.jpg'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 5,
        name : 'Hermann',
        image : require('./../../assets/images/Commander/Epic/Hermann/Hermann.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Hermann/tuongHermann.png'),
        about : `Arminius, known as his German name Hermann, was a chieftain of the Germanic Cherusci tribe who famously led an allied coalition of Germanic tribes to a decisive victory against three Roman legions in the Battle of the Teutoburg Forest in 9 AD. An auxiliary lieutenant to the Roman general Publius Quinctilius Varus, Arminius used his knowledge of Roman tactics to ambus and destroy the legions. The defeat at Teutoburg would precipitate the Roman Empire's permanent strategic withdrawal from Magna Germania, and the Romans made no more concerted attempts to conquer and hold Germania beyond the Rhine river. Modern historians have regarded Arminius' victory as "Rome's greatest defeat" and one of the most decisive battles in history.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill1.png'),
                type : 'Active',
                name : 'Ambush',
                rage : 'Rage Requirement: 1000',
                about : `Deals massive damage to the target, decreases target's rage, and silences the target for 2 seconds.`,
                update : 'Direct Damage Factor: 300 / 375 / 450 / 600 / 750\nRage Reduction: 50 / 60 / 70 / 80 / 100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill2.png') ,
                name : 'Military Genius',
                type : 'Passive',
                rage : '',
                about : 'Increases archer units\' attack and march speed.',
                update : `Archer Attack Bonus: 3% / 4.5% / 6% / 8% / 10%\nArcher March Speed Bonus: 1.5% / 3% / 5% / 7% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill3.png') ,
                name : 'Legend of Teutoburger',
                type : 'Passive',
                rage : '',
                about : `Increases garrison and watchtower attack when this commander is serving as garrison commander.`,
                update : 'Garrison/Watchtower Attack Bonus: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill4.png') ,
                name : 'National Hero',
                type : 'Passive',
                rage : '',
                about : 'Increases normal attack damage of troops. Attacks have a chance to grant an additional 100 rage.',
                update : 'Normal Attack Damage Bonus: 3% / 4.5% / 6% / 8% / 10%\nTrigger Chance: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Hermann/skill5.png') ,
                name : 'Dead End',
                type : 'Update skill 1',
                rage : '',
                about : `Deals massive damage (Damage Factor 1150) to the target, decreases target's rage by 100, and silences the target for 2 seconds.`,

            },

        ],
        VanMinh : VanMinhImage.Germany,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/hermann-talents-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/hermann-archer-build-1024x570.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/hermann-garrison-build-1024x570.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/hermann-skill-build-1024x570.jpg'
            }
        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 26,
        name : 'Joan of Arc',
        image : require('./../../assets/images/Commander/Epic/Joan/Joan.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Joan/tuongJoan.png'),
        about : `Joan of Arc is considered a heroine of France for her role during the Lancastrian phase of the Hundred Years' War, and was canonized as a Roman Catholic saint. On 23 May 1430, she was captured at Compiègne and later put on trial. After the Bishop Pierre Cauchon declared her guilty she was burned at the stake on 30 May 1431, dying at about nineteen years of age. In 1456, an inquisitorial court examined the trial, debunked the charges against her, pronounced her innocent, and declared her a martyr. In the 16th century she became a symbol of the Catholic League, and in 1803 she was declared a national symbol of France by the decision of Napoleon Bonaparte.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Joan/skill1.png'),
                type : 'Active',
                name : 'Divine Revelation',
                rage : 'Rage Requirement: 1000',
                about : `In the next 2 seconds, Joan of Arc grants her own troops and nearby friendly forces a powerful buff that increases infantry units' health, increases cavalry units' defences, increases archer units' attack, and grants additional rage per second.`,
                update : 'Infantry Health Bonus: 10% / 15% / 20% / 25% / 30%\nCavalry Defense Bonus: 10% / 15% / 20% / 25% / 30%\nArcher Attack Bonus: 10% / 15% / 20% / 25% / 30%\nRage Restored: 15 / 20 / 25 / 30 / 40'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill2.png') ,
                name : 'The Maid of Orléans',
                type : 'Passive',
                rage : '',
                about : 'Increase troops\' gathering speed and increase troops\' load.',
                update : `Gathering Speed Bonus: 5% / 10% / 15% / 20% / 25%\nTroop Load Bonus: 5% / 10% / 15% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill3.png') ,
                name : 'Holy Refuge',
                type : 'Passive',
                rage : '',
                about : `Troops' normal attack has a 10% chance to heal some of the slightly wounded units. Effect can only trigger once every 5 seconds.`,
                update : 'Healing Factor: 150 / 200 / 250 / 350 / 450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill4.png') ,
                name : 'Saint',
                type : 'Passive',
                rage : '',
                about : 'Increases normal attack damage.',
                update : `Normal Attack Damage Bonus: 10% / 13% / 16% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Joan/skill5.png') ,
                name : 'Descent of the Goddess',
                type : 'Update skill 1',
                rage : '',
                about : `In the next 4 seconds, Joan of Arc grants her own troops and nearby friendly forces a powerful buff that increases infantry units' health by 30%, increases cavalry units' defense by 30% increases archer units' attack by 30%, and grants an additional 50 rage per second.`,

            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [ {
            uri : 'https://rok.guide/wp-content/uploads/2019/03/joan-of-arc-gathering-build-1024x578.jpg'
        }],
        partner : [],
        trangBi : ''
    },
    {
        id: 16,
        name : 'Kusunoki Masashige',
        image : require('./../../assets/images/Commander/Epic/Kusunoki/Kusunoki.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Kusunoki/tuongKusunoki.png'),
        about : `Kusunoki Masashige was a 14th-century samurai who fought for Emperor Go-Daigo in the Genkō War, the attempt to wrest rulership of Japan away from the Kamakura shogunate and is remembered as the ideal of samurai loyalty. His origin has not been validated and it was merely six years between the start of his military campaign in 1331 and his demise in 1336. He received the highest decoration from the Meiji government of Japan in 1880. Legend has it that Emperor Go-Daigo had a dream in which he was sheltering under a camphor tree ("kusunoki"), and that this dream led him to the surname of the warrior who would support him. Kusunoki Masashige is a hero because he "stands in the history of his country as the ideal figure of a warrior, compact of civil and military virtues in a high degree."`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill1.png'),
                type : 'Active',
                name : 'Shichisei Hōkoku',
                rage : 'Rage Requirement: 1000',
                about : `Removes all negative and control effects from Kusunoki Masashige's troops. In addition, deals direct damage to a maximum of 3 targets in a fan-shaped area, then deals additional damage to targets each second for the next 2 seconds.`,
                update : `Direct Damage Factor: 150 / 180 / 210 / 250 / 300\nAdditional Damage Factor: 100 / 130 / 160 / 200 / 250`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill2.png') ,
                name : 'The Worthy Men',
                type : 'Passive',
                rage : '',
                about : 'Increases garrison counterattack damage when this commander is service as garrison commander.',
                update : 'Garrison Counterattack Damage Bonus: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill3.png') ,
                name : 'Bravery and Wisdom',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of archer units and defense of archer units.',
                update : 'Archer Attack Bonus: 4% / 5% / 6% / 8% / 10%\nArcher Defense Bonus: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill4.png') ,
                name : 'Tragedy\'s End',
                type : 'Passive',
                rage : '',
                about : 'Normal attacks of troops have a change to deal additional damage each second to the target for 2 seconds.',
                update : 'Additional damage factor: 150 / 200 / 250 / 350 / 450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Kusunoki/skill5.png') ,
                name : 'Soul of the Samurai',
                type : 'Update skill 1',
                rage : '',
                about : 'Increases the attack of archer units by 15% and defense of archer units by 15%.',

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Gathering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/kusunoki-masashige-field-battle-1024x574.png'
            }
        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 50,
        name : 'Lohar',
        image : require('./../../assets/images/Commander/Epic/Lohar/Lohar.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Lohar/tuongLohar.png'),
        about : `Lohar, born in a remote barbarian fort, showed a great fighting talent that was beyond his age. He training was very strict as part of the main force for protecting the fort. A hard childhood made him so bored at training even hate, but once he experienced a cruel fight against another fort and fell in a huge fire. He promised that one day he would grow strong enough to protect his fort no matter the cost. When he became a great leader, he met the enemy that burned his fort, he claimed the victory but didn’t achieve his revenge. He combined the two forces in a friendly way and made the force a strong power in his land.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill1.png'),
                type : 'Active',
                name : 'Overwhelming Force',
                rage : 'Rage Requirement: 1000',
                about : `Deals direct damage to a single target and heals a portion of your army's slightly wounded units.`,
                update : 'Direct Damage Factor: 150 / 200 / 250 / 350 / 450\nHealing Factor: 150 / 200 / 250 / 350 / 450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill2.png') ,
                name : 'Sanction',
                type : 'Passive',
                rage : '',
                about : 'Increases damage dealt to barbarians and other neutral units.',
                update : 'Bonus Damage to Barbarians: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill3.png') ,
                name : 'Lohar\'s Trial',
                type : 'Passive',
                rage : '',
                about : 'Increases experience received by all commanders in the current army.',
                update : `Experience Bonus: 10% / 20% / 30% / 50% / 70%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill4.png') ,
                name : 'Unruly Blood',
                type : 'Passive',
                rage : '',
                about : 'Heals some slightly wounded units upon leaving a battle.',
                update : 'Healing Factor: 500 / 600 / 700 / 800 / 1000'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Lohar/skill5.png') ,
                name : 'Unyielding Spirit',
                type : 'Update skill 1',
                rage : '',
                about : 'Heals some slightly wounded units (Healing Factor 2000) upon leaving a battle.',

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Peacekeeping,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/lohar-talent-tree-1024x578.png'
            }
        ],
        partner : [],
        trangBi : 'man rợ'
    },
    {
        id: 51,
        name : 'Osman I',
        image : require('./../../assets/images/Commander/Epic/Osman/Osman.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Osman/tuongOsman.png'),
        about : `Osman Gazi, also known as Osman I, was the leader of the Ottoman Turks and the founder of the dynasty that established and ruled the Ottoman Empire. After the death of his father in 1281, at which time Osman was just 23 years old, he took up the leadership of the Kayi Clan. Soon after, mercenaries from all over the Islamic world began streaming into his realm to join the fight against the Orthodox Empire. In 1301, Osman successfully defeated a large Byzantine force and began putting pressure on Byzantine-controlled areas. This alarmed the Byzantines, who quickly fled the Anatolian countryside. Byzantium's leaders were determined to prevent Osman from crossing into Europe and attempted to check his westward expansion. Osman continued to press on, however, and soon captured the Byzantine city of Ephesus. This brought another massive, diverse influx of migrants, warriors, and adventurers into Ottoman territory. Osman was both a skilled commander and an able administrator. He expanded his realm through policies of tolerance and cooperation with Greek Christians. The Greeks welcomed the order, stability, and security that Osman's rule brought, which came at a time when the central administration in Constantinople was slowly falling into disarray. Free from government interference, Greeks and Turks began to marry and create families, and eventually, a large number of Christians adopted the Muslim faith. Religious tolerance became the defining characteristic of the Ottoman Empire for the next 600 years.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Osman/skill1.png'),
                type : 'Active',
                name : 'The Empire Awakens',
                rage : 'Rage Requirement: 1000',
                about : 'Strikes a powerful blow with the Sword of Osman, dealing massive damage to the target.',
                update : 'Direct Damage Factor: 400 / 500 / 600 / 700 / 850'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill2.png') ,
                name : 'Radiance of Bursa',
                type : 'Passive',
                rage : '',
                about : 'After attacking a city for than 30 seconds, increases troop attack for a duration of 120 seconds.',
                update : 'Attack Bonus: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill3.png') ,
                name : 'Sword of Osman',
                type : 'Passive',
                rage : '',
                about : 'After an active skill is used, deals additional damage to the target on the next turn.',
                update : 'Direct Damage Factor: 150 / 200 / 250 / 300 / 400'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill4.png') ,
                name : 'Sultan\'s Glory',
                type : 'Passive',
                rage : '',
                about : 'Increase troop capacity.',
                update : 'Troop Capacity Bonus: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Osman/skill5.png') ,
                name : 'Rising Empire',
                type : 'Update skill 1',
                rage : '',
                about : 'Strikes a powerful blow with the Sword of Osman, dealing massive damage (Damage Factor 1100) to the target.',

            },

        ],
        VanMinh : VanMinhImage.Ottoman,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/osman-talent-1-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/osman-talent-2-1024x576.png'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 52,
        name : 'Pelagius',
        image : require('./../../assets/images/Commander/Epic/Pelagius/Pelagius.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Pelagius/tuongPelagius.png'),
        about : `Pelagius was a Visigothic nobleman who founded the Kingdom of Asturias, ruling it from 718 until his death in 737. Through his victory at the Battle of Covadonga, he is credited with beginning the Reconquista, the Christian reconquest of the Iberian peninsula from the Moors. He established an independent Christian state in opposition to Moorish hegemony. The chief sources for Pelagius's life and career are two Latin chronicles written in the late ninth century in the kingdom he founded. The former is the Chronica Albeldensia, written at Albelda towards 881, and the latter is Chronicle of Alfonso III, which was revised in the early century.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill1.png'),
                type : 'Active',
                name : 'Charge',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damge to the target, and deals additional damage per second in the next 2 seconds. Restores rage after casting',
                update : 'Direct Damage Factor: 150 / 180 / 210 / 250 / 300\nAdditional Damage Factor: 150 / 180/ 210 / 250 / 300\nRage Restored: 50 / 60 / 70 / 80 / 100'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill2.png') ,
                name : 'Founder of Asturias',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of cavalry units and defense of cavalry units.',
                update : 'Cavalry Attack Bonus: 4% / 5% / 6% / 8% / 10%\nCavalry Defense Bonus: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill3.png') ,
                name : 'Retaking Lost Territory',
                type : 'Passive',
                rage : '',
                about : `Increase the attack of garrison and watchtower attack when this commander is serving as the garrison commander.`,
                update : 'Garrison/Watchtower Attack Bonus: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill4.png') ,
                name : 'The Mutineer',
                type : 'Passive',
                rage : '',
                about : `Troops' normal attack has a 10% chance to heal some slightly wounded units every per second for 2 seconds.`,
                update : 'Healing Factor: 150 / 200 / 250 / 350 / 450'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Pelagius/skill5.png') ,
                name : 'Oath of Asseuua',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of cavalry units by 15% and defense of cavalry units by 15%.',

            },

        ],
        VanMinh : VanMinhImage.Span,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/pelagius-pvp-talent-tree-1-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/pelagius-pvp-talent-tree-2-1024x578.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/03/pelagius-garrison-talent-tree-2-1024x578.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 53,
        name : 'Scipio Africanus',
        image : require('./../../assets/images/Commander/Epic/Scipio/Scipio.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/Scipio/tuongScipio.png'),
        about : `Publius Cornelius Scipio Africanus was a Roman general and later consul who is often regarded as one of the greatest generals and military strategists of all time. His main achievements were during the Second Punic War where he is best kn own for defeating Hannibal at the final battle at Zama in 202 BC, one of the feats that earned him the agnomen Africanus. Althrough considered a hero by the general Roman populace, primarily for his contributions in the struggle against the Carthainians, Scipio was reviled by other patricians of his day. In his later years, he was tried for bribery and treason, unfounded charges that were only meant to discredit him before the public. Disillusioned by the ingratitude of his peers, Scipio left Rome and withdrew from public life.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill1.png'),
                type : 'Active',
                name : 'Military Life',
                rage : 'Rage Requirement: 1000',
                about : 'Reduces damage taken by troops and increases troop\'s counterattack damage for 5 seconds.',
                update : `Damage Taken Reduced By: 10% / 13% / 16% / 20% / 25%\nCounterattack Damage Bonus: 10% / 13% / 16% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill2.png') ,
                name : 'Patient Warrior',
                type : 'Passive',
                rage : '',
                about : 'When attacked, Scipio has a 10% chance to increase his troops\' attack for the next 1 seconds. Effect can only trigger once every 5 seconds. Scipio has a 10% chance to heal a potion of his slightly wounded units when his army has less than 40% of its units remaining.',
                update : `Attack Bonus: 30% / 40 % / 60% / 80% / 100%\nHealing Factor: 150 / 200 / 250 / 350 / 450`
            },
            {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill3.png') ,
                name : 'Conqueror of Africa',
                type : 'Passive',
                rage : '',
                about : 'Increases all damage when attack other Governors\' cities.',
                update : 'Damage Bonus: 1% / 2% / 3% / 5% / 7%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill4.png') ,
                name : 'Genuine Aristocracy',
                type : 'Passive',
                rage : '',
                about : 'Increases maximum troop capacity.',
                update : 'Troop Capacity Bonus: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/Scipio/skill5.png') ,
                name : 'Utter Annihilation',
                type : 'Update skill 1',
                rage : '',
                about : 'When attacked, Scipio has a 15% chance to increase his troops attack by 100% for the next 2 seconds. Effect can only trigger once every 5 seconds. Scipio has a 15% chance to heal a portion of his slightly wounded units (Healing Factor 500) when his army has less than 40% of its units remaining.',

            },

        ],
        VanMinh : VanMinhImage.Rome,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/scipio-talent-tree-1024x576.png'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 54,
        name : 'Sun tzu', 
        image : require('./../../assets/images/Commander/Epic/SunTzu/SunTzu.png'),
        tuongImage: require('./../../assets/images/Commander/Epic/SunTzu/tuongSunTzu.png'),
        about : `Sun Tzu was a Chinese general, military strategist, writer, and philosopher who lived in the Eastern Zhou period of ancient China. Sun Tzu is traditionally credited as the author of The Art of War, a widely influential work of military strategy that has affected both Western and East Asian philosophy and military thinking. Sun Tzu's work has been praised and employed throughout East Asian warfare since its composition. During the twentieth century, The Art of War grew in popularity and saw practical use in Western society as well. It continues to influence many competitive endeavors in East Asia and Western World including culture, politics, business, and sports, as well as modern warfare.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill1.png'),
                type : 'Active',
                name : 'Art of War',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damage to a maximum of 3 targets in a fan-shaped area, and deals additional damage to these targets on the next turn. Sun Tzu gains additional rage for each target hit by his skills.',
                update : 'Direct Damage Factor: 150 / 210 / 270 / 360 / 450\nAdditional Damage Factor: 50 / 70 / 90 / 120 / 150\nRage Restored: 10 / 20 / 30 / 40 / 50'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill2.png') ,
                name : 'Philosophy of War',
                type : 'Passive',
                rage : '',
                about : 'Reduces damage taken by the garrison when this commander is serving as the garrison commander.',
                update : 'Garrison Troops Damage Reduction: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill3.png') ,
                name : 'Master Strategist',
                type : 'Passive',
                rage : '',
                about : 'Increases troop damage reduction; increases infantry unit health.',
                update : 'Damage Taken Reduced By: 4% / 5% / 6% / 8% / 10%\nInfantry Health Bonus:4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill4.png') ,
                name : 'Ever-changing Tactics',
                type : 'Passive',
                rage : '',
                about : 'Increases active skill damage.',
                update : 'Skill Damage Bonus: 5% / 8% / 11% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Epic/SunTzu/skill5.png') ,
                name : 'Book of Aeons',
                type : 'Update skill 1',
                rage : '',
                about : 'Deals direct damage (Damage Factor 800) to a maximum of 5 targets in a fan-shaped area, and deals additional damage (Damage Factor 200) to these targets on the next turn. Sun Tzu gains additional 50 rage for each target hit by this skill.',

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/stun-tzu-talent-tree-1024x576.png'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
]
