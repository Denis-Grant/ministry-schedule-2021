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
    {month: "October 2021"},
    {text: '“I tell you, if these remained silent, the stones would cry out.” - Luke 19:40'}
];
// DATES - The number of date entries dictates the number of weeks looped! 
const dates = [
    '04/10','11/10','18/10','25/10'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '04/10'},
            {topic: 'Tools to Teach the Truth'},

            {day: 'Monday'},
            {theme: 'The Watchtower and Awake!'},
            {ref: "-w18 October p.14 para 11,12"},
            {overseers: 'D Grant/ D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018604#h=21'} ,

            {day: 'Wednesday'},
            {theme: 'Tracts'},
            {ref: '-w18 October p.13-14 para 9,10'},
            {overseers: 'S Baccas / P Wu'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018604#h=18'},

            {day: 'Friday'},
            {theme: 'Videos'},
            {ref: '-w18 October p.14-15 para 14,15'},
            {overseers: 'R Santiago / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018604#h=25'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'C Yalley'},
            {link: ''}
        ],
        wk2:  [
            {week: '11/10'},
            {topic: 'Letter Writing'},

            {day: 'Monday'},
            {theme: 'Upbuilding and Positive'},
            {ref: '-th study 16 p. 19'},
            {overseers: 'A Osafo / B Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102018456'},
 
            {day: 'Wednesday'},
            {theme: 'Practical Value Made Clear'},
            {ref: '-th study 13 p. 16'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102018453'},
  
            {day: 'Friday'},
            {theme: "Effective Conclusion"},
            {ref: '-th study 20 p. 23'},
            {overseers: 'R Santiago / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102018460'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'CIRCUIT ASSEMBLY'},
            {link: ''}
        ],
        wk3: [
            {week: '18/10'},
            {topic: 'Bible Questions Answered'},

            {day: 'Monday'},
            {theme: 'Understanding the Bible'},
            {ref: '-ijwbq article 40'},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/502013148'} ,

            {day: 'Wednesday'},
            {theme: 'Does Science Agree With the Bible?'},
            {ref: '-ijwbq article 82'},
            {overseers: 'S Baccas / P Wu'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/502014236'},

            {day: 'Friday'},
            {theme: "Can the Bible Help Me if I’m Depressed?"},
            {ref: "-ijwbq article 32"},
            {overseers: 'R Santiago / C Yalley '},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/502013104'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Griffiths'},
            {link: ''}
        ],
        wk4:  [
            {week: '25/10'},
            {topic: 'Using Enjoy Life Forever!'},

            {day: 'Monday'},
            {theme: 'Transferring A Student From Another Publication'},
            {ref: "S-196 - Para 1-3"},
            {overseers: 'A Osafo / T Boland Jr'},
            {link: ''},
 
            {day: 'Wednesday'},
            {theme: 'Offering A Bible Study Course'},
            {ref: "S-196 - Para 4-5"},
            {overseers: 'S Baccas / H Neal'},
            {link: ''},
  
            {day: 'Friday'},
            {theme: 'Conducting A Bible Study'},
            {ref: "s-196 - Para 6-10"},
            {overseers: 'P Wu / R Santiago'},
            {link: ''},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Grant'},
            {link: ''}
        ],
        wk5:  [
            {week: '30/08'},
            {topic: 'Making Good Use of Videos'},

            {day: 'Monday'},
            {theme: 'God does not approve of all religions'},
            {ref: '-lff lesson 13 - section 5'},
            {overseers: 'D Grant / D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021213#h=12'},
 
            {day: 'Wednesday'},
            {theme: 'Human rule must be replaced'},
            {ref: '-lff lesson 11  para 1-3'},
            {overseers: 'S Baccas / P Wu'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021211'},
  
            {day: 'Friday'},
            {theme: 'Draw Close to God Through Prayer'},
            {ref: '-lff lesson 9  para 1-3'},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021209'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'C Yalley'},
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
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><p>Sunday</p></a>
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><span style='font-size: 1rem; display:block'>Group Overseers</span></a>
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
    </div>
        <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" class='combined bg-orange'>
          
        </a>`
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
