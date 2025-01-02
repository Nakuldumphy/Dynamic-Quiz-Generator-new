const questionBank = [
    { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },
    { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
    { question: "What is the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264" },
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Which Indian player is known as the 'Hitman'?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Shikhar Dhawan"], answer: "Rohit Sharma" },
    { question: "Who won the ICC Cricket World Cup 2011?", options: ["India", "Sri Lanka", "Australia", "England"], answer: "India" },
    { question: "Who holds the record for the fastest century in ODI cricket?", options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"], answer: "AB de Villiers" },
    { question: "Which country is known as the Proteas in cricket?", options: ["South Africa", "Australia", "England", "New Zealand"], answer: "South Africa" },
    { question: "Who has the most sixes in international cricket?", options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"], answer: "Chris Gayle" },
    { question: "Which team has won the most ICC Cricket World Cups?", options: ["Australia", "India", "West Indies", "England"], answer: "Australia" },
    { question: "Who is the youngest player to score a century in international cricket?", options: ["Shahid Afridi", "Virat Kohli", "Sachin Tendulkar", "Rashid Khan"], answer: "Shahid Afridi" },
    { question: "Which cricket stadium is the largest in the world?", options: ["Narendra Modi Stadium", "MCG", "Lord's", "Eden Gardens"], answer: "Narendra Modi Stadium" },
    { question: "Who is the fastest bowler in cricket history?", options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"], answer: "Shoaib Akhtar" },
    { question: "Which player has the highest batting average in Test cricket?", options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Jacques Kallis"], answer: "Don Bradman" },
    { question: "Who is the captain of the Indian cricket team in 2023?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
    { question: "Which bowler has the best bowling figures in ODI cricket?", options: ["Chaminda Vaas", "Muttiah Muralitharan", "Glenn McGrath", "Anil Kumble"], answer: "Chaminda Vaas" },
    { question: "Which country is known as the Black Caps in cricket?", options: ["New Zealand", "South Africa", "England", "West Indies"], answer: "New Zealand" },
    { question: "Who is the highest run-scorer in T20 internationals?", options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Chris Gayle"], answer: "Virat Kohli" },
    { question: "Which cricket ground is known as the 'Home of Cricket'?", options: ["Lord's", "MCG", "Eden Gardens", "The Oval"], answer: "Lord's" }
 ];


function randomquestion(){

    // ***** M-1 *******
    // use set for unique object
    // const data = new Set();

    // while(data.size != 5){
    //     const index = Math.floor(Math.random()*20);
    //     data.add(questionBank[index]);
    // }

    // return [...data];
    

    // ***** M-2 *****
    // js ka shot fn. kaam nhi krta array mei
    // reason: aggr me short fn. ke anndrr comparator function nhi daaluga , then it will convert our elements in string : aabb string ke base prr comparision hoga
    // Array.sort(comparator fn(call back fn.))
    // call back fn. will return -ve , +ve or 0;
    // -ve and 0 me a,b ka order same rahega
    // +ve me order change ho jae ga

    // questionBank.sort((a,b) => Math.random() -0.5);  // TC: nlogn :: ye uppr valle se bhi bekaar hai
    // return questionBank.slice(0,5);

    // ***** M-3 ****** (Fisher Algorithm - HW)  // TC: o(n) exactly


    // ***** M-4 ******  // TC: jittne element select hnn : best case= o(1) and worst case= o(n)
    // 1) select any random index
    // 2) replace its value with last element
    // 3) again select random index in reduced size of array by 1
    
    const arr = [];
    let length = questionBank.length;

    for(let i=0;i<5;i++){
        let index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

        //swap
        [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];  // questionBank[length-1] ko daalo questionBank[index] ke andrr //questionBank[index]  ko daalo questionBank[length-1] ke andrr
        length--;
    }
    return arr;
}


// select the form and insert all the elements into it
const form = document.querySelector('form');
const problem = randomquestion();
let i =1;
const original = {};


for(let {question,options,answer} of problem){
    // console.log(question);
    // console.log("ef");
    const div_element = document.createElement('div');
    div_element.className = 'question';
    const para = document.createElement('p');
    para.textContent = `${i}) ${question}`;
    div_element.append(para);
    original[`q${i}`] = answer;

    // create 4 options
    options.forEach((data) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${i}`;
        input.value = data;
        
        if(data === answer){
            label.id = `q${i}${data}`;
        }
        else 
        label.id = `q${i}${data}`;
        label.append(input,document.createTextNode(data));
        div_element.append(label);
        div_element.append(document.createElement('br'));
    });
    form.append(div_element);
    i++;
}

const button = document.createElement('button');
const reset = document.createElement('button');
button.type = 'submit';
reset.type = 'reset';
button.className = 'submit-btn';
reset.className = 'submit-btn';
button.textContent = 'Submit';
reset.textContent = 'Reset';

form.append(button);
form.append(reset);
    

// print result
let correct;

form.addEventListener('submit',(event)=>{   // jbb submit prr click hoo tbbhi isske anddrr ka code run hona chaiye
     event.preventDefault();
    const data = new FormData(form);
     
    let result =0;
    for(let [key,value] of data.entries())
    {
        if(value === original[key]){
            //  correct =document.getElementById('correct');
            //     correct.textContent += ` ${ky}`
            let check = document.getElementById(key+value);
            check.insertAdjacentHTML('beforeend',' <i class="fa-solid fa-check remove" ></i>')
                result++;
            }
            else{
                let check = document.getElementById(key+value);
                check.insertAdjacentHTML('beforeend',' <i class="fa-regular fa-circle-xmark remove"></i>')
            }
    }
          
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`
})



form.addEventListener('reset',()=>{
    // const rem = document.getElementsByClassName('remove');
    // for(let i=0;i<rem.length;i++){
    //     rem[i].remove();
    // }

    const rem = Array.from(document.getElementsByClassName('remove'));
    rem.forEach((element) => {
        element.remove();
    });
        const out = document.getElementById('out');
    out.innerText = ``
})