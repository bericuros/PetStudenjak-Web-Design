// ========== OGLASI ====================

let oglasi__2 = [
    {
        "ime" : "Dzoni",
        "opis" : "Pre dva dana mi je pobegao moj pas Roki, veliki beli crni labrador od 5 godina. Molim Vas da me " + 
            "kontaktirate ako ga vidite.",
        "telefon" : "+381605552345",
        "id" : 1,
        "datum": "05-06-2022 17:42:17",
        "korisnik": "Aki",
        "komentari" : [
            {
                "korisnik" : "koki_bg", 
                "tekst" : "Mislim da sam video slicnog psa na ulici u bloku 45.",
                "vreme": "06-06-2022 08:12:13",
            },
            {
                "korisnik" : "dr_cvetko",
                "tekst" : "Probaj da i flajere okacis po kraju.",
                "vreme": "06-06-2022 12:00:33",
            }
        ]
    },
    {
        "ime" : "Pudlica Maja",
        "opis" : "Pomagajte ljudi molim vas, sinoc sam ostavila svoju pudlicu vezanu ispred Maxi-ja. " +
            "Nakon sto sam izasla vise je nije bilo. Bilo je u bloku 3 na Novom Beogradu.",
        "telefon" : "+38163123321",
        "id" : 2,
        "datum": "06-06-2022 07:42:17",
        "korisnik": "Jelica",
        "komentari" : [
            {
                "korisnik" : "xxxroksterxxx", 
                "tekst" : "Sledeci put nemoj da vodis svoju pudlicu u soping i nece se desiti tako nesto",
                "vreme": "06-06-2022 09:23:14",
            },
            {
                "korisnik" : "svetlana_bajic",
                "tekst" : "Jesi li kontaktirala policiju?",
                "vreme": "06-06-2022 15:00:33",
            }
        ]
    },
    {
        "ime" : "Mocart",
        "opis" : "Igubio mi se bernandinac Mocart jutros na Tasu. Veliki, braon boje, zivahan, nezan. " + 
            "Molim vas javite mi ako ste ga videli.",
        "telefon" : "+381629876543",
        "id" : 3,
        "datum": "06-06-2022 11:58:01",
        "korisnik": "Maki",
        "komentari" : []
    },
    {
        "ime" : "Zlatni Dzajic",
        "opis" : "Pre dva sata sam bio sa svojim zlatnim retriverom u Topciderskom parku. Bio je van povodca nazalost " + 
            "i izgubio sam ga iz vidika. Javite mi na broj u prilogu ako ga vidite, hvala puno.",
        "telefon" : "+38163566309",
        "id" : 4,
        "datum": "07-06-2022 18:11:17",
        "korisnik": "Slavko",
        "komentari" : [
            {
                "korisnik" : "thelastbearbender", 
                "tekst" : "aj zamisli nazvoes psa zlatni dzajic lol, hahahaha",
                "vreme": "09-06-2022 17:03:59",
            },
        ]
    },
    {
        "ime" : "Pitbul Kokos",
        "opis" : "Izgubio sam iz vidika svog sivog pitbula kokosa kod brankovog mosta. Molim vas kontaktirajte me ako ga vidite.",
        "telefon" : "+381645684697",
        "id" : 5,
        "datum": "07-06-2022 23:22:39",
        "korisnik": "Uros",
        "komentari" : [
            {
                "korisnik" : "milkacokololadica", 
                "tekst" : "Izvini, ali mozes li dati detaljniji opis?",
                "vreme": "08-06-2022 01:42:18",
            },
            {
                "korisnik" : "boban_bobi_mavranovic",
                "tekst" : "video sam slicnog psa na zemunskom keju jutros, tamo kod kokicara Laze",
                "vreme": "08-06-2022 09:47:52",
            }
        ]
    },
    {
        "ime" : "Daca",
        "opis" : "ljudi molim vas, pobegao mi je pas Daca. mali jazavicar, uhranjen, crne boje, zenka. pozovite broj ispod " + 
            "ako ga vidite, hvala" ,
        "telefon" : "+38166112233",
        "id" : 6,
        "datum": "09-06-2022 17:11:15",
        "korisnik": "Anonymous",
        "komentari" : [
            {
                "korisnik" : "zolaosvajac", 
                "tekst" : "Da ne zivis mozda na Vracaru? Video sam jednog kako luta pre jedno sat vremena.",
                "vreme": "09-06-2022 22:12:29",
            },
        ]
    },
]

let poslId__2 = 7

if (localStorage.getItem("oglasi") == null){
    localStorage.setItem("poslId", poslId__2);
    localStorage.setItem("oglasi", JSON.stringify(oglasi__2));
}

// ========== BANERI ====================

let baneri__2 = []
baneri__2.push({"baner": "../images/banner_2.png"})
baneri__2.push({"baner": "../images/banner_3.png"})
baneri__2.push({"baner": "../images/banner_4.png"})
baneri__2.push({"baner": "../images/banner_5.png"})
baneri__2.push({"baner": "../images/banner_5.jpg"})
baneri__2.push({"baner": "../images/banner_6.jpg"})
baneri__2.push({"baner": "../images/banner_7.jpg"})
baneri__2.push({"baner": "../images/banner_8.jpg"})
baneri__2.push({"baner": "../images/banner_9.jpg"})
baneri__2.push({"baner": "../images/banner_10.jpg"})
banner_count__2 = 0

if (localStorage.getItem("baneri") == null) localStorage.setItem("baneri", JSON.stringify(baneri__2))
if (localStorage.getItem("banner_count") == null) localStorage.setItem("banner_count", banner_count__2)

// ========== DOGS ====================

let dogs__2 = []
dogs__2.push({
    "name": "Dalmatian Buddy",
    "description": "The Dalmatian is a graceful, medium-sized dog with a sleek, muscular body. The tail is fairly long and has a slight, upward curve. The coat is short and dense, with brown or black spots on white. The Dalmatian sheds heavily, even though the coat is short. Frequent brushing is required to control shedding.",
    "weight": 25,
    "age": 29,
    "link": "dalmatian.html",
})
dogs__2.push({
    "name": "Corgi Koko",
    "description": "The Pembroke Welsh corgi is a small- to medium-sized herding dog of short stature and sturdy build. Known for its low-set body, large erect ears, and stubby tail, the Pembroke also has a reputation for being a wonderful companion. Pembroke Welsh corgis are achondroplastic, a dwarf breed with shortened legs.",
    "weight": 12,
    "age": 72,
    "link": "corgi.html",
})
dogs__2.push({
    "name": "Labrador Rocky",
    "description": "Labrador retrievers are easily recognized by their broad head, drop ears and large, expressive eyes. Two trademarks of the Lab are the thick but fairly short double coat, which is very water repellent, and the well known \"otter tail.\" The tail is thick and sturdy and comes off the topline almost straight.",
    "weight": 30,
    "age": 50,
    "link": "labrador.html",
})
if (localStorage.getItem("dogs") == null) localStorage.setItem("dogs", JSON.stringify(dogs__2))

let dogs_srpski__2 = []
dogs_srpski__2.push({
    "name": "Dalmatinac Badi",
    "description": "Dalmatinac je graciozan pas srednje veličine sa glatkim, mišićavim telom. Rep je prilično dugačak i ima blagu krivinu prema gore. Dlaka je kratka i gusta, sa smeđim ili crnim mrljama na belom. Dalmatinac jako linja, iako je dlaka kratka. Za kontrolu linjanja potrebno je često četkanje.",
    "weight": 25,
    "age": 29,
    "link": "dalmatian_srpski.html",
})
dogs_srpski__2.push({
    "name": "Korgi Koko",
    "description": "Pembroke velški korgi je pastirski pas male do srednje veličine, niskog rasta i čvrste građe. Poznat po svom nisko postavljenom telu, velikim uspravnim ušima i zdepastom repu, Pembroke takođe ima reputaciju kao divan saputnik. Pembroke velški korgi su ahondroplastični, patuljasta rasa sa skraćenim nogama.",
    "weight": 12,
    "age": 72,
    "link": "corgi_srpski.html",
})
dogs_srpski__2.push({
    "name": "Labrador Roki",
    "description": "Labrador retrivere je lako prepoznati po širokoj glavi, spuštenim ušima i velikim, izražajnim očima. Dva zaštitna znaka Lab-a su gusta, ali prilično kratka dvostruka dlaka, koja je veoma vodoodbojna, i dobro poznati „rep vidre“. Rep je debeo i čvrst i skoro ravan se spušta sa gornje linije.",
    "weight": 30,
    "age": 50,
    "link": "labrador_srpski.html",
})
if (localStorage.getItem("dogs_srpski") == null) localStorage.setItem("dogs_srpski", JSON.stringify(dogs_srpski__2))

// ========== CATS ====================

let cats__2 = []
cats__2.push({
    "name": "Persian Ronnie",
    "description": "Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.",
    "weight": 4.2,
    "age": 37,
    "link": "persian.html",
})
cats__2.push({
    "name": "Bengal Jay",
    "description": "Bengal cats have smallish, round heads, large eyes, and striking facial marking. They have strong muscular bodies and a streamlined appearance much like their Asian Leopard ancestors. Their hind legs are longer than their front legs, which helps give them a powerful but graceful stride.",
    "weight": 3.5,
    "age": 39,
    "link": "bengal.html",
})
cats__2.push({
    "name": "Maine Coon Dexter",
    "description": "The Maine Coon is a large and sociable cat, hence its nickname, \"the gentle giant.\" It is characterized by a prominent ruff along its chest, robust bone structure, rectangular body shape, an uneven two-layered coat with longer guard hairs over a silky satin undercoat, and a long, bushy tail.",
    "weight": 7,
    "age": 98,
    "link": "mainecoon.html",
})
if (localStorage.getItem("cats") == null) localStorage.setItem("cats", JSON.stringify(cats__2))

let cats_srpski__2 = []
cats_srpski__2.push({
    "name": "Persijski Roni",
    "description": "Persijske mačke su srednje veličine, obično teže između 7 i 12 funti i mere od 10 do 15 inča visine. Imaju zaobljenu glavu, male, zaobljene uši i velike oči. Takođe obično imaju ravno i uvučeno lice sa bucmastim obrazima.",
    "weight": 4.2,
    "age": 37,
    "link": "persian_srpski.html",
})
cats_srpski__2.push({
    "name": "Bengalski Džej",
    "description": "Bengalske mačke imaju male, okrugle glave, velike oči i upadljive oznake na licu. Imaju snažna mišićava tela i aerodinamičan izgled sličan njihovim azijskim precima leoparda. Njihove zadnje noge su duže od prednjih, što im pomaže u značajnom, ali gracioznom koraku.",
    "weight": 3.5,
    "age": 39,
    "link": "bengal_srpski.html",
})
cats_srpski__2.push({
    "name": "Mejn kun Dekster",
    "description": "Mejn kun je velika i društvena mačka, pa otuda i njegov nadimak „nežni džin“. Odlikuje se istaknutim naborom duž grudnog koša, robusnom strukturom kostiju, pravougaonim oblikom tela, neujednačenom dvoslojnom dlakom sa dužim zaštitnim dlačicama preko svilenkaste satenske poddlake i dugim, gustim repom.",
    "weight": 7,
    "age": 98,
    "link": "mainecoon_srpski.html",
})
if (localStorage.getItem("cats_srpski") == null) localStorage.setItem("cats_srpski", JSON.stringify(cats_srpski__2))

// ========== BIRDS ====================

let birds__2 = []
birds__2.push({
    "name": "Parakeet LeBron",
    "description": "A parakeet is any one of many small to medium-sized species of parrot, in multiple genera, that generally has long tail feathers.",
    "weight": 0.1,
    "age": 27,
    "link": "parakeet.html",
})
birds__2.push({
    "name": "Cockatoo Chris",
    "description": "Cockatoos are recognisable by the prominent crests and curved bills. Their plumage is generally less colourful than that of other parrots, being mainly white, grey or black and often with coloured features in the crest, cheeks or tail.",
    "weight": 0.6,
    "age": 12,
    "link": "cockatoo.html",
})
birds__2.push({
    "name": "Lovebird Dwyane",
    "description": "They are small parrots, with rounded heads and relatively large beaks. All of the different species are green, though some have orange, yellow, gray, black, or red on their heads and necks. Most Lovebirds are five or six inches long, and weigh about two ounces.",
    "weight": 0.05,
    "age": 50,
    "link": "lovebird.html",
})
if (localStorage.getItem("birds") == null) localStorage.setItem("birds", JSON.stringify(birds__2))

let birds_srpski__2 = []
birds_srpski__2.push({
    "name": "Mali papagaj LeBron",
    "description": "Mali papagaj je bilo koja od mnogih malih do srednjih vrsta papagaja, u više rodova, koja uglavnom ima dugo repno perje.",
    "weight": 0.1,
    "age": 27,
    "link": "parakeet_srpski.html",
})
birds_srpski__2.push({
    "name": "Kakadu Kris",
    "description": "Kakadui su prepoznatljivi po istaknutim grbovima i zakrivljenim kljunovima. Njihovo perje je generalno manje šareno nego kod drugih papagaja, uglavnom belo, sivo ili crno i često sa obojenim crtama na grebenu, obrazima ili repu.",
    "weight": 0.6,
    "age": 12,
    "link": "cockatoo_srpski.html",
})
birds_srpski__2.push({
    "name": "Afrički papagaj Dvejn",
    "description": "Oni su mali papagaji, sa zaobljenim glavama i relativno velikim kljunovima. Sve različite vrste su zelene, mada neke imaju narandžastu, žutu, sivu, crnu ili crvenu na glavi i vratu. Većina zaljubljenih ptica dugačka je pet ili šest inča i teška oko dve unce.",
    "weight": 0.05,
    "age": 50,
    "link": "lovebird_srpski.html",
})
if (localStorage.getItem("birds_srpski") == null) localStorage.setItem("birds_srpski", JSON.stringify(birds_srpski__2))
