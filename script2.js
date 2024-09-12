
const submissions = [
  {  
    name:"Jane",
    score: 95,
    passed:true
  } ,
  {
  name:"Mary J. Blige",
  score: 77,
  passed:true,
},
{
     name:"Jack",
    score: 77,
    passed:true,
  },
  {
    name:"Jill",
    score: 88,
    passed:true,
  },
]
 function addSubmission(array, newName, newScore){
    let passed = newScore >= 60 ? true : false;
    let submissions2 = {
        name: newName,
        score: newScore,
        passed: passed
      };
    
   array.push(submissions2)

   

 }
 addSubmission(submissions,"John",50)
 console.log(submissions)

 function deleteSubmissionByIndex(array,index){

  if(index > 0 && index < array.length) {
    array.splice(index,1) // remove one item
  } else {
    return "invalid input"
  }
    
 }
 deleteSubmissionByIndex(submissions,1) 
 console.log(submissions)

 function editSubmission(array,index,score){
  array[index].score = score;
  array[index].passed = score >= 60 ? true : false;
 }
 editSubmission(submissions,3,85)
 console.log(submissions)

 function findSubmissionByName(array, name) {
  return array.find(function(submission) {
      return submission.name === name;
  })
}
let result = findSubmissionByName(submissions,"Jill")
console.log(result)



function findLowestScore(array) {
  let lowestScore = array[0].score; // Initialize with the first person's score

  array.forEach(function(person) {
    if (person.score < lowestScore) {
      lowestScore = person.score;
    }
  });

  return lowestScore; 
}


let low = findLowestScore(submissions)
console.log(low)

function findAverageScore(array){
  let sum = 0
  array.forEach((person)=>{
    sum+=person.score

  });
  return sum / array.length

}
let average = findAverageScore(submissions);
console.log(`The total score of all students is : ${average}`);
