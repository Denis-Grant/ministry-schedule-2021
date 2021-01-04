// INITIALIZE
const month = document.getElementById('month');
const verse = document.getElementById('text');
const weekOf = document.getElementById('week-of');
const main = document.querySelector('main header');
const desktop = document.querySelector('#desktop header');
const topBar = document.querySelector('.topbar');
const monday = document.querySelector('.monday');
const weekArr = ['wk1','wk2','wk3','wk4','wk5',];
const timeArr = ['11am/ 6.30pm','11am/ 6.30pm','11am/ 6.30pm','2pm'];
const dayArr = [2,7,12,17];
const themeArr = [3,8,13,18];
const refArr = [4,9,14,19];
const overseersArr = [5,10,15,20];
const linkArr = [6,11,16,21];
let timeStr;
const weekTime = '11am / 6.30pm';
const weekEnd = '2pm';
// Media Query
let mq = window.matchMedia('(min-width: 920px)');



const heading = [
    {month: "january 2021"},
    {text: '"The scene of this world is changing." - 1 Cor 7:31 '}
];
// DATES 
const dates = [
    '28/12','04/01','11/01','18/01','25/01'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '28/12'},
            {topic: 'The Future'},

            {day: 'Monday'},
            {theme: 'How Do You View the Future?'},
            {ref: 'Tract'},
            {overseers: 'A Osafo / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102012770'} ,

            {day: 'Wednesday'},
            {theme: 'The Truth About the Future!'},
            {ref: '- wp20 No. 1 pp.14-15'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2020006#h=1:0'},

            {day: 'Friday'},
            {theme: 'Your Future, Your Choice!'},
            {ref: '- wp18 No. 2 p. 14'},
            {overseers: 'R Santiago / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018091#h=1:0-24:0'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Griffiths'},
            {link: ''}
        ],
        wk2:  [
            {week: '04/01'},
            {topic: 'Prayer'},

            {day: 'Monday'},
            {theme: 'Does God Hear Our Prayers?'},
            {ref: '- wp21 No. 1 pp. 5-7'},
            {overseers: 'D Grant / T Boland Jr'},
            {link: 'https://www.jw.org/en/library/magazines/watchtower-no1-2021-jan-feb/does-god-hear-our-prayers/'},
 
            {day: 'Wednesday'},
            {theme: 'Why Does God Not Answer All Prayers?'},
            {ref: '- wp21 No. 1 pp. 8-9'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://www.jw.org/en/library/magazines/watchtower-no1-2021-jan-feb/why-does-god-not-answer-all-prayers/'},
  
            {day: 'Friday'},
            {theme: 'What Prayers Can Do for You?'},
            {ref: '- wp21 No. 1 pp. 14-15'},
            {overseers: 'P Wu / C Yalley'},
            {link: 'https://www.jw.org/en/library/magazines/watchtower-no1-2021-jan-feb/what-prayers-can-do-for-you/'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Moore'},
            {link: ''}
        ],
        wk3: [
            {week: '11/01'},
            {topic: 'Keys to Personal Success'},

            {day: 'Monday'},
            {theme: 'Keep Money in Its Place!'},
            {ref: '- g 11/08 p.6'},
            {overseers: 'D Grant / D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/102008403#h=4'} ,

            {day: 'Wednesday'},
            {theme: 'Be Conscious of Your Spiritual Need!'},
            {ref: '- g 11/08 pp. 6-9'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/102008403#h=26'},

            {day: 'Friday'},
            {theme: 'Forgive Freely!'},
            {ref: '- g 11/08 p. 7-8'},
            {overseers: 'R Santiago/ C Yalley'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/102008403#h=13'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'S Baccas'},
            {link: ''}
        ],
        wk4:  [
            {week: '18/01'},
            {topic: 'Science & Technology'},

            {day: 'Monday'},
            {theme: 'How Long Can You Live?'},
            {ref: '- g 8/13 p. 6'},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/102013284#h=1:0-49:0'},
 
            {day: 'Wednesday'},
            {theme: 'Seeing Is Believing!'},
            {ref: '- w08 5/1 p. 3'},
            {overseers: 'S Baccas H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2008320#h=1:0-14:0'},
  
            {day: 'Friday'},
            {theme: 'Are Science and the Bible Compatible?'},
            {ref: '- g 2/11 pp. 22-23'},
            {overseers: 'P Wu / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/102011049#h=1:0-25:0'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Grant'},
            {link: ''}
        ],
        wk5:  [
            {week: '25/01'},
            {topic: 'The Bible'},

            {day: 'Monday'},
            {theme: 'Bible Teachings​—Timeless Wisdom!'},
            {ref: '- wp18 No. 1 pp. 4-7'},
            {overseers: 'A Osafo / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018019'},
 
            {day: 'Wednesday'},
            {theme: 'Outdated or Ahead of Its Time?'},
            {ref: '- wp18 No. 1 pp. 6-7'},
            {overseers: 'S Baccas H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018029'},
  
            {day: 'Friday'},
            {theme: 'The Bible and Your Future!'},
            {ref: '- wp18 No. 1 pp. 14-15'},
            {overseers: 'W Davies / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018023'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'R Santiago'},
            {link: ''}
        ]

    
}
// DEVELOPER MODE - Prevents mobile ver on lg screen
if (mq.matches){
    document.querySelector('#mobile').style.display = 'none'; 
}

localStorage.setItem('dataJanHeading', JSON.stringify(heading));
localStorage.setItem('dataJan', JSON.stringify(data));

/*ASSIGN LOCAL STORAGE VALUES*/
const outputArray = JSON.parse(localStorage.getItem('dataJan'))

// MONTH & TEXT
month.textContent = heading[0].month.toUpperCase();
verse.textContent = heading[1].text;

// WEEKOF
dates.forEach((week, i)=>{
    weekOf.innerHTML += `<a href="#id-${i}"><span>${week}</span></a>`
});

// MAIN
dates.forEach((weekNumber, w)=>{

main.innerHTML += 
    `<div class="topbar">
    <!-- MAIN -->
    <div class='week'>Week - ${data[weekArr[w]][0].week}</div>
    <h4 class='theme'>${data[weekArr[w]][1].topic}</h4>
    <a href="#"><i class="fa fa-angle-double-up " aria-hidden="true"></i></a>

</div>`;

for (x = 0; x < 4; x++) {
    if (x != 3){
        timeStr = weekTime;
    } else 
    {
        timeStr = weekEnd;
    }
    main.innerHTML += `<div class="wrapper">
        <div class="monday">
            <p>${data[weekArr[w]][dayArr[x]].day}</p>
            <p>${timeStr}</p>
        </div>
        <div class="theme">
            <a href='${data[weekArr[w]][linkArr[x]].link}'><h3>${data[weekArr[w]][themeArr[x]].theme}</h3>
            <div class="ref">${data[weekArr[w]][refArr[x]].ref}</div>
            <a/>
            <footer>
                <p>${data[weekArr[w]][overseersArr[x]].overseers}</p>
            </footer>
        </div>
    </div>`
}

main.innerHTML += `
<div class="monday mb-60">
            <p>Sunday</p>
            <span style='font-size: 1rem; '>Group Overseers</span>
        </div>`
      
});
// DESKTOP
desktop.innerHTML+= `<div class="grids bg-blue mb-8">
    <span style='background: #fff;'></span>
    <span>Monday<br>11am / 6.30pm</span>
    <span>Tuesday</span>
    <span>Wednesday<br>11am / 6.30pm</span>
    <span>Thursday</span>
    <span>Friday<br>11am / 6.30pm</span>
    <span>Saturday<br>2pm</span>
    <span>Sunday</span>
</div>`
desktop.innerHTML += ` <div class="grids ">
    <span class='bg-green'>Group focus</span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'>Review</span>
    <span class='bg-green'>Group<br>Overseers</span>
</div>`

dates.forEach((weekNumber, w)=>{

    desktop.innerHTML += `<div class="grids mt">
    <div class="bg-grey align-items">
        <span class='bold'>Week ${weekNumber}</span>
        <span style='color: var(--grey-light)'>${data[weekArr[w]][1].topic}</span>
    </div>
    <div class="bg-orange text-16 flex-align ">
        <a href="${data[weekArr[w]][6].link}"><p >${data[weekArr[w]][3].theme}</p></a>
        <a href=""><em>${data[weekArr[w]][4].ref}</em></a>
        <footer>${data[weekArr[w]][5].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange flex-align text-16">
        <a href="${data[weekArr[w]][11].link}"><p >${data[weekArr[w]][8].theme}</p></a>
       <a href="${data[weekArr[w]][11].link}"><em>${data[weekArr[w]][9].ref}</em></a>
        <footer>${data[weekArr[w]][10].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange spacing flex-align flex-align text-16">
        <a href="${data[weekArr[w]][16].link}"><p >${data[weekArr[w]][13].theme}</p></a>
        <a href="${data[weekArr[w]][16].link}"><em>${data[weekArr[w]][14].ref}</em></a>
    <footer>${data[weekArr[w]][15].overseers}</footer>
    </div>
    <div class="bg-orange flex-align">
        <p >${data[weekArr[w]][18].theme}</p>
        <em>${data[weekArr[w]][19].ref}</em>
        <footer>${data[weekArr[w]][20].overseers}</footer>
    </div><div class="bg-orange flex-align">     
    </div>`
});
// DYNAMICALLY INSERT ID'S
let allClasses = document.getElementsByClassName('topbar');
let all = [...allClasses]
all.forEach((classy, i)=>{
    classy.id = `id-${i}`
});
document.querySelector('body').style.marginBottom = '200px';



// JS MEDIA QUERIES
window.addEventListener('resize', ()=>{

    if (mq.matches){
        document.querySelector('#mobile').style.display = 'none';
        document.querySelector('#desktop').style.display = 'block';
    } else {
        document.querySelector('#desktop').style.display = 'none';
        document.querySelector('#mobile').style.display = 'block';
    }
});