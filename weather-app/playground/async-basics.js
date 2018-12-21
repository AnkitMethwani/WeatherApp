console.log('Starting app');
setTimeout(()=>{
  console.log('Inside of callback');
},2000)
setTimeout(()=>{
  console.log('inside callback but zero timeout');
},0)

console.log('Finishing up');
