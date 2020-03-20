import VanMinhImage from './../database/VanMinh';
import TalentIcon from './../database/Icon';
export default [
    {
        id: 22,
        name : 'Takeda Shingen',
        image : require('./../../assets/images/Commander/Legendary/TakedaShingen/TakedaShingen.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/TakedaShingen/tuongTakedaShingen.png'),
        about : `Takeda Shingen, original name Takeda Harunobu, (born December 1, 1521, Kai province [now Yamanashi prefecture], Japan—died May 13, 1573. Komaba, Shlnano province [now Nagano prefecture], daimyo (feudal lord) and one of the most famous military leaders of Japan, who struggled for mastery of the strategic Kanté Plain in east-central Honshu during the chaotic Sengoku ("Warring States") period of civil unrest in the 16th century. Takeda is especially well known for his series of battles (1553-64) with the noted warrior Uesugi Kenshin. which not only are famous in the annals of Japanese history but are also much celebrated in Japanese drama and folklore.\nTakeda Harunobu was born into the powerful Takeda clan of Shugo daimyo (military governors) who at the time controlled Kai province (present-day Yamanashi Prefecture), a mountainous region west of the Kanto Plain. in 1541 he forced his father. Takeda Nobutora, to retire as head of the clan, and Harunobu assumed that position. He soon began expanding his family\'s domains northward into Shinano province (present-day Nagano prefecture) and into other lands adjacent to Kai. He entered the priesthood in 1551, at which time he assumed the Buddhist name Shingen. Taking religious vows, however, in no way hampered his participation in worldly affairs.\nSoon thereafter, Takeda began his struggle with Uesugi for mastery of the Kanto. Although their battles over more than a decade were relatively indecisive, Takeda became recognized as one of the most powerful military leaders in east~centraiJapan. As such, he posed a threat to the powerful warrior Oda Nobunaga, who was attempting to unify Japan under his control, and to Tokugawa Ieyasu, Oda's ally and founder of the Tokugawa shogunate (military dictatorship). Takeda defeated an army led by Tokugawa near Hamamatsu (in present~day Shizuoka prefecture) in January 1573, and he made further inroads into Tokugawa-controlled territory before he died of a terminal illness later that year. His son and successor, Takeda Katsuyori, was defeated by Oda and Tokugawa in the early 15805, thus ending the Takeda family's power.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill1.png'),
                type : 'Active',
                name : 'Fierce as the Fire',
                rage : 'Rage Requirement: 1000',
                about : 'Takeda Shingen debuffs an enemy single target for4 seconds, each time this target receives a normal attack. there is a 50% chance to receive extra normal attack damage. This effect can only trigger once every 2 seconds.',
                update : 'Enemy Additional Normal Damage Taken: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill2.png') ,
                name : 'Swift as the Wind',
                type : 'Passive',
                rage : '',
                about : `Increases cavalry units' attack, and grants normal attacks 10% chance to increase march speed for 3 seconds.`,
                update : 'Cavalry Attack Bonus: 10% / 15% / 20% / 30% / 40%\nMarch Speed Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill3.png') ,
                name : 'Gentle as the Forest',
                type : 'Passive',
                rage : '',
                about : `For 4 seconds after using Fierce as the Fire, heals a portion of slightly wounded units every second. When the army led by this commander contains only cavalry units, increases defence.`,
                update : 'Cavalry Defense Bonus: 20% / 25% / 30% / 35% / 40%\nHealing Factor: 100 / 130 / 160 / 200 /250'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill4.png') ,
                name : 'Immovable as the Mountain',
                type : 'Passive',
                rage : '',
                about : `Skill damage against troops led by Takeda Shingen is reduced. When taking damage, there is a 10% chance to reduce normal attack damage taken and counterattack damage taken for 3 seconds.                `,
                update : 'Skill Damage Taken Reduction: 1% / 2% / 3% / 4% / 5%\nNormal Attack Damage Reduction: 5% / 10% / 15% / 20% / 25%\nCounterattack Damage Reduction: 5% / 10% / 15% / 20% / 25%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/TakedaShingen/skill5.png') ,
                name : 'Kōshū-ryū Gungaku',
                type : 'Passive',
                rage : '',
                about : `Deal an extra 30% normal attack damage to enemies who have been debuffed by Fierce as the Fire. `,

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Versatility,
            TalentIcon.Mobility,
        ],
        talentTree : [    {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/takeda-field-battle-1024x575.jpg'
        }],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 1,
        name : 'Attila',
        image : require('./../../assets/images/Commander/Legendary/Attila/Attila.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Attila/tuongAttila.png'),
        about : `Attila, frequently called Attila the Hun, as the rules of the Huns from 434 until his death in March 453. He was also the leader of a tribal empire consisting of Huns Ostrogoths and Alans among others, in Central and Eastern Europe.
        During his reign, he was one of the most feared enemies of the Western and Eastern Empires. He crossed the Danube twice and plundered the Balkans, but was unable to take Constantinople. His unsuccessful campaign in Persia was followed in 441 by an invasion of the Eastern Roman (Byzantine) Empire, the success of which emboldened Attila to invade the West. He also attempted to conquer Roman Gaul (modern France), crossing the Rhine in 451 and marching as far as Aurelianum (Orléans) before being defeated at the Battle of the Catlaunian Plains.
        He subsequently invaded Italy, devastating the northern provinces, but was unable to take Rome. He planned for further campaigns against the Romans but died in 453. After Attila's death, his close adviser, Ardaric of the Gepids, led a Germanic revolt against Hunnic rule, after which the Hunnic Empire quickly collapsed.`,
        skill :[
            {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill1.png'),
                type : 'Active',
                name : 'King of the Huns',
                rage : 'Rage Requirement: 1000',
                about : `For the next 4 seconds, increases normal attack damage and counterattack damage, and normal attacks have a chance to reduce enemy attack for 2 seconds.`,
                update : `Normal Attack Damage Bonus: 10% / 15% / 20% / 25% / 30%\nCounter Attack Damage Bonus: 10% / 15% / 20% / 25% / 30%\nEnemy Attack Reduction: 20% / 25% / 30% / 40% / 50%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill2.png') ,
                name : 'The Siege of Constantinople',
                type : 'Passive',
                rage : '',
                about : `When attacking garrisons, increases all damage dealt, and has a chance every turn to reduce the garrison's defence for 3 seconds.`,
                update : `Damage Bonus: 2% / 4% / 6% / 8% / 10%\nDefense Reduction: 5% / 10% / 15% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill3.png') ,
                name : 'Honoria',
                type : 'Passive',
                rage : '',
                about : 'Skill damage against troops led by Attila is reduced, and the skill damage dealt by his own troops is also reduced. Increases cavalry units\' March Speed and attack.',
                update : `Skill Damage Taken Reduction: 3% / 6% / 9% / 12% / 15%\nCavalry March Speed Bonus: 3% / 6% / 9% / 12% / 15%\nCavalry Attack Bonus: 20%/ 25% / 30% / 35% / 40%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill4.png') ,
                name : 'Battle of the Catalaunian Plains',
                type : 'Passive',
                rage : '',
                about : `When the army led by Attila contains only cavalry units, normal attacks have a chance to increase to his own troops' all damage dealt for the next 2 turns; has a 25% chance to increase all damage dealt, and has 25% chance to increase all damage dealt.`,
                update : `Bonus Damage (25% Chance): 25% / 30% / 35% / 40% / 50%\nBonus Damage (25% Chance): 50% / 60% / 70% / 80% / 100%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Attila/skill5.png') ,
                name : 'The Scourge of the God',
                type : 'Passive',
                rage : '',
                about : `Troops led by Attila are immune to Silence effects. Against enemy troops with less than 50% strength, increases damage dealt by 20%. Increases March Speed by 50% for 3 seconds after leaving the battle.`,
                update : `Troops led by Attila are immune to Silence effects. Against enemy troops with less than 50% strength, increases damage dealt by 20%. Increases March Speed by 50% for 3 seconds after leaving the battle.`
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [
           {
               uri : 'https://rok.guide/wp-content/uploads/2019/11/attila-talent-tree-1024x575.jpg',

           },
           {
            uri : 'https://rok.guide/wp-content/uploads/2019/11/attila-rally-attack-tree-2-1024x576.png',
            
            },
           
        ],
        partner : [
            2
        ],
        trangBi : 'kỵ binh'
    },
    {
        id: 2,
        name : 'CaoCao',
        image : require('./../../assets/images/Commander/Legendary/CaoCao/CaoCao.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CaoCao/tuongCaoCao.png'),
        about : 'Cao Cao, courtesy name Mengde, was a Chinese warlord and the penultimate Chancellor of the Eastern Han dynasty. As one of the central figures of the Three Kingdoms period, he laid the foundations for what was to become the state of Cao Wei and was posthumously honoured as "Emperor Wu of Wei". He is often portrayed as a cruel and merciless tyrant in subsequent literature; however, he has also been praised as a brilliant ruler and military genius who treated his subordinates like his family. Cao Cao had much success as the Haan chancellor, but his handling of the Han emperor Liu Xie was heavily criticized and resulted in a continued and then escalated civil war.        ',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill1.png'),
                type : 'Active',
                name : 'Dragon Rider',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damage to the target, and decreases target\'s attack and march speed for 3 seconds.',
                update : 'Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400\nAttack Reduction: 20% / 25% / 30% / 35% / 40%\nMarch Speed Reduction: 5% / 6% / 7% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill2.png') ,
                name : 'The Qingzhou Army',
                type : 'Passive',
                rage : '',
                about : 'Increases the damage on Barbarians.',
                update : 'Bonus Damage To Barbarians: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill3.png') ,
                name : 'Tiger Knight',
                type : 'Passive',
                rage : '',
                about : 'Increases cavalry units\' march speed and attack.',
                update : 'Cavalry March Speed Bonus: 3% / 4.5% / 6% / 8% / 10%\nCavalry Attack Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill4.png') ,
                name : 'Lofty Ambition',
                type : 'Passive',
                rage : '',
                about : `Troops' normal attacks have a 10% chance to heal a portion of the slightly wounded units, restores rage, and increases troops' march speed by 20% for 3 seconds. Effect can only trigger once every 2 seconds.                `,
                update : `Healing Factor Bonus: 500 / 600 / 700 / 800 / 1000\nRage Restored: 50 / 60 / 70 / 80 / 100`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CaoCao/skill5.png') ,
                name : 'Emperor Wu of Wei',
                type : 'Passive',
                rage : '',
                about : `Increases cavalry attack by 25%, decreases troop defense by 10%`,
                update : `Increases cavalry attack by 25%, decreases troop defense by 10% `
            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/cao-cao-fatest-1024x740.jpg'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 3,
        name : 'Alexander',
        image : require('./../../assets/images/Commander/Legendary/Alex/Alex.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Alex/tuongAlex.png'),
        about : `Alexander III of Macedon, commonly known as Alexander the Great, was a king (basileus) of the ancient Greek kingdom of Macedon and a member of the Argead dynasty. He was born in Pella in 356 BC and succeeded his father Philip II to the throne at the age of 20. He spent most of his ruling years on an unprecedented military campaign through Asia and northeast Africa, and by the age of thirty, he had created one of the largest empires of the ancient world, stretching from Greece to northwestern India. He was undefeated in battle and is widely considered one of history's most successful military commanders.

        During his youth, Alexander was tutored by Aristotle until age 16. After Philip's assassination in 336 BC, he succeeded his father to the throne and inherited a strong kingdom and an experienced army. Alexander was awarded the generalship of Greece and used this authority to launch his father's pan-Hellenic project to lead the Greeks in the conquest of Persia. In 334 BC, he invaded the Achaemenid Empire (Persian Empire) and began a series of campaigns that lasted 10 years. Following the conquest of Anatolia, Alexander broke the power of Persia in a series of decisive battles, most notably the battles of Issus and Gaugamela. He subsequently overthrew Persian King Darius III and conquered the Achaemenid Empire in its entirety. At that point, his empire stretched from the Adriatic Sea to the Indus River.
        
        Alexander endeavoured to reach the "ends of the world and the Great Outer Sea" and invaded India in 326 BC, winning an important victory over the Pauravas at the Battle of the Hydaspes. He eventually turned back at the demand of his homesick troops, dying in Babylon in 323 BC, the city that he planned to establish as his capital, without executing a series of planned campaigns that would have begun with an invasion of Arabia. In the years following his death, a series of civil wars tore his empire apart, resulting in the establishment of several states ruled by the Diadochi: Alexander's surviving generals and heirs.
       
        Alexander's legacy includes the cultural diffusion and syncretism which his conquests engendered, such as Greco-Buddhism. He founded some twenty cities that bore his name, most notably Alexandria in Egypt. Alexander's settlement of Greek colonists and the resulting spread of Greek culture in the east resulted in a new Hellenistic civilization, aspects of which were still evident in the traditions of the Byzantine Empire in the mid-15th century AD and the presence of Greek speakers in central and far eastern Anatolia until the 1920s. Alexander became legendary as a classical hero in the mould of Achilles, and he features prominently in the history and mythic traditions of both Greek and non-Greek cultures. He became the measure against which military leaders compared themselves, and military academies throughout the world still teach his tactics. He is often ranked among the most influential people in history.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill1.png'),
                type : 'Active',
                name : 'Shield of the King',
                rage : 'Rage Requirement: 1000',
                about : 'Alexander the Great puts up a powerful shield for 4 seconds and at the same time puts up a second, smaller shield for the nearby friendly army with the lowest percentage of troops remaining for 2 seconds (Alexander’s own army cannot gain this shield).',
                update : `Shield (Self): 600 / 700 / 800 / 1000 / 1200\nShield (Ally): 200 / 300 / 400 / 500 / 600`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill2.png') ,
                name : 'Lead the Charge',
                type : 'Passive',
                rage : '',
                about : `When incoming damage would be reduced on the map, replace the damage reduction. Each normal attack against a 10% chance to deal extra damage as well as to reduce the target’s healing effects for 5 seconds.`,
                update : `Direct Damage Factor: 800 / 1000 / 1200 / 1400 / 1700\nHealing Effect Reduction: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill3.png') ,
                name : 'Frontline Commander',
                type : 'Passive',
                rage : '',
                about : 'Increases infantry unit\'s march speed and attack while troops are on the map.',
                update : `Infantry March Speed Bonus: 10% / 15% / 20% / 25% / 30%\nInfantry Attack Bonus: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill4.png') ,
                name : 'Battle of Chaeronea',
                type : 'Passive',
                rage : '',
                about : 'Attack is increased when the shield is down. When this shield is activated, the bonus changes to defence.',
                update : 'Attack Bonus: 20% / 25% / 30% / 35% / 40%\nDefence Bonus:10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Alex/skill5.png') ,
                name : 'Son of Amun',
                type : 'Buff skill 1',
                rage : '',
                about : `Immediately put up a shield which can absorb a large amount of damage (Damage Factor 1200) for 4 seconds. At the same time, Alexander puts up a second, smaller shield for the nearby friendly army with the lowest percentage of troops remaining (Damage Factor 600) for 2 seconds, and increases the damage taken overtime by nearby enemies (up to 3 targets) by 30% for 4 seconds. `,
                update : ''
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Versatility,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/alexander-field-battle-rally-talent-tree-1024x473.png'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 4,
        name : 'Charlemagne',
        image : require('./../../assets/images/Commander/Legendary/Charlemagne/Charlemagne.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Charlemagne/tuongCharlemagne.png'),
        about : `Charlemagne, also known as Charles the Great, (2 April 742 - 28 January 814), united the majority of western and central Europe in what became known as the Carolingian Empire, the first major empire in western Europe since the fall of the Western Roman Empire.

        Charlemagne was the eldest son of Pepin the Short and Betrada of Laon. He became king in 768 following his farther's death, initially as co-ruler with his brother Carloman I. Carloman's sudden death in December 771 left Charlemagne as the sole ruler of the Frankish Kingdom. He followed in this father's footsteps, protecting the Roman Catholic Church, conquering the Lombards, and campaigning against Muslim Spain and the Saxons. He was crowned "Emperor of the Romans" by Pope Leo III on Christmas Day of the year 800.
        
        The stability of Charlemagne's empire gave birth to an age of prosperity and development known as the Carolingian Renaissance. During this time, Charlemagne gathered many of Europe's greatest scholars and artists to his court and instituting an education system for the ruling class based on those of the former Roman Empire. This period of time is perhaps best remembered for a surge in the restoration and creation of monumental architecture, great cathedrals and churches, and for the large amounts of ancient art that were preserved by Charlemagne's empire.
        
        While Charlemagne was lauded throughout Europe and by the Pope as the true Romand Emperor, this created a schism with the Byzantine Empire (aka the Eastern Roman Empire), and was among the reasons for the split of Rome and Constantinople, creating what is now called the Catholic and East Orthodox churches.
        `,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill1.png'),
                type : 'Active',
                name : 'Eagle of Jupiter',
                rage : 'Rage Requirement: 1000',
                about : 'Deal direct damage to a single target.',
                update : 'Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill2.png') ,
                name : 'Happy Home',
                type : 'Passive',
                rage : '',
                about : `While on the map, all troops under this commander have a 10% chance to gain a shield when they are attacked. This shield lasts for 4 seconds and can take a large amount of damage.                `,
                update : `Direct Damage Factor: 500 / 600 / 700 / 800 / 1000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill3.png') ,
                name : 'Plot Maneuvers',
                type : 'Passive',
                rage : '',
                about : 'When this commander initiates a Rally attack, increase the attack and defence of all rallied troops.',
                update : 'Rallied Army Attack/Defense Bonus: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill4.png') ,
                name : 'Pataum',
                type : 'Passive',
                rage : '',
                about : `For every 10% reduction in his army's strength, Charlemagne's skill damage increases. When this army has been reduced to less than 70% strength, Charlemagne's skill damage will be increased.                `,
                update : 'Skill Damage Increase (Every 10%): 1% / 2% / 3% / 4% / 5%\nSkill Damage When Attacking Cities Increase (Every 10%): 2% / 3% / 4% / 5% / 7%\nSkill Damage Increases (Max): 3% / 6% / 9% / 12% / 15%\nSkill Damage When Attacking Cities Increase (Max): 6% / 9% / 12% / 15% / 21%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Charlemagne/skill5.png') ,
                name : 'Carolingian Renaissance',
                type : 'Passive',
                rage : '',
                about : `When attacking a city, 10% fewer of your troops will die, and instead will be severly wounded.                `,
                update : `When attacking a city, 10% fewer of your troops will die, and instead will be severly wounded.                `
            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/charlemagne-skill-build-1024x574.jpg'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 5,
        name : 'Charles Martel',
        image : require('./../../assets/images/Commander/Legendary/CharlesMartel/CharlesMartel.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CharlesMartel/tuongCharlesMartel.png'),
        about : 'Charles Martel was a Frankish statesman and military leader who as Duke and Prince of the Franks and Mayor of the Palace, was the facto ruler of Francia from 718 until his death. In 732, the army of the Umayyad Caliphate led by Al Ghhafiqiii met Frankish and Burgundian forces under Charles in an area between the cities of Tours and Poitiers, leading to a decisive, historically important Frankish victory known as the Battle of Tours, ending the "last of the great Arab invasion of France", a military victory termed "brilliant" on the part of Charles. Charles is also considered to be a founding figure of the European Middle Ages. Skilled as an administrator as well as a warrior, he is credited with a seminal role in the emerging responsibilities of the knights of courts, and so in the development of the Frankish system of feudalism.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill1.png'),
                type : 'Active',
                name : 'Shield of Francia',
                rage : 'Rage Requirement: 1000',
                about : 'Charles activates a shield that can absorb massive damage for the next 4 seconds. Also increases troops\' damage while the shield is active.                ',
                update : `Direct Damage Factor: 600 / 700 / 800 / 1000 / 1200\nDamage Bonus: 10% / 14% / 18% / 24% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill2.png') ,
                name : 'Heavy Infantry',
                type : 'Passive',
                rage : '',
                about : 'Increases infantry units\' defense and health.',
                update : 'Infantry Defense Bonus: 5% / 7% / 9% / 12% / 15%\nInfantry Health Bonus: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill3.png') ,
                name : 'The Uncrowned King',
                type : 'Passive',
                rage : '',
                about : 'Increases watchtower defense and garrison damage when this commander is serving as a garrison commander.',
                update : 'Watchtower Defense Bonus: 2% / 4% / 6% / 8% / 10%\nGarrison Attack Bonus: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill4.png') ,
                name : 'Martel\'s Counterattack',
                type : 'Passive',
                rage : '',
                about : 'Increases troops\' counterattack damage.',
                update : 'Counterattack Damage Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CharlesMartel/skill5.png') ,
                name : 'Rise from the Ashes',
                type : 'Update skill  2',
                rage : '',
                about : 'Increases infantry units defense by 20%, health by 20%, and march speed by 20%.',
                update : `Increases infantry units' defense by 20%, health by 20%, and march speed by 20%.`
            },

        ],
        VanMinh : VanMinhImage.France,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Defense,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/charles-martel-field-battle-talent-tree-1-1024x575.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/charles-martel-talent-1-1024x576.png'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 6,
        name : 'Cleopatra VII',
        image : require('./../../assets/images/Commander/Legendary/CleopatraVII/CleopatraVII.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/CleopatraVII/tuongCleopatraVII.png'),
        about : 'Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt, nominally survived as pharaoh by her son Caesarion. She was also a diplomat, naval commander, polyglot and medical author. As a member of the Ptolemaic dynasty, she was a descendant of its founder, Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great. After the death of Cleoptra, Egypt became a province of the Roman Empire, marking the end of the Hellenistic period that had lasted since the reign of Alexander. Her native language was Koine Greek and she was the first Ptolemaic ruler to learn the Egyptian language.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill1.png'),
                type : 'Active',
                name : 'Queen of Kings',
                rage : 'Rage Requirement: 1000',
                about : 'Heals some of the slightly wounded units in your army and nearby friendly armies and increases defense of these troops for the next 2 seconds.',
                update : 'Healing Factor : 150 / 200 / 250 / 300 / 400\nDefense Bonus: 5 % / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill2.png') ,
                name : 'End of Ptolemy',
                type : 'Passive',
                rage : '',
                about : `Increase stone gathering speed; increases food, wood and gold gathering speed`,
                update : 'Bonus Gathering Speed (stone): 5% / 10% / 15% / 20% / 30%\nBonus Gathering Speed (Other Resources): 3% / 6% / 10% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill3.png') ,
                name : 'Beauty and Wisdom',
                type : 'Passive',
                rage : '',
                about : 'Increases troop load.',
                update : 'Load Bonus: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill4.png') ,
                name : 'The Last Pharaoh',
                type : 'Passive',
                rage : '',
                about : 'Increases siege unit attack and defense when gathering at resource points on the map.',
                update : 'Siege Unit Attack Bonus: 10% / 20% / 30% / 40% / 50%\nSiege Unit Defense Bonus: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/CleopatraVII/skill5.png') ,
                name : 'Gifts of the Nile',
                type : 'Passive',
                rage : '',
                about : `Cleopatra receives additional Resource Packs after she has finished gathering at resource points on the map.`,
                update : 'Cleopatra receives additional Resource Packs after she has finished gathering at resource points on the map.'
            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : `https://rok.guide/wp-content/uploads/2019/09/cleopatra-cavalry-trap-1024x558.jpg`
            },
            {
                uri : `https://rok.guide/wp-content/uploads/2019/09/cleopatra-support-build-1024x558.jpg`
            }
        ],
        partner : [],
        trangBi : 'thu gom'
    },
    {
        id: 7,
        name : 'Constantine I',
        image : require('./../../assets/images/Commander/Legendary/Constantine/Constantine.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Constantine/tuongConstantine.png'),
        about : `Constantine the Great, also known as Constantine I or Saint Constantine, was a Roman Emperor of Illyrian and Greek origin. As emperor, Constantine enacted administrative, financial, social and military reforms to strengthen the empire. He restructured the government, separating civil and military authorities. To combat inflation he introduced the solidus, a new gold coin that became the standard for Byzantine and European currencies for more than a thousand years. The Roman army was reorganized to consist of mobile field units and garrison soldiers capable of countering internal threats and barbarian invasions.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill1.png'),
                type : 'Active',
                name : 'Edict of Milan',
                rage : 'Rage Requirement: 1000',
                about : `For the next 5 seconds, decreases the target's attack and increases troop damage reduction of his commander's army and nearby friendly armies.`,
                update : `Attack Reduction: 20% / 25% / 30% / 35% / 40%\nDamage Taken Reduced By: 3% / 4% / 6% / 8% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill2.png') ,
                name : 'Allegiance',
                type : 'Passive',
                rage : '',
                about : `Increases health of infantry units.`,
                update : `Infantry Health Bonus: 15% / 20% / 25% / 30% / 40%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill3.png') ,
                name : 'Impasse',
                type : 'Passive',
                rage : '',
                about : `Increases the attack of the garrison and attack of the watchtower when this commander is serving as garrison commander.`,
                update : `Garrison Attack Bonus: 3% / 4% / 6% / 8% / 10%\nWatchtower Attack Bonus: 3% / 4% / 6% / 8% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill4.png') ,
                name : 'Cross of the Divine',
                type : 'Passive',
                rage : '',
                about : `Wen the army led by this commander has been reduced to 50% strength, troops will receive a powerful healing effect. This effect can trigger a maximum of once per hour after the army has left the city.`,
                update : 'Healing Factor: 7500 / 9000 / 130000 / 150000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Constantine/skill5.png') ,
                name : 'Sole Augustus',
                type : 'Passive',
                rage : '',
                about : `Increases troop attack by 15% and defense by 5%.`,
                update : 'Increases troop attack by 15% and defense by 5%.'
            },

        ],
        VanMinh : VanMinhImage.Bi,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Constantine-1024x577.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Constantine_2-1024x577.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/constantine-garrison-tree-2-1024x577.png'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 8,
        name : 'Edward',
        image : require('./../../assets/images/Commander/Legendary/Edward/Edward.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Edward/tuongEdward.png'),
        about : `Edward of Woodstock, known to history as the Black Prince, was the eldest son of King Edward III of England, and one of the most successful English commanders during the Hundred Years' War. He died before his father, and so while he never became king, Edward was still regarded by his contemporaries as a model of chivalry and one of the greatest knights of his age.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill1.png'),
                type : 'Active',
                name : 'Archer\'s Honor',
                rage : 'Rage Requirement: 1000',
                about : `Deals massive damage to a single target. Once used, will reduce the rage of Edward's troops by 300 (cannot drop below 0 rage).`,
                update : 'Direct Damage Factor: 1500 / 1700 / 1900 / 2200 / 2500\nDamage Factor (When Secondary Commander): 750 / 850 / 950 / 1100 / 1250'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill2.png') ,
                name : 'Vengeful Crusade',
                type : 'Passive',
                rage : '',
                about : 'increases archer units\' health and march speed while troops are on the map.',
                update : `Archer Health Bonus: 10% / 15% / 20% / 25% / 30%\nArcher March Speed Bonus: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill3.png') ,
                name : 'Crécy\'s Campaign',
                type : 'Passive',
                rage : '',
                about :  `When the army led by this commander contains only archer units, increases skill damage and increases damage dealt to infantry units by archer units.`,
                update : `Skill Damage Bonus: 5% / 10% / 15% / 20% / 25%\nDamage To Infantry Units Increased By: 1% / 2% / 3% / 4% / 5%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill4.png') ,
                name : 'Limoges\' Ambush',
                type : 'Passive',
                rage : '',
                about : `When the army led by this commander is at 70% strength or higher, increases the attack of archer units and decreases defence by 10%.`,
                update : 'Archer Attach Bonus: 15% / 20% / 25% / 30% / 40%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Edward/skill5.png') ,
                name : 'All or Nothing',
                type : 'Passive',
                rage : '',
                about : `Increases normal attack and counterattack damage by 50% for 2 seconds after using a skill.`,
                update : `Increases normal attack and counterattack damage by 50% for 2 seconds after using a skill. `
            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/edward-rally-attack-tree-1024x576.png',
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-2-1024x576.png',
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-1-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/07/edward-of-woodstock-skill-tree-3-1024x576.png'
            }

        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 9,
        name : 'El Cid',
        image : require('./../../assets/images/Commander/Legendary/ElCid/ElCid.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/ElCid/tuongElCid.png'),
        about : `Rodrigo Díaz de Vivar was a Castillian nobleman and military leader in medieval Spain. The Moors called him El Cid, which meant the Lord (probably from the original Arabic al-Sayyid, السَّيِّد). In 1904, after the fall of Valentia, El Cid established an independent principality on the Mediterranean coast of Spain. He ruled over a pluralist society with the popular support of Christians and Muslims alike. The figure of El Cid has been the source for many literary works, beginning with the Canter del Mio Cid, an epic poem from the 12th century which gives a partly-fictionalized account of his life. This poem, along with similar later works such as the Mocedades de Rodrigo, contributed to portray El Cid as a chivalric hero of the Reconquista, making him a legendary figure in Spain.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill1.png'),
                type : 'Active',
                name : 'Famous Warrior',
                rage : 'Rage Requirement: 1000',
                about : `Deals direct damage to the target, and disables target's normal attacks and active skills for 1 second.`,
                update : `Direct Damage Factor: 500 / 600 / 700 / 800 / 1000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill2.png') ,
                name : `Poem of El Cid`,
                type : 'Passive',
                rage : '',
                about : 'El Cid\'s troops have a 10% chance to deal additional damage to the target.',
                update : 'Additional Damage Factor: 500 / 600 / 700 / 800 / 1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill3.png') ,
                name : 'Guardian of Valencia',
                type : 'Passive',
                rage : '',
                about : 'Increases archer units\' defense and march speed.',
                update : `Archer Defence Bonus: 10% / 12% / 14% / 16% / 20%\nArcher March Speed Bonus: 5% / 7% / 9% / 12% / 15%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill4.png') ,
                name : `Unyielding`,
                type : 'Passive',
                rage : '',
                about :    `When Cid's army has been reduced to less than 50% of his units, increases the damage of all troops and march speed of all troops. The effect lasts until the army is disbanded.`,
                update : `Damage Bonus: 5% / 10% / 15% / 20% / 25%\nMarch Speed Bonus: 5% / 10% / 15% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/ElCid/skill5.png') ,
                name : 'Out of Control',
                type : 'Passive',
                rage : '',
                about :  `Increases damage dealt to infantry units by archer units by 5%, and decreases damage taken from infantry units by archer units by 5%.`,

            },

        ],
        VanMinh : VanMinhImage.Span,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/el-cid-archer-build-1024x558.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/el-cid-skill-tree-1024x558.jpg'
            }
        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 10,
        name : 'Frederick I',
        image : require('./../../assets/images/Commander/Legendary/Frederick/Frederick.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Frederick/tuongFrederick.png'),
        about : `Frederick I, also known as Frederick Barbarossa, was the Holy Roman Emperor from 1155 until his death. Historians consider him among the Holy Roman Empire's greatest medieval emperors. He combined qualities that made him appear almost superhuman to his contemporaries: his ambition, his skills at organization, his battlefield acumen and his political perspicuity. Among his contribution to Central European society and culture include the re-establishment of the Corpus Juris Civilis, or the Roman rule of law, which counterbalanced the papal power that dominated the German states since the conclusion of the Investiture Controversy. Frederick died in 1190 in Asia Minor while leading an army in the Third Crusade.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill1.png'),
                type : 'Active',
                name : 'Barbarossa',
                rage : 'Rage Requirement: 1000',
                about : `For the next 3 seconds, all attacks have a 80% chance to deal additional damage to the target.`,
                update : `Direct Damage Factor: 400 / 500 / 600 / 700 / 800`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill2.png') ,
                name :  `Never Give Up`,
                type : 'Passive',
                rage : '',
                about : `Troops' normal attack has a 10% chance to heal a portion of the slightly wounded units. This effect can only trigger once every 5 seconds.`,
                update : 'Healing Factor: 500 / 600 / 700 / 800 / 1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill3.png') ,
                name : `Invasion`,
                type : 'Passive',
                rage : '',
                about : `Increases all damage when attacking other Governors' cities.`,
                update : `Infantry Attack Bonus: 2% / 4% / 6% / 8% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill4.png') ,
                name : 'King of Deutschland',
                type : 'Passive',
                rage : '',
                about : 'Increases maximum troop capacity.',
                update : `Troop Capacity Bonus: 3% / 6% / 9% / 12% / 15%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Frederick/skill5.png') ,
                name :  `Furious Barbarossa`,
                type : 'Passive',
                rage : '',
                about : `For the next 3 seconds, all attacks have a 100% chance to deal additional damage (Damage Factor 800) to the target.`,

            },

        ],
        VanMinh : VanMinhImage.Germany,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/Fredrick-Field-Battle-tree-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/frederick-1-skilled-leadership.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/uncle-fred-ultimate-build-1024x677.jpg'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 11,
        name : 'Genghis Khan',
        image : require('./../../assets/images/Commander/Legendary/Khan/Khan.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Khan/tuongKhan.png'),
        about : `Genghis Khans, born Temüjin, was the founder of the largest contiguous empire in history - the Mongol Empire. His father, the head of a nomadic Mongol tribe, was killed by Tatars when Temüjin was only nine, and his family was abandoned by their clan. Temüjin’s rise to power began soon after a shaman by the name of Kokochu declared that he had been chosen by the Eternal Blue Sky to rule the world. By 1206, he had united all of the fractured tribes living on the Mongol plains and assumed a new title, “Genghis Khan”, signifying his position as universal ruler. Genghis Khan quickly embarked on a series of successful invasions into China and Central Asia. He was a brilliant military leader and shrewd politician, allowing him to consolidate the lands he conquered under Mongol leadership. Genghis Khan died in 1227, after conquering the Western Xia dynasty. According to legend, his body was returned to Mongolia by a mounted funeral escort that killed anyone and anything that crossed their path on the way to their destination. Once the burial was complete, the escort then stampeded over the burial grounds, planted trees to further conceal the site, and finally committed suicide to ensure that the secret would never be revealed.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill1.png'),
                type : 'Active',
                name : `Chosen One`,
                rage : 'Rage Requirement: 950',
                about : `Attacks a single target, dealing massive damage (Damage Factor 800). `,
                update : 'Direct Damage Factor: 800 / 1000 / 1200 / 1400 / 1700'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill2.png') ,
                name : 'Cyclone of the Steppes',
                type : 'Passive',
                rage : '',
                about : `Reduces rage cost of abilities by 20 and increases cavalry march speed by 3%. When troops led by this commander are attacked, this march speed bonus will be lost, and troop march speed will be further reduced 30%.`,
                update : 'Rage Requirement Reduction: 20 / 40 / 60 / 80/ 100\nCavalry March Speed Bonus: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill3.png') ,
                name : 'Nomandic Empire',
                type : 'Passive',
                rage : '',
                about : `While the army led by this commander is at more than 70% strength, and contains only cavalry units, increases all damage dealt by 10%.`,
                update : 'Damage Bonus: 10% / 15% / 20% / 25% / 30% '
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill4.png') ,
                name : 'Military Lifestyle',
                type : 'Passive',
                rage : '',
                about : `When the army led by this commander contains only cavalry units and has ben reduced to less than 50% strength, increasees skill damage dealt by 10% and grants an additional 5 rage when attacked. `,
                update : `Skill Damage Bonus: 10% / 15% / 20% / 25% / 30%\nRage Restored: 5 / 10 / 15 / 20 / 25`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Khan/skill5.png') ,
                name : 'Second to None',
                type : 'Passive',
                rage : '',
                about : `If the "Chosen One" skill is used while the army led by this commander contains only cavalry units, grants a 30% chance that the "Chosen One" skill (Level 5) can be used again instantly.`,

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Versatility,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/ghenghis-khan-talent-tree-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/genghis-khan-talent-tree-1024x576.png'
            },
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 12,
        name : 'Guan Yu',
        image : require('./../../assets/images/Commander/Legendary/GuanYu/GuanYu.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/GuanYu/tuongGuanYu.png'),
        about : `Guan Yu, courtesy name Yunchang, was a general serving under the warlord Liu Bei during the late Eastern Han dynasty of China. Along with Zhang Fei, he shared a brotherly relationship with Liu Bei and accompanied him on most of his early exploits. Guan Yu played a significant role in the events leading up to the end of the Han dynasty and the establishment of Liu Bei's state of Shu Han during the Three Kingdoms period. While he is remembered for his loyalty towards Liu Bei, he is also known for repaying Cao Cao's kindness by slaying Yan Liang, a general under Cao Cao's rival Yuan Shao, at the Battle of Boma. After Liu Bei gained control of Yi Province in 214, Guan Yu remained in Jing Province to govern and defend the area for about seven years. In 219, while he was away fighting Cao Cao's forces at the Battle of Fancheng, Liu Bei's ally Sun Quan broke the Sun–Liu alliance and sent his general Lü Meng to conquer Liu Bei's territories in Jing Province. By the time Guan Yu found out about the loss of Jing Province after his defeat at Fancheng, it was too late. He was subsequently captured in an ambush by Sun Quan's forces and executed.

        Guan Yu's life was lionised and his achievements glorified to such an extent after his death that he was deified during the Sui dynasty. Through generations of storytelling, culminating in the 14th-century historical novel Romance of the Three Kingdoms, his deeds and moral qualities have been given immense emphasis, making Guan Yu one of East Asia's most popular paradigms of loyalty and righteousness. He is still worshipped by many Chinese people today in mainland China, Taiwan, Tibet, Hong Kong and among many overseas Chinese communities. In religious devotion, he is reverentially called the "Divus Guan" (Guān Dì) or "Lord Guan" (Guān Gōng). He is a deity worshipped in Chinese folk religion, popular Confucianism, Taoism, and Chinese Buddhism, and small shrines to him are almost ubiquitous in traditional Chinese shops and restaurants. His hometown Yuncheng has also named its airport after him.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill1.png'),
                type : 'Active',
                name : 'Saint of War',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damage to up to 3 enemies in a fan-shaped area and silences these targets for 3 seconds (damage dealt to all targets will be decreased by 15% for each additional enemy). When Guan Yu is serving as the secondary commander, decrease Damage Factor.',
                update : `Damage Factor (When Secondary Commander): 550 / 650 / 750 / 850 / 1000\nDirect Damage Factor: 1100 / 1300 / 1500 / 1700 / 2000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill2.png') ,
                name : 'Five Tiger Generals',
                type : 'Passive',
                rage : '',
                about : 'When attacking garrisons, increases normal attack damage. Normal attacks have a 10% chance to reduce a single target\'s attack for 3 seconds.',
                update : 'Normal Attack Damage Bonus: 3% / 6% / 9% / 12% / 15%\nAttack Reduction: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill3.png') ,
                name : `The Slaying of Hua Xiong`,
                type : 'Passive',
                rage : '',
                about : `Increases infantry units' attack and march speed. Upon leaving battle, Guan Yu heals a portion of slightly wounded units.`,
                update : `Infantry Attack Bonus: 10% / 15% / 20% / 25% / 30%\nInfantry March Speed Bonus: 3% / 6% / 9% / 12% / 15%\nHealing Factor: 500 / 600 / 700 / 800 / 1000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill4.png') ,
                name : 'Green Dragon Crescent Blade',
                type : 'Passive',
                rage : '',
                about : `When the skill "Saint of War" hits only 1 target, there is a 50% chance to deal additional damage to the target. When the skill hits 2 or more targets, there is a 50% chance to deal additional damage to the current target.`,
                update : 'Additional Damage Factor (1 Target): 600 / 700 / 800 / 900 / 1000\nAdditional Damage Factor (2+ Target): 800 / 900 / 1000 / 1200 / 1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/GuanYu/skill5.png') ,
                name : 'Lone Rider',
                type : 'Passive',
                rage : '',
                about : `Whenever Guan Yu gains a shield, he also increases his active skill damage by 15% for 3 seconds. Whenever Guan Yu leaves a structure, he increases his march speed by 100% for 3 seconds.`,

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/Guan-Yu-Field-Battle-1024x684.jpg'
            },
           
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 13,
        name : 'Hannibal Barca',
        image : require('./../../assets/images/Commander/Legendary/HannibalBarca/HannibalBarca.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/HannibalBarca/tuongHannibalBarca.png'),
        about : `Hannibal Barca was a Carthaginian general, considered one of the greatest military commanders in history. His father Hamilcar Barca was the leading Carthaginian commander during the First Punic War. His younger brothers were Mago and Hasdrubal, and he was brother-in-law to Hasdrubal the Fair. Hannibal lived during a period of great tension in the western Mediterranean Basin when the Roman Republic established its supremacy over great powers such as ancient Carthage, the Etruscans, Samnites and the Greek king of Syracuse. One of his most famous achievements was the outbreak of the Second Punic War when he marched an army which included war elephants from Iberia over the Pyrenees and the Alps into Italy. In his first few years in Italy, he won three dramatic victories - the Trebia, Lake Trasimene, and Cannae, in which he distinguished himself for his ability to determine his and his opponents' respective strengths and weaknesses, and to plan the battle accordingly - and won over many allies of Rome. Hannibal occupied much of Italy for 15 years but was unable to march on Rome. An enemy counter-invasion of Nort Africa forced him to return to Carthage, where he was decisively defeated by Scipio Africanus at the Battle of Zama.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill1.png'),
                type : 'Active',
                name : 'War Elephants',
                rage : 'Rage Requirement: 1000',
                about : `Deals direct damage to a single target then decreases target's damage and defense for the next 5 seconds.`,
                update : `Direct Damage Factor: 150 / 200 / 250 / 300 / 400\nDamage/Defense Reduction: 10% / 13% / 16% / 20% / 25%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill2.png') ,
                name : `Envelopment Tactics`,
                type : 'Passive',
                rage : '',
                about : `When Hannibal's army contains 2 different unit types, all damage is increased. If this army contains 3 different types, all damage is even further increased. (Warriors and swordsmen are the same unit type, while warriors and slingers are different unit types.)`,
                update : `Bonus Damage (2 Unit Types): 1% / 2% / 3% / 4% / 5%\nBonus Damage (3 Unit Types): 5% / 6% / 7% / 8% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill3.png') ,
                name : 'Siege',
                type : 'Passive',
                rage : '',
                about : `When attacking other Goverrnors' garrisons, Hannibal has a 10% chance to heal some of his slightly wounded units.`,
                update : `Healing Factor: 500 / 600 / 700 / 800 / 1000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill4.png') ,
                name : 'Expedition',
                type : 'Passive',
                rage : '',
                about : `Increases troop capacity. When battling outside of alliance territory, increases the damage of all Hannibal's troops for 3 seconds after using a skill.`,
                update : 'Troop Capacity Bonus: 3% / 4.5% / 6% / 8% / 10%\nDamage Bonus: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/HannibalBarca/skill5.png') ,
                name : 'War Elephant Trample',
                type : 'Update skill  1',
                rage : '',
                about : `Deals direct damage (Damage Factor 400) to a single target then deals additional damage (Damage Factor 300) to 3 targets in a forward direrction on the next turn and decreases damage of the 3 targets by 25% and defense by 25% for 3 seconds.`,

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/hannibal-barca-field-battles-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/hannibal-barca-rally-attack-tree-1024x576.png'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 14,
        name : 'Ishida Mitsunari',
        image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/IshidaMitsunari.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/IshidaMitsunari/tuongIShidaMitsunari.png'),
        about : `Ishida Mitsunari was a Japanese samurai and military commander of the late Sengoku period of Japan. He is probably best remembered as the commander of the Western army in the Battle of Sekigahara following the Azuchi-Momoyama period of the 16th century. He is also known by his court title, Jibu-no-shō (治部少輔).

        Mitsunari met Toyotomi Hideyoshi when the former was still young and the latter was the daimyō of Nagahama. When Hideyoshi engaged in a campaign in the Chūgoku region, Mitsunari assisted his lord in attacks against castles like the Tottori Castle and Takamatsu Castle (in present-day Okayama).
        
        After Hideyoshi seized power, Mitsunari became known as a talented financial manager due to his knowledge and skill at calculation. From 1585 onward, he was the administrator of Sakai, a role he took together with his elder brother Ishida Masazumi. He was appointed one of the five bugyō, or top administrators of Hideyoshi's government.
        
        Mitsunari was a leader of bureaucrats in Hideyoshi's government, and was known for his unbending character. Though he had many friends, he was on bad terms with some daimyōs that were known as good warriors, including Hideyoshi's relatives Kuroda Nagamasa and Hachisuka Iemasa. Additionally, the young warrior Kobayakawa Hideaki developed a grudge against Mitsunari as a result of rumours spread by Tokugawa Ieyasu. Toward the end of Taiko Hideyoshi's life, Hideyoshi ordered the execution of his heir Hidetsugu and the execution of his family, leaving his new heir to be the extremely young child Toyotomi Hideyori. After Hideyoshi's death, the conflicts in the court worsened. The central point of the conflict was the question of whether Tokugawa Ieyasu could be relied on as a supporter of the Toyotomi government, whose nominal lord was still a child, with actual leadership falling to a council of regents. After the death of the respected "neutral" Maeda Toshiie in 1599, the conflict came to arms, with Mitsunari forming an alliance of loyalists to Toyotomi's young heir to stand against Tokugawa. Mitsunari's support largely came from the south and west of Japan, with the addition of the Uesugi clan in the north, while Tokugawa's support came from central and northern Japan, but had influence and intimidation over some of the Western lords. The titular head of the Western alliance was Mōri Terumoto, but Mōri stayed entrenched in his castle; leadership fell to Mitsunari in the field. In 1600, he besieged Fushimi Castle before marching into direct conflict with Tokugawa's alliance at Sekigahara. A number of lords stayed neutral, watching the battle from afar, not wishing to join in the losing side. Tokugawa's forces gained the edge in the battle, especially with the betrayal of Kobayakawa Hideaki to his side, and won the battle.
        
        After his defeat, Mitsunari sought to escape, but was caught by villagers. He was beheaded in Kyoto. Other daimyōs of the Western army, like Konishi Yukinaga and Ankokuji Ekei were also executed. After execution, his head, severed from his body, was placed on a stand for all the people in Kyoto to see. His remains were buried at Sangen-in, a sub-temple of the Daitoku-ji, Kyoto.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill1.png'),
                type : 'Active',
                name : 'Battle of Sekigahara',
                rage : 'Rage Requirement: 1000',
                about : `For the next 3 seconds, increases attack of all troops led by Ishida Mitsunari, and increases the speed of rage gained.`,
                update : `Attack Bonus: 10% / 15% / 20% / 25% / 30%\nSpeed of Rage Gained: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill2.png') ,
                name : 'Go-Bugyõ',
                type : 'Passive',
                rage : '',
                about : 'Increases food gathering speed, increases wood and stone gathering.',
                update : `Bonus Gathering Speed (Food): 5% / 10% / 15% / 20% / 30%\nBonus Gathering Speed (Other Resources): 3% / 5% / 10% / 15% / 20%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill3.png') ,
                name : 'Taiko-kenchi',
                type : 'Passive',
                rage : '',
                about : `Increases load of troops led by Ishida Mitsunari. `,
                update : `Load Bonus: 10% / 20% / 30% / 40% / 50%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill4.png') ,
                name : 'Indispensable',
                type : 'Passive',
                rage : '',
                about : `Increases troop health. When serving as the secondary commander, increases active skill damage.`,
                update : `Health Bonus: 5% / 7% / 9% / 12% / 15%\nSkill Damage Bonus: 5% / 7% / 9% / 12% / 15%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/IshidaMitsunari/skill5.png') ,
                name : `Three Cups of Tea`,
                type : 'Passive',
                rage : '',
                about : `Ishida Mitsunari's troops' normal attacks have a 10% chance to heal a portion of slightly wounded units (Healing Factor 500), this effect can only trigger once every 3 seconds.`,

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://riseofkingdomsguides.com/wp-content/uploads/2020/01/Ishida-Mitsunari-.jpg'
            }
        ],
        partner : [],
        trangBi : 'thu gom'
    },
    {
        id: 15,
        name : 'Julius Caesar',
        image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/JuliusCaesar.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/JuliusCaesar/tuongJuliusCaesar.png'),
        about : `Gaius Julius Caesar was a Roman politician and general who played a critic role in the events that led the rise of the Roman Empire. Caesar rose to become one of the most powerful politicians through a number of is accomplishments, notably his victories in the Gallic Wars. After assuming control of the government, Caesar began a program of social and governmental reforms, including the creation of the Julian Calendar. His populist and authoritarian reforms angered the elites, who began to conspire against him. On the Ides of March 44 BC, Caesar was assassinated by a group of rebellious senators led by Gaius Cassius Longinus, Marcus Junius Brutus, and Decimus Junius Brutus.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill1.png'),
                type : 'Active',
                name : `Indomitable Army`,
                rage : 'Rage Requirement: 1000',
                about : `For the next 5 seconds, increase troops' attack and defense and increase all damage.`,
                update :  `Attack/Defense Bonus: 10% / 12% / 14% / 16% / 20%\nDamage Bonus: 10% / 14% / 18% / 24% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill2.png') ,
                name : 'Divine Julius',
                type : 'Passive',
                rage : '',
                about : `Reduces damage taken by Caesar's troops. When Caesar's army has been reduced to 60% or less of his units, he has a 10% chance to further reduce damage taken for the next 3 seconds whenever his troops are attacked. The effect can only trigger once every 5 seconds.`,
                update : `Damage Taken Reduced By: 3% / 4.5% / 6% / 8% / 10%\nAdditional Damage Reduction: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill3.png') ,
                name : 'City Killer',
                type : 'Passive',
                rage : '',
                about : `Caesar has a 10% chance to reduce enemy defense per turn when attacking other Governor's cities. The effect lasts for 3 seconds.`,
                update : 'Defense Reduction: 5% / 10% / 15% / 20% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill4.png') ,
                name : 'The Founders',
                type : 'Passive',
                rage : '',
                about : 'Increases maximum troops capacity.',
                update : 'Troop Capacity Bonus: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/JuliusCaesar/skill5.png') ,
                name : 'Ahead of His Time',
                type : 'Update skill  1',
                rage : '',
                about : `Deals direct damage (Damage Factor 400) to the target, and, for the next 5 seconds, increases troops' attack and defence by 20% and increases all damage by 30%.`,

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
                uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-3-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-2-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-1-1024x576.png'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 16,
        name : 'Leonidas I',
        image : require('./../../assets/images/Commander/Legendary/Leonidas/Leonidas.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Leonidas/tuongLeonidas.png'),
        about : `Leonidas I was a warrior king of the Greek city-state of Sparta, and the 17th of the Agiad line; a dynasty which claimed descent from the mythological demigod Heracles and Cadmus. He was the husband of Gorgo, the daughter of Cleomenes I of Sparta. Leonidas had a notable participation in the Second Persian War, where he led the allied Greek forces to a last stand at the Battle of Thermopylae (480 BC) while attempting to defend the pass from the invading Persian army; he entered myth as the leader of the 300 Spartans.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill1.png'),
                type : 'Active',
                name : 'King of Sparta',
                rage : 'Rage Requirement: 1000',
                about : `Increases the health of troops led by Leonidas I for 3 seconds. Deals damage to up to 3 targets a fan-shaped area. Targets under the effects of Silence or Attack Reduction will take an additional 50% damage.`,
                update : `Health Bonus: 10% / 15% / 20% / 25% / 30%\nDirect Damage Factor: 200 / 300 / 400 / 500 / 600`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill2.png') ,
                name : 'Three Hundred Spartans',
                type : 'Passive',
                rage : '',
                about : `When the army led by this commander contains only infantry units, increases defense and increases speed of rage gained.`,
                update : `Defense Bonus: 10% / 15% / 20% / 25% / 30\nSpeed of Rage Gained: 5% / 7% / 9% / 12% / 15%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill3.png') ,
                name : 'Honorable Sacrifice',
                type : 'Passive',
                rage : '',
                about : `When the army led by this commander has been reduced to less than 50% strength, there is a chance to gain a shield when attacked that lasts for 3 seconds. While the shield lasts, increase the attack of own infantry troops by 3%.`,
                update : `Shield (Self): 600 / 650 / 700 / 750 / 800\nAttack Bonus: 3% / 6% / 9% / 12% / 15%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill4.png') ,
                name : 'Son of the Lion',
                type : 'Passive',
                rage : '',
                about : `While on the map, Leonidas I's attack have a 25% chance to increase all damage dealth by his own troops, lasts for 5 seconds and stacks up to 4 times.`,
                update : 'Damage Bonus: 5% / 6% / 7% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Leonidas/skill5.png') ,
                name : 'Battle of Thermopylae',
                type : 'Passive',
                rage : '',
                about : `When the army led by this commander has been reduced to less than 10% strength, increase all damage dealt by 400% and increase damage reduction by 50%, lasts for 10 seconds. This effect can trigger only once per hour after the army has left the city.`,

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Versatility,
            TalentIcon.Defense,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/Leonidas-Field-Battle-1024x576.jpg'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 17,
        name : 'Mehmed II',
        image : require('./../../assets/images/Commander/Legendary/Mehmed/Mehmed.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Mehmed/tuongMehmed.png'),
        about : `Mehmed II, commonly known as “The Conqueror” was a Turkish sultan who conquered Constantinople and ruthlessly consolidated and expanded the Ottoman Empire with a military crusade into Asia and Europe.

        Mehmed conquered the Byzantine capital of Constantinople in 1453, then rebuild it into the prosperous Ottoman capital of Istanbul. His next goal was to create a world empire with conquest, reunifying Anatolia and pressing into Southeast Europe as far west as Bosnia. He also developed the Janissary infantry corps – young Christian warriors who were given salaries to keep them loyal to the sultan.
        
        Mehmed was a proponent of religious freedom and emphasized the importance of justice of all. During his reign, mathematics, astronomy and Muslim theology reached their high point among the Ottomans. Today, Mehmed is considered a hero in Turkey and parts of the wider Islamic world.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill1.png'),
                type : 'Active',
                name : 'Ottoman Cannons',
                rage : 'Rage Requirement: 1000',
                about : `Deals damage to enemies in a forward-facing fan-shaped area (maximum 5 targets). This skill deals additional damage to city garrisons and watchtowers.`,
                update : `Direct Damage Factor: 450 / 600 / 700 / 950 / 1150\nAdditional Damage Factor: 300 / 400 / 500 / 600 / 700`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill2.png') ,
                name : 'Lord of Land and Sea',
                type : 'Passive',
                rage : '',
                about : 'Increases troop attack and increases skill damage dealt.',
                update : `Attack Bonus: 8% / 10% / 12% / 16% / 20%\nSkill Damage Bonus: 8% / 10% / 12% / 16% / 20%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill3.png') ,
                name : 'Faith',
                type : 'Passive',
                rage : '',
                about : `When attacking cities, normal attacks have a 10% chance to deal additional damage to the garrison.`,
                update : `Additional Damage Factor: 500 / 600 / 700 / 800 / 1000`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill4.png') ,
                name : 'Sage King',
                type : 'Passive',
                rage : '',
                about : `Increases troop capacity. When this commander launches a rally, increases rallied army capacity.`,
                update : `Troop Capacity Bonus: 2% / 4% / 6% / 8% / 10%\nRallied Army Capacity Bonus: 2% / 4% / 6% / 8% / 10%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Mehmed/skill5.png') ,
                name : 'Orban Bombard',
                type : 'Update skill  1',
                rage : '',
                about : `Deals damage (Damage Factor 1350) to enemies in a forward-facing fan-shaped area (maximum 5 targets). This skill deals additional damage to city garrisons and watchtowers (Damage Factor 800), and has a 50% chance to deal a second burst of additional damage to city garrisons and watchtowers (Damage Factor 500).`,

            },

        ],
        VanMinh : VanMinhImage.Arabia,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Conquering,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/mehmed-ii-pvp-buildings-build-1024x570.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/mehmed-ii-pvp-map-build-1024x570.jpg'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 18,
        name : 'Minamoto',
        image : require('./../../assets/images/Commander/Legendary/Minamoto/Minamoto.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Minamoto/tuongMina.png'),
        about : 'Minamoto no Yoshitsune was a military commander of the Minamoto clan of Japan in the late Heian and early Kamakura periods. During the Genpei War, he led a series of battles which toppled the Ise-Heishi branch of the Taira clan, helping his half-brother Yoritoomo consolidate power. In year 1189, Fujiwara no Yasuhira, the son of a trusted ally, fearing of the pressure from Yoriomo, betrayed Yoshitsune, surrounding his Koromogawa-no-tachi residence with his troops, defeating his retainers, and forcing Yoshitsune to commit seppuku. Yoshitsune is considered one of the greatest and the most popular warrior of his era, and one of the most famous samurai fighters in the history of Japan.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill1.png'),
                type : 'Active',
                name : 'Kyohachiryu',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damage to the target and has a 50% chance to deal additional damage to the target each second for the next 2 seconds.',
                update : `Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400\nAdditional Damage: 200 / 280 / 360 / 480 / 600`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill2.png') ,
                name : 'Trial in Kurama-dera',
                type : 'Passive',
                rage : '',
                about : 'Increase cavalry units’ march speed and attack.',
                update : 'Cavalry March Speed Bonus: 3% / 4.5% / 6% / 8% / 10%\nCavalry Attack Bonus: 10% / 12% / 14% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill3.png') ,
                name : 'Master of Kendo',
                type : 'Passive',
                rage : '',
                about : 'Increases damage dealt to barbarians by troops led by this commander.',
                update : 'Bonus Damage to Barbarians: 10% / 20% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill4.png') ,
                name : 'Warlord',
                type : 'Passive',
                rage : '',
                about : 'Troops’ normal attack have a 10% chance to increase damage taken by the target for the next 3 seconds. Effect can only trigger once every 5 seconds.',
                update : 'Damage Taken Increased By: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Minamoto/skill5.png') ,
                name : 'Kyohachiryu Kiwami',
                type : 'Update skill  1',
                rage : '',
                about : `Deals direct damage (Damage Factor 1400) to the target and has a 75% chance to deal additional damage (Damage Factor 600) to the target each second for the next 2 seconds.`,

            },

        ],
        VanMinh : VanMinhImage.Japan,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Peacekeeping,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/minamoto-no-yoshitsune-talent-1024x576.png'
            }
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 19,
        name : 'Richard I',
        image : require('./../../assets/images/Commander/Legendary/Richard/Richard.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Richard/tuongRichard.png'),
        about : `Richard I was King of England from 6 July 1189 until his death. He was known as Richard the Lionheart because of his reputation ass a great military leader and warrior. Richard was a central Christian commander during the Third Crusade, leading the campaign after the departure of Philip II of France and scoring considerable victories against his Muslim counterpart, Saladin. Rather than regarding his kingdom as a responsibility requiring his presence as ruler, Richard has been perceived as preferring to use it merely as a source of revenue to support his armies. Nevertheless, he was seen as a pious hero by his subjects. He remains one of the few kings of England remembered by his epithet, rather than regnal number, and is an enduring iconic figure both in England and in France`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill1.png'),
                type : 'Active',
                name : 'Soul of the Crusaders',
                rage : 'Rage Requirement: 1000',
                about : 'Heals some of the slightly wounded units in Richard\'s army. Adds a debuff to a maximum of 5 targets in a fan-shaped area. (Debuff effect reduces damage dealt and march speed for 2 seconds.)',
                update : 'Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400\nDamage Reduction: 10% / 15% / 20% / 25% / 30%\nMarch Speed Reduction: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill2.png') ,
                name : 'Chivalry',
                type : 'Passive',
                rage : '',
                about : 'Increases troop damage reduction and counterattack damage. The effect applies to all garrison troops when this commander is serving as a garrison commander.',
                update : 'Damage Taken Reduced: 5% / 7% / 9% / 12% / 15%\nCounterattack Bonus: 4% / 5% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill3.png') ,
                name : 'The Lionheart',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of infantry units and defence of infantry units.',
                update : 'Infantry Attack Bonus: 5% / 7% / 9% / 12% / 15%\nInfantry Defense Bonus: 5% / 7% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill4.png') ,
                name : 'Battle-Hardened',
                type : 'Passive',
                rage : '',
                about : 'Increases healing effects received by troops and reduces watchtower damage taken by troops.',
                update : 'Healing Effect Enhancement: 10% / 15% / 20% / 25% / 30%\nDamage Taken From Watchtowers Reduced By: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Richard/skill5.png') ,
                name : 'Tyrannical Lion',
                type : 'Passive',
                rage : '',
                about : 'Reduces all damage taken by 5% and increases damage dealth to cavalry units by infantry units by 2%. In addition, every 10 seconds, decreases target march speed by 50% for 5 seconds.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Infantry,
            TalentIcon.Garrison,
            TalentIcon.Defense,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-flag-defense-talent-build-1024x498.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-i-garrison-talent-1024x570.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/richard-i-infantry-talent-1024x570.jpg'
            }
        ],
        partner : [],
        trangBi : 'bộ binh'
    },
    {
        id: 20,
        name : 'Saladin',
        image : require('./../../assets/images/Commander/Legendary/Saladin/Saladin.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Saladin/tuongSaladin.png'),
        about : `Saladin was the first Muslim sultan of Egypt, Syria, Yemen, a Palestine, the founder of the Ayyūbid dynasty, and one of the most-famous Muslim heroes of all time. Saladin fought against the Christian Crusaders, most notably against Richard the Lionheart during the Third Crusade. In 1187, Saladin inflicted a crushing defeat on the army of the Kingdom of Jerusalem and recaptured the holy city which had been occupied by the Franks for nearly nine decades.

        In contrast with the bloodbath the Crusades had inflicted on Jerusalem, Saladin acted with great magnanimity to the city´s Christian and Jewish residents. He allowed women, the old, and the poor to leave without paying a ransom. Saladin has been considered by many to be the ideal of a Warrior-King: terrible in battle yet generous to his enemies. Despite their different beliefs, Saladin was highly respected by Richard, who praised him as undoubtedly the greatest and most powerful leader in the Islamic world.
        
        In 1192, Saladin and Richard signed a truce. Saladin died the following year – after giving away much of his personal wealth to his subjects – but the Ayyubid dynasty continued to rule in Egypt and Syria for many generations. Widely revered by Muslim admirers and Christian foes alike, Saladin´s legend still lives on today.      
        `,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill1.png'),
                type : 'Active',
                name : 'Hold Fast',
                rage : 'Rage Requirement: 1000',
                about : 'Deals direct damage to the target, then reduces target march speed and decreases healing effects received for the next 5 seconds.',
                update : `Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400\nMarch Speed Reduction: 10% / 15% / 20% / 25% / 30%\nHealing Effect Reduction: 20% / 25% / 30% / 35% / 40%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill2.png') ,
                name : 'Ghulams',
                type : 'Passive',
                rage : '',
                about : 'Increases cavalry unit\'s attack defense, and march speed.',
                update : 'Cavalry Defense Bonus: 8% / 10% / 12% / 16% / 20%\nCavalry Attack Bonus: 8% / 10% / 12% / 16% / 20%\nCavalry March Speed Bonus: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill3.png') ,
                name : 'Bond of Fate',
                type : 'Passive',
                rage : '',
                about : 'Reduces skill damage taken from enemies and reduces counterattack damage taken.',
                update : 'Skill Damage Taken Reduction: 10% / 15% / 20% / 25% / 30%\nCounterattack Damage Taken Reduction: 8% / 10% / 12% / 16% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill4.png') ,
                name : 'Generosity',
                type : 'Passive',
                rage : '',
                about : 'Increases damage dealt to city garrisons. However, Saladin\'s army is unable to plunder resources when attacking other governors\' cities.',
                update : 'Damage Bonus: 3% / 6% / 9% / 12% / 15%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Saladin/skill5.png') ,
                name : 'Praise the Creator',
                type : 'Passive',
                rage : '',
                about : 'Deals direct damage (Damage Factor 1700) to the target, then reduces target march speed by 50% and decreases healing effects received by 50% for the next 5 seconds.',

            },

        ],
        VanMinh : VanMinhImage.Ottoman,
        talent :  [
           
            TalentIcon.Cavalry,
            TalentIcon.Conquering,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/06/saladin-talent-tree-1024x576.png'
            },
          
        ],
        partner : [],
        trangBi : 'kỵ binh'
    },
    {
        id: 21,
        name : 'Seondeok',
        image : require('./../../assets/images/Commander/Legendary/Seondeok/Seondeok.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Seondeok/tuongSeondeok.png'),
        about : `Queen Seondeok of Silla reigned as Queen Regnant of Silla, one of the Three Kingdoms of Korea, from 632 to 647. She was Silla's twenty-seventh ruler and its first reigning queen. She was the second female sovereign in recorded East Asian history and encourages a renaissance in thought, literature, and the arts in Silla. In Samguksagi, Queen Seondeok was described as "generous, benevolent, wise, and smart".`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill1.png'),
                type : 'Active',
                name : 'Modest',
                rage : 'Rage Requirement: 1000',
                about : 'Deals massive damage dealth to a single target while reducing the target\'s Rage.',
                update : `Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400\nRage Reduction: 50 / 60 / 70 / 80 / 100`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill2.png') ,
                name : 'Insightful',
                type : 'Passive',
                rage : '',
                about : 'Increases gold gathering speed; increased food, wood and stone gathering speed.',
                update : 'Bonus Gathering Speed (Gold): 5% / 10% / 15% / 20% / 30%\n Bonus Gathering Speed (Other Resources): 3% / 6% / 10% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill3.png') ,
                name : 'Magnanimous',
                type : 'Passive',
                rage : '',
                about : 'Increases defence and health of siege units when gathering at resource points on the map.',
                update : 'Siege Unit Defense Bonus: 10% / 15% / 20% / 25% / 30%\nSiege Unit Health Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill4.png') ,
                name : 'Incisive',
                type : 'Passive',
                rage : '',
                about : 'When the army led by this commander contains only siege units, all normal attacks have a 10% chance to deal extra damage to the target.',
                update : 'Additional Damage Factor: 500 / 600 / 700 / 800 / 1000'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Seondeok/skill5.png') ,
                name : 'Honoring the Heavens',
                type : 'Passive',
                rage : '',
                about : `Increases load of siege units by 30% and grants an additional 10% resources when gathering is complete.`,

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Integration,
            TalentIcon.Gathering,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://riseofkingdomsboss.com/wp-content/uploads/2020/02/Seondeok-build-rise-of-kingdoms-768x439.jpg'
            }
        ],
        partner : [],
        trangBi : 'thu gom'
    },
    {
        id: 23,
        name : 'Tomyris',
        image : require('./../../assets/images/Commander/Legendary/Tomyris/Tomyris.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Tomyris/tuongTomyris.png'),
        about : `Tomyris was the warrior queen of the Massagetae. She is said to have personally led her troops into battle to defend her lands against Cyrus the Great of the Achaemenid Empire after Cyrus captures her son in an earlier battle. Most historians say she defeated and killed Cyrius in 530 BCE. To quench Cyrus' thirst for blood, she beheaded him and thereafter kept his head in a blood-filled wineskin.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill1.png'),
                type : 'Active',
                name : `Arrow of Vengeance`,
                rage : 'Rage Requirement: 1000',
                about : `Deals direct damage to a single target. If this target is affected by poison, immediately remove the poison and deal poison damage (Damage Factor = Stacks x Poison Factor). If there were more than more 10 stacks, increases poison damage (Damage Factor = Stacks x increased Poison Factor).`,
                update : `Direct Damage Factor: 700 / 750 / 800 / 900 / 1000\nPoison Factor (Less or equal to 10 stacks): 20 / 25 / 30 / 35 / 40\nPoison Factor (More than 10 stacks): 40 / 50 / 60 / 70 / 80`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill2.png') ,
                name : 'Payback',
                type : 'Passive',
                rage : '',
                about : 'When attacking cities, increases normal attack damage and decreases counterattack damage by 10%.',
                update : 'Normal Attack Damage Bonus: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill3.png') ,
                name : 'For the Sun',
                type : 'Passive',
                rage : '',
                about : `Increases attack of archer units and gives all attacks a 10% chance to decrease the defence of a single target for 3 seconds.`,
                update : `Archer Attack Bonus: 10% / 15% / 20% / 25% / 30%\nDefense Reduction: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill4.png') ,
                name : 'Massagetae\'s Counterattack',
                type : 'Passive',
                rage : '',
                about : `Gives all regular attacks chance to poison a single target for 5 seconds (stacks up to 15 times). The poisoned duration is refreshed each time a stack is added. Poisoned targets will take an additional 3% skill damage per stack.`,
                update : 'Probability: 50% / 60% / 70% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Tomyris/skill5.png') ,
                name : 'Pouch of Blood',
                type : 'Passive',
                rage : '',
                about : `Increases normal attack and counterattack damage by 10%. When attacked, reduces attack of the attacker's cavalry units by 10%.`,

            },

        ],
        VanMinh : VanMinhImage.Other,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Conquering,
            TalentIcon.Attack,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Tomyris-1024x576.jpg'
            },
           
        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 24,
        name : 'Wu Zetian',
        image : require('./../../assets/images/Commander/Legendary/WuZetian/WuZetian.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/WuZetian/tuongWuZetian.png'),
        about : `Wu Zetian was the first Empress of China to rule the country herself. Given a good education by her father, she started as a consort to the Emperor, and slowly worked her way up to Empress. She effectively became the actual ruler when the Emperor had a stroke. When her husband died, she either killed or exiled most of her sons, preserving the throne for her youngest, most easily-controlled child. Eventually, her son gave up the title of Emperor, and Wu Zetian, at last, became supreme ruler in name as well. She became known for her ruthlessness, creating a secret police force which eliminated many corrupt officials and conspirators who wanted one of her sons on the throne. While many historians remember her as cruel, she is also to be remembered for major expansions of China' s territories, and for making Buddhism the new state religion over Daoism. She famously left her tombstone blank, saying that history would decide her true legacy.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill1.png'),
                type : 'Active',
                name : 'Mandate of Heaven',
                rage : 'Rage Requirement: 1000',
                about : 'Deal direct damage to a single target and heal a portion of your amry\'s wounded troops.',
                update : 'Direct Damage Factor: 500 / 600 / 700 / 800 / 1000\nHealing Factor: 100 / 200 / 300 / 400 / 500'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill2.png') ,
                name : 'Lion Rider',
                type : 'Passive',
                rage : '',
                about : `When commanding the garrison, all garrison troops' damage is increased, and the damage caused rally attacks is increased.`,
                update : 'Damage Bonus: 2% / 4% / 6% / 8% / 10%\nDamage to Rallied Armies Increased: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill3.png') ,
                name : 'Tears of Blood',
                type : 'Passive',
                rage : '',
                about : 'Increase the HP and Defence of troops under your command. Your troops\' attacks have a 10% chance to silence their target for 2 seconds.',
                update : 'Defense Bonus: 2% / 4% / 6% / 8% / 10%\nTroop Health: 2% / 4% / 6% / 8% / 10%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill4.png') ,
                name : 'Legacy',
                type : 'Passive',
                rage : '',
                about : 'When commanding the garrison, incoming skill damage is reduced. Your troops have a 50% chance to increase their Defense for 3 seconds when they take skill damage.',
                update : 'Skill Damage Taken Reduction: 3% / 5% / 8% / 11% / 15%\nDefense Bonus: 5% / 8% / 11% / 15% / 20%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/WuZetian/skill5.png') ,
                name : 'Brightest Sky',
                type : 'Passive',
                rage : '',
                about : 'Counterattack damage +20%. Incoming attacks have a 10% chance to deal damage to the attacker (Damage Factor 500).',

            },

        ],
        VanMinh : VanMinhImage.China,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Garrison,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/wu-zetian-counter-attila-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/10/wu-zetian-talent-tree-1024x739.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/10/wu-zetian-talent-tree-open-field-1024x650.jpg'
            }
        ],
        partner : [],
        trangBi : ''
    },
    {
        id: 25,
        name : 'Yi Seong-Gye',
        image : require('./../../assets/images/Commander/Legendary/Yi/Yi.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Yi/tuongYi.png'),
        about : 'Taejo of Joseon, born Yi Seong-Gye, was the founder and the first king of the Joseon Dynasty of Korea and the main figure in overthrowing the Goryeo Dynasty. Yi Seong-Gye joined the Goryeo army and gained power and respect during the late 1370s and early 1380s by pushing Mongol remnants off the peninsula and also by repelling well-organized Japanese pirates in a serios of successful engagements. He declared a new dynasty in 1392-1393 under the name of Joseon, thereby reviving and older state, also known as Joseon, that was, legendarily, established nearly three thousand years previously and renamed the county the “Kingdom of Great Joseon”. Yi Seong-Gye abdicated in 1308 during the strife between his son and died on May 23, 1408 I Changdeok Palace.',
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill1.png'),
                type : 'Active',
                name : 'Rain of Arrows',
                rage : 'Rage Requirement: 1000',
                about : `Deals direct damage to the enemy in a fan-shaped area. Can damage at most 5 targets.`,
                update : 'Direct Damage Factor: 600 / 800 / 1000 / 1200 / 1400'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill2.png') ,
                name : 'Art of Archery',
                type : 'Passive',
                rage : '',
                about : `Troops' normal attacks have a 10% chance to grant additional rage and increase the attack of archer units for the next 3 seconds.`,
                update : 'Rage Restored: 50 / 60 / 70 / 80 / 100\nArcher Attack Bonus: 50% / 60 % / 70% / 80% / 100%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill3.png') ,
                name : 'Joseon Dynasty',
                type : 'Passive',
                rage : '',
                about : 'Increases the attack of the garrison and watchtower when this commander is serving as garrison commander.',
                update : 'Garrison/Watchtower Attack Bonus: 1% / 2% / 3% / 4% / 5%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill4.png') ,
                name : 'Destiny',
                type : 'Passive',
                rage : '',
                about : 'Increases active skill damage.',
                update : 'Skill Damage Bonus: 20% / 25% / 30% / 40% / 50%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Yi/skill5.png') ,
                name : 'Arrow Storm',
                type : 'Update skill  1',
                rage : '',
                about : 'Deals direct damage (Damage Factor 1700) to the enemy in a circular area. Can damage at most 5 targets.',

            },

        ],
        VanMinh : VanMinhImage.Korea,
        talent :  [
           
            TalentIcon.Archer,
            TalentIcon.Garrison,
            TalentIcon.Skill,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Yi_Seong-Gye_Garrison-1024x576.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/Yi_Seong-Gye-1024x576.jpg'
            }
        ],
        partner : [],
        trangBi : 'cung thủ'
    },
    {
        id: 26,
        name : 'Æthelflæd',
        image : require('./../../assets/images/Commander/Legendary/Athe/Athe.png'),
        tuongImage: require('./../../assets/images/Commander/Legendary/Athe/tuongAthe.png'),
        about : `Æthelflæd, Lady of the Mercians, ruled Mercia in the English Midlands from 911 until her death. Born at the height of the Viking Invasions of England, she grew up in a land at war, fighting a losing battle against Danish conquerors. It is said that Æthelflæd ruled In her husband's place for a decade after he became ill. When he died in 911, Æthelflæd became Myrcna hlædige, ‘Lady of the Mercians". Before her death, she had taken back a large part of England and had more ready to surrender.`,
        skill : [
            {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill1.png'),
                type : 'Active',
                name : 'Arrow of Iron',
                rage : 'Rage Requirement: 1000',
                about : `Deals damage to up to 5 enemies in a forward-facing fan-shaped area, reducing their attack, defence and health for the next 2 seconds.`,
                update : `Direct Damage Factor: 400 / 500 / 600 / 700 / 800\nAttack, Defense, and Health Reduction: 10% / 15% / 20% / 25% / 30%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill2.png') ,
                name : 'Thunderous Force',
                type : 'Passive',
                rage : '',
                about : 'Counterattack damage against your troops is reduced. When actively attacking, you have a 10% chance to reduce the movement speed of enemy cavalry and movement speed of other troops. The slow effect last 3 seconds.',
                update : 'Counterattack Damage Taken Reduction: 5% / 8% / 11% / 15% / 20%\nCavalry March Speed Reduction: 20% / 25% / 30% / 40% / 50%\nOther Unit March Speed Reduction: 10% / 15% / 20% / 25% / 30%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill3.png') ,
                name : 'Synergy',
                type : 'Passive',
                rage : '',
                about : 'All troops under your commander gain attack against Barbarians and other neutral units and all commanders get extra EXP.',
                update : 'Bonus Damage to Barbarians: 5% / 10% / 17% / 25% / 35%\nExperience Bonus: 5% / 10% / 17% / 25% / 35%'
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill4.png') ,
                name : 'Fortress of Mercia',
                type : 'Passive',
                rage : '',
                about : `When this commander leads a rally attack, all armies joining the rally have a higher troop limit. When this commander is leading at least 3 different troop types, their damage is increased.`,
                update : `Rallied Army Capacity Bonus: 2% / 4% / 6% / 8% / 10%\nBonus Damage (3 Unit Types): 5% / 8% / 11% / 15% / 20%`
            },
           {
                image : require('./../../assets/images/Commander/Legendary/Athe/skill5.png') ,
                name : 'Warrior Queen',
                type : 'Passive',
                rage : '',
                about : 'Deals an extra 20% damage to enemies who have been slowed.',

            },

        ],
        VanMinh : VanMinhImage.Britain,
        talent :  [
           
            TalentIcon.Leadership,
            TalentIcon.Peacekeeping,
            TalentIcon.Support,
        ],
        talentTree : [
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/09/%C3%86thelfl%C3%A6d-all-in-one-talent-build-1024x598.jpg'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/aetheflaed-barbarian-hunting-1024x576.png'
            },
            {
                uri : 'https://rok.guide/wp-content/uploads/2019/11/aethefled-field-battle-1024x576.png'
            }
        ],
        partner : [],
        trangBi : 'man rợ'
    },
   
    
 
]