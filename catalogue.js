
class School{
    constructor(name, level, numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
      //this._pickupPolicy="";
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    set numberOfStudents(students){
      if(typeof this._numberOfStudents==="number" && students>300){
       this._numberOfStudents=students;
      }else{
      this._numberOfStudents="Invalid input: number of students must be set to number.";
      }
    }
    quickFacts(){
      console.log(this._name+" educates "+this._numberOfStudents +" students at the "+this._level+" school level.");
    }
    static pickSubstituteTeachers(sub){
     let lens=Math.floor(Math.random()*sub.length);
     let store=sub[lens];
     console.log(store);
    }
  }
  class HighSchool extends School{
    constructor(name, level, numberOfStudents, sportsTeams){
     super(name, "high", numberOfStudents, sportsTeams);
     this._sportsTeams=sportsTeams;
     this._numOfRegisteredTeam=0;
     this._registeredTeam=[];
    }
    set sportsTeam(team){
        this._numOfRegisteredTeam++;
        this._registeredTeam.push(team);
        this._sportsTeams.push(team);
     }
     get registeredTeam(){
       return this.teamRegistered;
     }
      get sportsTeam(){
        return this._sportsTeams;
      }
      }
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
     super(name, "primary", numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
      this._pickupPolicy;
    }
  }
  let priSchool=new PrimarySchool("Lorraine Hansburg", 515, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
  console.log(priSchool);
  let alSmith=new HighSchool("Al E. Smith",'', 415, ["Baseball", "Basketball", "Volleyball",'The Young Angel', "Track and Field", 'Tenis Team']);
  PrimarySchool.pickSubstituteTeachers(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Janson Terry", "Manu Ginobli"]);
  alSmith.sportsTeam="Yellow House";
  alSmith.sportsTeam="Green House";
  alSmith.sportsTeam="Red House";
  alSmith.sportsTeam="Blue House";
  alSmith.sportsTeam="Black House";
  alSmith.sportsTeam='The Tigeress';
  alSmith.sportsTeam="The Tigers";
  console.log(alSmith);
  
  
  