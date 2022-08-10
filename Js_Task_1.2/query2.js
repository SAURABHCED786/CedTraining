// PopUp Start
function model_popup() {
    $(document).ready(function () {
        $(".model_popup").fadeIn(1000);
    });
}
function closePopup() {
    $(document).ready(function () {
        $(".model_popup").fadeOut(1000);
    });
}

// PopUp End

// Clear All Future Teller
function clearAll() {
    document.getElementById("quesInput").value = '';
    document.getElementById("nameInput").value = '';
    document.getElementById("resultId").innerHTML = '';
}
// TellFuture Calling
const enemy = [];
const frnd = [];
const frnd2 = [];
const love = [];
const who = [];

function tellFuture() {
    let nameInput = document.getElementById("nameInput").value;
    let quesInpt = document.getElementById("quesInput").value;
    let qInput = quesInpt.toLowerCase();
    if (quesInpt == '' && qInput == '') {
        alert("please Enter your Name And Query to Start");
    } else {
        if (qInput.includes("enemy") || qInput.includes("who is my enemy") || qInput.includes("any enemy") || qInput.includes("any enemy in my life")) {

            let ans_enemy = ["Aapka koi dusman nhi hai.", "Everyone loves you", "Ahmm.. check your circle", "Savdhan rahe satark rahein", "Maybe someone"];
            let ran_no = Math.floor((Math.random() * 5) + 0);

            if (!enemy.includes(ans_enemy[ran_no])) {
                for (let i = 0; i < enemy.length; i++) {
                    ans_enemy.pop();
                }
                enemy.push(ans_enemy[ran_no]);
                document.getElementById("resultId").innerHTML = enemy[0];
            }

        } else if (qInput.includes("friend") || qInput.includes("who is my friend") || qInput.includes("any friend") || qInput.includes("any friend in my life")) {

            let ans_friend = ["You Have Lot of Fiends", "Ek hai jo Hmesha Aapke sath Hai", "Koi Nhi hai", "Maybe someone"];
            let ran_no = Math.floor((Math.random() * 4) + 0);

            if (!frnd.includes(ans_friend[ran_no])) {
                for (let i = 0; i < frnd.length; i++) {
                    ans_friend.pop();
                }
                frnd.push(ans_friend[ran_no]);
                document.getElementById("resultId").innerHTML = frnd[0];
            }

        } else if (qInput.includes("mera dost kaisa hai")) {
            let ans_friend2 = ["Your Fiend is Faithful Friend", "Aap ka dost aapke bhavisy ke liye theek nhi hai", "Aap Ka Dost Aapke Bare Me Accha Sochta Hai"];
            let ran_no = Math.floor((Math.random() * 3) + 0);
            if (!frnd2.includes(ans_friend2[ran_no])) {
                for (let i = 0; i < frnd2.length; i++) {
                    ans_friend2.pop();
                }
                frnd2.push(ans_friend2[ran_no]);
                document.getElementById("resultId").innerHTML = nameInput + " " + frnd2[0];
            }
        } else if (qInput.includes('love') || qInput.includes("loves") || qInput.includes("who loves me?") || qInput.includes("anyone loves me?")) {
            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            let ranLet = alphabet[Math.floor(Math.random() * alphabet.length)];
            let ans_loves = ["Someone is loves you", "You always single", "Your Lover Name is Start with " + '"' + ranLet + '" ' + "letter", "Still Single"];
            let ran_no = Math.floor((Math.random() * 4) + 0);
            let resId = document.getElementById("resultId");
            if (!love.includes(ans_loves[ran_no])) {
                for (let i = 0; i < love.length; i++) {
                    ans_loves.pop();
                }
                love.push(ans_loves[ran_no]);
                resId.innerHTML = nameInput + " " + love[0];
            }
        } else if (qInput.includes('who i am') || qInput.includes('who am i') || qInput.includes('who is me')) {
            let ans_who = ["You are Good Person", "May Be a Good Person", "You Born in this world to do something big in the world."];
            let ran_no = Math.floor((Math.random() * 3) + 0);
            if (!who.includes(ans_who[ran_no])) {
                for (let i = 0; i < who.length; i++) {
                    ans_who.pop();
                }
                who.push(ans_who[ran_no]);
                document.getElementById("resultId").innerHTML = nameInput + " " + who[0];
            }
        } else if (qInput.includes('who are you') || qInput.includes('who you are')) {
            document.getElementById("resultId").innerHTML = nameInput + " Am Future Teller";
        }
    }
}

function clearAll2() {
    document.getElementById("nameId").value = '';
    document.getElementById("resultId").innerHTML = '';
}

function tellFuture2() {
    selctQues = document.getElementById("selquesId").value;
    var name = document.getElementById("nameId").value;
    var a_arr = ["Yes.. Your Future is Bright", "Yes.! Why Not..", "You Need To Start Hard Work", "Ek Dost Aapke Liye Helpful Hoga", "You Are Already Successful Person", "Not Sure..!", "You Need To Always Alert in Daily Life.", "If You Unleash samart hobbies In You, Maybe."];

    if (name == '') {
        alert('First Enter Your Name.');
    } else {
        if (selctQues.match("If my future is bright ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[0];
        } else if (selctQues.match("Will I get SUKOON in life anytime soon ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[1];
        } else if (selctQues.match("Will I get married ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[2];
        } else if (selctQues.match("Will I get a Car in Future ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[3];
        } else if (selctQues.match("Will I get Success in my Life?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[4];
        } else if (selctQues.match("Will I get promoted ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[5];
        } else if (selctQues.match("If my foe lies within my circle ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[6];
        } else if (selctQues.match("Will i get Girlfrend..! in Future?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[7];
        }
    }
}