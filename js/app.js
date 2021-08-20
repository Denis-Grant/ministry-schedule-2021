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
    {month: "august 2021"},
    {text: '"Give us more faith." - Luke 17:5'}
];
// DATES - The number of date entries dictates the number of weeks looped! 
const dates = [
    '02/08','09/08','16/08','23/08','30/08'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '02/08'},
            {topic: 'Improving Our Skills in the Ministry'},

            {day: 'Monday'},
            {theme: 'Being Adaptable'},
            {ref: "-mwb19 December p. 7"},
            {overseers: 'D Grant/ D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202019453'} ,

            {day: 'Wednesday'},
            {theme: 'Helping “Rightly Disposed” Ones to Become Disciples'},
            {ref: '--mwb18 December p. 8'},
            {overseers: 'S Baccas / P Wu'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202018447#h=1:0-19:0'},

            {day: 'Friday'},
            {theme: 'Building Your Own Presentation'},
            {ref: '-mwb16 March p. 8'},
            {overseers: 'R Santiago / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202016092'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'S Baccas'},
            {link: ''}
        ],
        wk2:  [
            {week: '09/08'},
            {topic: 'Convention'},

            {day: 'Monday'},
            {theme: 'Sunday Morning (Program)'},
            {ref: '-CO-pgm21 pp. 6-7'},
            {overseers: 'W Davies / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021197'},
 
            {day: 'Wednesday'},
            {theme: 'Converse With Your Preaching Partner'},
            {ref: '-w15 2/15 pp. 15-18 para 8,9'},
            {overseers: 'S Baccas / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2015123#h=10'},
  
            {day: 'Friday'},
            {theme: "“Speak the Word of God Fearlessly”"},
            {ref: '-km 4/07 p. 1'},
            {overseers: 'P Wu / C Yalley'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/202007121'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: '* CONVENTION *'},
            {link: ''}
        ],
        wk3: [
            {week: '16/08'},
            {topic: 'Convention'},

            {day: 'Monday'},
            {theme: 'Sunday Afternoon (Program)'},
            {ref: '-CO-pgm21 pp. 6-7'},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021197'} ,

            {day: 'Wednesday'},
            {theme: 'Learn From Jesus’ Example'},
            {ref: '-w05 1/1 pp. 12-17 para 22-24'},
            {overseers: 'S Baccas / P Wu'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2005003#h=30'},

            {day: 'Friday'},
            {theme: 'Jesus Was Never Off Duty'},
            {ref: "-w13 10/15 pp. 31 - para 4"},
            {overseers: 'S Baccas / D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2013768#h=5'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: '* CONVENTION *'},
            {link: ''}
        ],
        wk4:  [
            {week: '23/08'},
            {topic: 'Fully Accomplish Your Ministry'},

            {day: 'Monday'},
            {theme: 'Are You Willing To Try A Different Method?'},
            {ref: "-w16 August pp. 24 BOX"},
            {overseers: 'W Davies / T Boland Jr'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2016608#h=49'},
 
            {day: 'Wednesday'},
            {theme: 'Meeting the Challenge of Apathy'},
            {ref: "-w88 7/15 p.19 para 15-17"},
            {overseers: 'S Baccas / D Grant'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1988524#h=20'},
  
            {day: 'Friday'},
            {theme: 'Overcoming Challenges'},
            {ref: "-w21 July p.6 para 14"},
            {overseers: 'P Wu / R Santiago'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2021480#h=22'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'A Osafo'},
            {link: ''}
        ],
        wk5:  [
            {week: '30/08'},
            {topic: 'Enjoy Life Forever'},

            {day: 'Monday'},
            {theme: 'What Is Jehovah Like?'},
            {ref: '-lff lesson 7 para 1-3'},
            {overseers: 'D Grant / D Griffiths'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102021207'},
 
            {day: 'Wednesday'},
            {theme: 'How You Can Get the Most Out of the Bible'},
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
