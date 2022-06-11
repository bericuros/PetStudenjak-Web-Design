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