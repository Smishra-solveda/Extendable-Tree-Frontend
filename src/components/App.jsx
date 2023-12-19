import "../css/app.css"
import Heading from "../components/Heading";
import { createContext, useEffect, useState } from "react";


export const PersonContext = createContext();



function App() {
  const [personData, setPersonData] = useState(sampleData);
  const [personRelation, setPersonRelation] = useState(sampleRelation);
  const [relationTree, setRelationTree] = useState(generateRelTree());

  function generateRelTree() {
    let relationTree = {};
    for(let i of personRelation){
        let p = i[0];
        let c = i[1];
    
        if(relationTree[p] === undefined){
            relationTree[p] = [c];
        }else{
            relationTree[p].push(c);
        }
    }
    return relationTree;
  }

  


  const personContextValue = {
    handlePersonDataAdd,
    handlePersonRelationAdd,
    handlePersonRelationHeadAdd
  }

  function handlePersonDataAdd(newDetail) {
    setPersonData(prev => ([...prev, newDetail]));
  }

  function handlePersonRelationAdd(relation){
    setPersonRelation(prev => ([...prev, relation]))
  }

  function handlePersonRelationHeadAdd(child){
    const newRel = personRelation.map(x => {
      if(x[0] === 0) x[0]=child;
      return x;
    })


    newRel.push([0, child]);

    setPersonRelation(newRel);
  }


  // console.log(relationTree);
  window.localStorage.setItem("currentNode",1)


  return (
    <PersonContext.Provider value={personContextValue}>
      <center>
        <figure>
          <ul className="tree">
            <Heading key="0" id={0} relationTree={relationTree} personData={personData} personRelation={personRelation} />
          </ul>
        </figure>
      </center>
    </PersonContext.Provider>
    
  );
}

export default App;



let sampleData = [
  {
    id: 0,
    name: "Start",
    redirect: "redirect1",
    age: 10,
  },
  {
    id: 1,
    name: "1Customer Contacts IRCTC Helpline",
    redirect: "redirect2",
    age: 10,
  },
  {
    id: 2,
    name: "2Is the Inquiry Related to Ticket Booking?",
    redirect: "redirect1",
    age: 9,
  },
  {
    id: 3,
    name: "3Yes",
    redirect: "redirect1",
    age: 8,
  },
  {
    id: 4,
    name: "4Provide Information on Train Availability",
    redirect: "redirect1",
    age: 7,
  },
  {
    id: 5,
    name: "5Assist with Booking Process",
    redirect: "redirect1",
    age: 7.9,
  },
  {
    id: 6,
    name: "6Guide through Seat/Class Selection",
    redirect: "redirect1",
    age: 7.8,
  },
  {
    id: 7,
    name: "7Help with Payment Issues",
    redirect: "redirect1",
    age: 7.6,
  },
  {
    id: 8,
    name: "8Explain Ticket Modification Process",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 9,
    name: "9Address Ticket Printing/Collection Issues",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 10,
    name: "10No: Proceed to the Next Question",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 11,
    name: "11Is the Inquiry Related to Refunds or Cancellations?",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 12,
    name: "12Yes",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 13,
    name: "13Explain Refund Policies",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 14,
    name: "14Assist with Cancellation and Refund Process",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 15,
    name: "15Verify and Process Refund Requests",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 16,
    name: "16Provide Refund Status Updates",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 17,
    name: "17Address Failed Transaction Refunds",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 18,
    name: "18No: Proceed to the Next Question",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 19,
    name: "19Is the Inquiry About Special Services or Requests?",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 20,
    name: "20Yes",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 21,
    name: "21Assist with Special Needs Requests",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 22,
    name: "22Provide Information on Wheelchair Assistance",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 23,
    name: "23Guide through Traveling with Pets",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 24,
    name: "24Provide Information on Special Trains",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 25,
    name: "25Address Other Special Service Inquiries",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 26,
    name: "26No: Proceed to the Next Question",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 27,
    name: "27Is the Inquiry Regarding IRCTC Account Management?",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 28,
    name: "28Yes",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 29,
    name: "29Help with Login Issues",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 30,
    name: "30Reset Password",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 31,
    name: "31Troubleshoot Login Problems",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 32,
    name: "32Address Account Access Problems",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 33,
    name: "33Provide Assistance with Account Settings",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 34,
    name: "34No: Proceed to the Next Question",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 35,
    name: "35Is the Customer Dissatisfied or Facing Other Issues?",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 36,
    name: "36Yes",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 37,
    name: "37Offer Apologies and Acknowledge the Issue",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 38,
    name: "38Gather Details of the Complaint",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 39,
    name: "39Type of Issue (e.g., Technical, Service-related)",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 40,
    name: "40Specifics of the Dissatisfaction",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 41,
    name: "41Escalate the Complaint to Relevant Department",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 42,
    name: "42Technical Issues: IT Support",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 43,
    name: "43Service-related: Customer Relations",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 44,
    name: "44Other Issues: Appropriate Department",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 45,
    name: "45Provide a Reference or Complaint Number",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 46,
    name: "46No: Thank the Customer for Contacting IRCTC Helpline",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 47,
    name: "47Others",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 48,
    name: "48Blog Search",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 49,
    name: "49GPT Search",
    redirect: "redirect1",
    age: 7.3,
  },
  {
    id: 50,
    name: "50Image Search",
    redirect: "redirect1",
    age: 7.3,
  },
  
];

let sampleRelation = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [5, 6],
  [5, 7],
  [3, 8],
  [3, 9],
  [2, 10],
  [1, 11],
  [11, 12],
  [12, 13],
  [12, 14],
  [14, 15],
  [14, 16],
  [12, 17],
  [11, 18],
  [1, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [21, 23],
  [20, 24],
  [20, 25],
  [19, 26],
  [1, 27],
  [27, 28],
  [28, 29],
  [29, 30],
  [29, 31],
  [28, 32],
  [28, 33],
  [27, 34],
  [1, 35],
  [35, 36],
  [36, 37],
  [36, 38],
  [38, 39],
  [38, 40],
  [36, 41],
  [41, 42],
  [41, 43],
  [41, 44],
  [36, 45],
  [35, 46],
  [1, 47],
  [47, 48],
  [47, 49],
  [47, 50],
];
