class scieasy {
    constructor(){

        this.question= createElement("H3")

        this.a = createButton("manganese");
        this.b = createButton("potassium");
        this.c = createButton("gold");
        this.d = createButton("carbon");

        this.wrongOrRight = createElement("H3");

        this.nextbutton = createButton("next");
        

        this.question2= createElement("H3")

        this.a2 = createButton("manganese");
        this.b2 = createButton("potassium");
        this.c2 = createButton("gold");
        this.d2 = createButton("carbon");

        this.wrongOrRight2 = createElement("H3");

        this.nextbutton2 = createButton("next");

        this.question3= createElement("H3")

        this.a3 = createButton("manganese");
        this.b3 = createButton("potassium");
        this.c3 = createButton("gold");
        this.d3 = createButton("carbon");

        this.wrongOrRight3 = createElement("H3");

        this.nextbutton3 = createButton("next");
        

        this.question4= createElement("H3")

        this.a4 = createButton("manganese");
        this.b4 = createButton("potassium");
        this.c4 = createButton("gold");
        this.d4 = createButton("carbon");

        this.wrongOrRight4 = createElement("H3");

        this.nextbutton4 = createButton("next");

        this.question5= createElement("H3")

        this.a5 = createButton("manganese");
        this.b5 = createButton("potassium");
        this.c5 = createButton("gold");
        this.d5 = createButton("carbon");

        this.wrongOrRight5 = createElement("H3");

        this.nextbutton5 = createButton("next");
        

        this.question6= createElement("H3")

        this.a6 = createButton("manganese");
        this.b6 = createButton("potassium");
        this.c6 = createButton("gold");
        this.d6 = createButton("carbon");

        this.wrongOrRight6 = createElement("H3");

        this.nextbutton6 = createButton("next");

        this.question7= createElement("H3")

        this.a7 = createButton("manganese");
        this.b7 = createButton("potassium");
        this.c7 = createButton("gold");
        this.d7 = createButton("carbon");

        this.wrongOrRight7 = createElement("H3");

        this.nextbutton7 = createButton("next");
        

        this.question8= createElement("H3")

        this.a8 = createButton("manganese");
        this.b8 = createButton("potassium");
        this.c8 = createButton("gold");
        this.d8 = createButton("carbon");

        this.wrongOrRight8 = createElement("H3");

        this.nextbutton8 = createButton("next");

        this.question9= createElement("H3")

        this.a9 = createButton("manganese");
        this.b9 = createButton("potassium");
        this.c9 = createButton("gold");
        this.d9 = createButton("carbon");

        this.wrongOrRight9 = createElement("H3");

        this.nextbutton9 = createButton("next");
        

        this.question10= createElement("H3")

        this.a10 = createButton("manganese");
        this.b10 = createButton("potassium");
        this.c10 = createButton("gold");
        this.d10 = createButton("carbon");

        this.wrongOrRight10 = createElement("H3");

        this.nextbutton10 = createButton("next");


    }

    display(){
        this.question.html("Which of these chemical elements is heavier than iron?");
        this.question.position(300,150);

        this.a.position(300,360);
        this.a.mousePressed(()=>{
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();
        });
        this.b.position(300,460);
        this.b.mousePressed(()=>{
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();
        });
        this.c.position(400,360);
        this.c.mousePressed(()=>{
            right++
            this.wrongOrRight.html("Right answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();

            //next question
            this.nextbutton.position(500,500);
            this.nextbutton.mousePressed(()=>{
                this.wrongOrRight.hide();

                this.nextbutton.hide();
                this.question2.html("Which of these chemical elements is heavier than iron?");
                this.question2.position(300,150);
        
                this.a2.position(300,360);
                this.a2.mousePressed(()=>{
                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();
                });
                this.b2.position(300,460);
                this.b2.mousePressed(()=>{
                    right++
                    this.wrongOrRight2.html("Right answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();

                                //next question
                        this.nextbutton2.position(500,500);
                        this.nextbutton2.mousePressed(()=>{
                            this.wrongOrRight2.hide();

                            this.nextbutton2.hide();
                            this.question3.html("Which of these chemical elements is heavier than iron?");
                            this.question3.position(300,150);
                    
                            this.a3.position(300,360);
                            this.a3.mousePressed(()=>{
                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();
                            });
                            this.b3.position(300,460);
                            this.b3.mousePressed(()=>{
                                right++
                                this.wrongOrRight3.html("Right answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                            //next question
                                    this.nextbutton3.position(500,500);
                                    this.nextbutton3.mousePressed(()=>{
                                        this.wrongOrRight3.hide();

                                        this.nextbutton3.hide();
                                        this.question4.html("Which of these chemical elements is heavier than iron?");
                                        this.question4.position(300,150);
                                
                                        this.a4.position(300,360);
                                        this.a4.mousePressed(()=>{

                                            right++
                                            this.wrongOrRight4.html("Right answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                                        //next question
                                                this.nextbutton4.position(500,500);
                                                this.nextbutton4.mousePressed(()=>{
                                                    this.wrongOrRight4.hide();

                                                    this.nextbutton4.hide();
                                                    this.question5.html("Which of these chemical elements is heavier than iron?");
                                                    this.question5.position(300,150);
                                            
                                                    this.a5.position(300,360);
                                                    this.a5.mousePressed(()=>{
                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();
                                                    });
                                                    this.b5.position(300,460);
                                                    this.b5.mousePressed(()=>{
                                                        right++
                                                        this.wrongOrRight5.html("Right answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();
                                                        
                                                    });
                                                    this.c5.position(400,360);
                                                    this.c5.mousePressed(()=>{

                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();

                                                        
                                                    });
                                                    this.d5.position(400,460);
                                                    this.d5.mousePressed(()=>{
                                                        wrong++
                                                        this.wrongOrRight5.html("Wrong answer");
                                                        this.wrongOrRight5.position(300,150);
                                            
                                                        this.question5.hide();
                                            
                                                        this.a5.hide();
                                                        this.b5.hide();
                                                        this.c5.hide();
                                                        this.d5.hide();
                                                    });
                                                });
                          
                                        });
                                        this.b4.position(300,460);
                                        this.b4.mousePressed(()=>{

                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();
                                            
                                        });
        
                                        this.c4.position(400,360);
                                        this.c4.mousePressed(()=>{

                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();

                                            
                                        });
                                        this.d4.position(400,460);
                                        this.d4.mousePressed(()=>{
                                            wrong++
                                            this.wrongOrRight4.html("Wrong answer");
                                            this.wrongOrRight4.position(300,150);
                                
                                            this.question4.hide();
                                
                                            this.a4.hide();
                                            this.b4.hide();
                                            this.c4.hide();
                                            this.d4.hide();
                                        });
                                    });
                                
                            });
                            this.c3.position(400,360);
                            this.c3.mousePressed(()=>{

                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();

                                
                            });
                            this.d3.position(400,460);
                            this.d3.mousePressed(()=>{
                                wrong++
                                this.wrongOrRight3.html("Wrong answer");
                                this.wrongOrRight3.position(300,150);
                    
                                this.question3.hide();
                    
                                this.a3.hide();
                                this.b3.hide();
                                this.c3.hide();
                                this.d3.hide();
                            });
                        });
                    
                });
                //end
                this.c2.position(400,360);
                this.c2.mousePressed(()=>{

                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();

                    
                });
                this.d2.position(400,460);
                this.d2.mousePressed(()=>{
                    wrong++
                    this.wrongOrRight2.html("Wrong answer");
                    this.wrongOrRight2.position(300,150);
        
                    this.question2.hide();
        
                    this.a2.hide();
                    this.b2.hide();
                    this.c2.hide();
                    this.d2.hide();
                });
            });

        });
        this.d.position(400,460);
        this.d.mousePressed(()=>{
            wrong++
            this.wrongOrRight.html("Wrong answer");
            this.wrongOrRight.position(300,150);

            this.question.hide();

            this.a.hide();
            this.b.hide();
            this.c.hide();
            this.d.hide();
        });
    }
}
