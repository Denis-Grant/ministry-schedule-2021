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
    {month: "february 2021"},
    {text: '"And I saw another angel flying in midheaven, and he had good news to declare." - Rev 14:6'}
];
// DATES - The number of date entries dictates the number of weeks looped! 
const dates = [
    '01/02','08/02','15/02','22/02'
];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];

const data = {
        
        wk1: [
            {week: '01/02'},
            {topic: 'Coping With Tragedy'},

            {day: 'Monday'},
            {theme: 'Does God Care About Our Suffering?'},
            {ref: '- w13 7/1 pp. 14-15'},
            {overseers: 'D Grant / A Osafo'},
            {link: 'https://www.jw.org/en/library/magazines/wp20130701/does-god-care/'} ,

            {day: 'Wednesday'},
            {theme: 'A Real Hope for a Better Tomorrow!'},
            {ref: '- ijwbt article 17'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://www.jw.org/en/bible-teachings/peace-happiness/real-hope-future-bible-promises/'},

            {day: 'Friday'},
            {theme: 'When a Loved One Dies!'},
            {ref: '- wp19 No. 2 pp. 6-7'},
            {overseers: 'R Santiago / W Davies'},
            {link: 'https://wol.jw.org/en/wol/d/r1/lp-e/2018091#h=1:0-24:0'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'T Boland Jr'},
            {link: ''}
        ],
        wk2:  [
            {week: '08/01'},
            {topic: 'Offering Bible Studies'},

            {day: 'Monday'},
            {theme: 'What Is a Bible Study?'},
            {ref: '- jw.org > About Us > FAQ'},
            {overseers: 'D Grant / D Griffiths'},
            {link: 'https://www.jw.org/en/jehovahs-witnesses/faq/what-is-a-bible-study/'},
 
            {day: 'Wednesday'},
            {theme: 'Why Study the Bible?'},
            {ref: '- wp 2015 04/01 | Cover Subject'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://www.jw.org/en/library/magazines/wp20150401/why-study-bible/'},
  
            {day: 'Friday'},
            {theme: "Must I Become One of JW's if I Study With Them?"},
            {ref: '- jw.org > About Us > FAQ'},
            {overseers: 'P Wu / C Yalley'},
            {link: 'https://www.jw.org/en/jehovahs-witnesses/faq/jw-bible-study/'},
      
            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Moore'},
            {link: ''}
        ],
        wk3: [
            {week: '15/01'},
            {topic: 'Why Believe in God?'},

            {day: 'Monday'},
            {theme: 'Does God Exist?'},
            {ref: '- ijwbq article 78'},
            {overseers: 'A Osafo / D Griffiths'},
            {link: 'https://www.jw.org/en/bible-teachings/questions/does-god-exist/'} ,

            {day: 'Wednesday'},
            {theme: 'Is Belief in God Reasonable?'},
            {ref: '- g 2010 02'},
            {overseers: 'S Baccas / H Neal'},
            {link: 'https://www.jw.org/en/library/magazines/g201002/Is-Belief-in-God-Reasonable/'},

            {day: 'Friday'},
            {theme: 'How Can You Know God Personally?'},
            {ref: "- jw.org ><br>Bible Teachings > Q's Answered"},
            {overseers: 'R Santiago/ C Yalley'},
            {link: 'https://www.jw.org/en/bible-teachings/questions/knowing-god-personally-get-closer/'},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: 'D Grant'},
            {link: ''}
        ],
        wk4:  [
            {week: '22/01'},
            {topic: 'Bible Questions Answered'},

            {day: 'Monday'},
            {theme: 'Peace on Earth—How Will It Come?'},
            {ref: "- jw.org ><br>Bible Teachings > Q's Answered"},
            {overseers: 'D Grant / D Moore'},
            {link: 'https://www.jw.org/en/bible-teachings/questions/peace-on-earth-how/'},
 
            {day: 'Wednesday'},
            {theme: 'What Is the Meaning of Life?'},
            {ref: "- jw.org ><br>Bible Teachings > Q's Answered"},
            {overseers: 'S Baccas H Neal'},
            {link: 'https://www.jw.org/en/bible-teachings/questions/meaning-of-life/'},
  
            {day: 'Friday'},
            {theme: 'What Does the Bible Say About Pandemics?'},
            {ref: "- jw.org ><br>Bible Teachings > Q's Answered"},
            {overseers: 'P Wu / T Boland Jr'},
            {link: 'https://www.jw.org/en/bible-teachings/questions/bible-about-pandemics-disease/'},
      
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