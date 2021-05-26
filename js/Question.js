class Question {
constructor() {
 this.title = createElement("h1");
 this.input1 = createInput("").attribute(
 "placeholder",
 "Enter Your Name Here...."
);
  this.input2 = createInput("").attribute(
  "placeholder",
  "Enter Correct Option No.."
);
  this.button = createButton("Submit");
  this.question = createElement("h3");
  this.option1 = createElement("h4");
  this.option2 = createElement("h4");
  this.option3 = createElement("h4");
  this.option4 = createElement("h4");
  this.reset = createButton("Reset");
}
hide() {
  this.title.hide();
  this.input1.hide();
  this.button.hide();
  this.input2.hide();
}
display() {
  this.title.html("SOLVE THE FOLLOWING RIDDLE");
  this.title.position(200, 0);
  this.question.html(
    
"Question:- I have a head and a tail that will never meet.Having too many of me is always a treat.What am I?")
    this.question.position(50, 50);
    this.option1.html("i: Candle ");
    this.option1.position(150, 100);
    this.option2.html("ii:Electricity");
    this.option2.position(150, 120);
    this.option3.html("iii:Coin ");
    this.option3.position(150, 140);
    this.option4.html("iv:Light");
    this.option4.position(150, 160);

    this.input1.position(250, 230);
    this.input2.position(450, 230);
    this.button.position(400, 300);

    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.position(20, 20);
    this.reset.mousePressed(() => {
      contestant.updateCount(0);
      quiz.update(0);
      database.ref("/").update({
        contestants: null,
      });
    });
  }
}
