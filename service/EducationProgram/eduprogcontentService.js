const db = require('../../models/index');

exports.getEduContentByEduId = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                const eduContents = [];
                const subjectBlocks = [];
                const detailBlocks = [];
                db.eduprogcontent.findAll({
                    where: {
                        IdEduProgram: request.IdEduProg,
                    },
                }).then(contents=>{
                    contents.map(content=>{
                        eduContents.push(content);
                    });
                    
                    db.subjectblock.findAll({
                        where: {
                            IdEduProgContent: {
                                $in: eduContents.reduce((idTables, item)=>{
                                    if(item.Type){
                                        return idTables.concat(item.Id);
                                    }
                                    return idTables;
                                },[])
                            }
                        },
                    }).then(blocks =>{
                        blocks.map(block =>{
                            subjectBlocks.push(block);
                        })
                       
                        db.detailblock.findAll({
                            where: {
                                IdSubjectBlock: {
                                    $in: subjectBlocks.map(block=>{
                                        return block.Id
                                    })
                                }
                            },
                        }).then(detailsOfBlock =>{
                            detailsOfBlock.map(detail =>{
                                detailBlocks.push(detail)
                            })
                            resolve({
                                eduContents: eduContents,
                                subjectBlocks: subjectBlocks,
                                detailBlocks: detailBlocks
                            });
                        })                     
                    })
                    
                }).catch(err =>{
                    reject(err);
                })
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.addEduContent = (request) => {
    return new Promise((resolve, reject) => {
        db.sequelize.authenticate()
            .then(() => {
                let code = -1;
                const contentProg = {};
                const idEduContents = [];
                const listIdBlock = [];
                const detailBlocks = [];
                //destroy
                db.eduprogcontent.findAll({
                    where: {
                        IdEduProgram: request.IdEduProg,
                    },
                    attributes:['Id','Type']
                }).then(contents=>{
                    contents.map(content=>{
                        idEduContents.push({
                            Id:content.dataValues.Id,
                            Type: content.dataValues.Type
                        });
                    });
                    if(idEduContents.length){
                        db.eduprogcontent.destroy({
                            where:{
                                Id:{
                                    $in: idEduContents.map(item =>{
                                        return item.Id
                                    })
                                }
                            }
                        })
                    }
                    
                    db.subjectblock.findAll({
                        where: {
                            IdEduProgContent: {
                                $in: idEduContents.reduce((idTables, item)=>{
                                    if(item.Type){
                                        return idTables.concat(item.Id);
                                    }
                                    return idTables;
                                },[])
                            }
                        },
                        attributes:['Id']
                    }).then(blocks =>{
                        blocks.map(block =>{
                            listIdBlock.push(block.dataValues.Id);
                        })
                        if(listIdBlock.length){
                            db.subjectblock.destroy({
                                where:{
                                    Id:{
                                        $in: listIdBlock
                                    }
                                }
                            })
                        }
                       
                        db.detailblock.findAll({
                            where: {
                                IdSubjectBlock: {
                                    $in: listIdBlock
                                }
                            },
                            attributes: ['Id']
                        }).then(detailsOfBlock =>{
                            detailsOfBlock.map(detail =>{
                                detailBlocks.push(detail.dataValues.Id)
                            })
                            if(detailBlocks.length){
                                db.detailblock.destroy({
                                    where:{
                                        Id:{
                                            $in: detailBlocks
                                        }
                                    }
                                })
                            }
                        })                     
                    })
                    
                }).catch(err =>{
                    reject(err);
                })

                request.data.map(row => {
                    const isTable = row.data.isTable;
                    // insert
                    if (!isTable) {
                        contentProg.KeyRow = row.key;
                        contentProg.NameRow = row.data.name;
                        contentProg.Type = 0;
                        contentProg.IdEduProgram = request.IdEduProg;
                        contentProg.DateCreated = null;
                        db.eduprogcontent.create(contentProg)
                            .then(data => {
                                code = 201;
                                resolve(code);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        contentProg.KeyRow = row.key;
                        contentProg.NameRow = "";
                        contentProg.Type = 1;
                        contentProg.IdEduProgram = request.IdEduProg;
                        contentProg.DateCreated = null;

                        const blocks = groupBy(row.data.subjects, item =>{
                            return item.nameBlock;
                          });
                        db.eduprogcontent.create(contentProg)
                            .then(data => {
                                blocks.map(subjects => {
                                    const block = subjects[0];
                                    const subjectBlock = {};
                                    subjectBlock.IdEduProgContent = data.Id;
                                    subjectBlock.Credit = block.nameBlock.startsWith("BB") ? 0 : block.optionCredit;
                                    subjectBlock.isAccumulated = block.isAccumulation;
                                    subjectBlock.DateCreated = block.DateCreated;
                                    subjectBlock.KeyRow = block.parentKey;
                                    subjectBlock.NameBlock = block.nameBlock;

                                    db.subjectblock.create(subjectBlock)
                                        .then(blockCreation => {
                                            subjects.map((subject =>{
                                                const detailBlock = {};
                                                detailBlock.IdSubjectBlock = blockCreation.Id;
                                                detailBlock.IdSubject = subject.Id;
                                                detailBlock.DateCreated = subject.DateCreated;

                                                db.detailblock.create(detailBlock)
                                                    .then(data =>{
                                                    code = 201;
                                                    resolve(code);
                                                    })
                                                    .catch(err=>{
                                                        reject(err);
                                                    }) 
                                            }))
                                            code = 201;
                                            resolve(code);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                })
                                code = 201;
                                resolve(code);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    }

                })
            })
            .catch(err => {
                reject(err);
            })
    })
}


const groupBy = (array, f) => {
    let groups = {};
    array.forEach(subject => {
      let group = JSON.stringify(f(subject));
      groups[group] = groups[group] || [];
      groups[group].push(subject);
    });
    return Object.keys(groups).map(group => {
      return groups[group];
    });
  };