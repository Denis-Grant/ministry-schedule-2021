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
    {month: "april 2021"},
    {text: '"Let each one of you be baptized." - Acts 2:38'}
];
// DATES - The number of date entries dictates the number of weeks looped! 
const dates = [
    '05/04','12/04','19/04','26/04'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '05/04'},
            {topic: 'Enjoy Life Forever!'},

            {day: 'Monday'},
            {theme: 'Help Your Student Set Goals'},
            {ref: "- w21 June p.3 para 4"},
            {overseers: 'A Osafo / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=10'} ,

            {day: 'Wednesday'},
            {theme: 'Help Your Student To Make Lifestyle Changes.'},
            {ref: '- w21 June p. 3-4 para 5-7'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=11'},

            {day: 'Friday'},
            {theme: 'Help Your Student Come To Love Jehovah'},
            {ref: '- w21 June p. 4 para 8'},
            {overseers: 'P Wu / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=43'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Moore'},
            {link: ''}
        ],
        wk2:  [
            {week: '12/04'},
            {topic: 'The End of The World!'},

            {day: 'Monday'},
            {theme: 'Will The Earth Be Burned Up?'},
            {ref: '- w13 1/1 p.5 para 4-8'},
            {overseers: 'A Osafo / T Boland (Jnr)'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2013003#h=6'},
 
            {day: 'Wednesday'},
            {theme: 'What Happens At The End Of The World?'},
            {ref: '- w13 1/1 p.5 para 9-13'},
            {overseers: 'S Baccas / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2013003#h=12'},
  
            {day: 'Friday'},
            {theme: "Is The End Of The World Really Near?"},
            {ref: '- w13 1/1 p.5 para 14-17'},
            {overseers: 'R Santiago / C Yalley'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2013003#h=23'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'S Baccas'},
            {link: ''}
        ],
        wk3: [
            {week: '19/04'},
            {topic: 'Enjoy Life Forever! Pt 2'},

            {day: 'Monday'},
            {theme: 'Develop A Friendship With Your Student.'},
            {ref: '- w21 June p. 5-6 para 10,11'},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=45'} ,

            {day: 'Wednesday'},
            {theme: 'Help Your Student to Widen Out'},
            {ref: '- w21 June p. 6  para 12-14'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=47'},

            {day: 'Friday'},
            {theme: 'Train Your Student To Share His Faith'},
            {ref: "- w21 June p. 6-7  para 16"},
            {overseers: 'P Wu / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021440#h=51'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Griffiths'},
            {link: ''}
        ],
        wk4:  [
            {week: '26/04'},
            {topic: 'The End of The World!'},

            {day: 'Monday'},
            {theme: 'Jehovah is Merciful'},
            {ref: "- jd Chp 11 p. 142-143 pp 6-7"},
            {overseers: 'D Grant / A Osafo'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102006154#h=9'},
 
            {day: 'Wednesday'},
            {theme: 'Jehovah is Patient'},
            {ref: "- w20 Sep p. 10-12 pp 8-14"},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2020561?q=jehovah+pati%2A+ministry&p=par#h=14'},
  
            {day: 'Friday'},
            {theme: 'Jehovah is Kind'},
            {ref: "- w16 July p.26  pp 1-3"},
            {overseers: 'P Wu / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2016523'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'C Yalley'},
            {link: ''}
        ],
        wk5:  [
            {week: '25/01'},
            {topic: 'The Bible'},

            {day: 'Monday'},
            {theme: 'Bible Teachings​—Timeless Wisdom!'},
            {ref: '- wp18 No. 1 pp. 4-7'},
            {overseers: 'W Davies / D Grant'},
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
