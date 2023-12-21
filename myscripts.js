let li=document.getElementById('header')
const Fun=async ()=>{
   const l=await fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093');
   const m=await l.json()
   
   /*let k=document.createElement('h1');
  m.map((each)=>{
    console.log(each)
    return 0
  })
   */
  console.log(li)
   
}
let m=  Fun()
