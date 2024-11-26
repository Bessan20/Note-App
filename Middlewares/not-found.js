const notFound = (req, res)=>res.status(404).send('Route doesnot exit');
module.exports = notFound;