    const outcomeStandard = require('../service/outcomeStandardService');


exports.getOutcomeStandard = (req, res) => {
    outcomeStandard.getOS().then(data => {
        let response = {};
        response.data = data;
        res.send(JSON.stringify(response));
    });
}
exports.getOutcomeStandardInfo=(req, res)=>{
    outcomeStandard.getOSInfo().then(data=>{
        console.log(data);
    })
}
exports.addOutcomeStandard = (req, res) =>{
    let body = req.query;    
    console.log(body);
    // outcomeStandard.addOutcomeStandard(body).then(mess =>{
    //     res.send(mess);
    // // })
    
    let request = {};
    request.IdFaculty = Number(body.idfaculty);
    request.IdProgram = Number(body.idprogram);
    request.IdUser = Number(body.iduser);
    request.NameOutcomeStandard = body.name;
    request.SchoolYear = body.schoolyear;
    request.DateCreated = body.createdat;
    request.DateUpdated = body.updatedat;
    outcomeStandard.addOS(request).then(mess=>{res.send(JSON.stringify(mess))});
    
}