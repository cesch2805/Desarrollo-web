async function getData(req, res){
  const a  = await functionA()
  const b = await functionB()
  res.send('some result')
  res.send(error.stack)
} 

