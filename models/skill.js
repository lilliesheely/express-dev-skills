const skills = [
    {id: 675755, skill: "DOM"}, 
    {id: 453344, skill: "Stubbing up a function"},
    {id: 232322, skill: "Styling with CSS"}
];

module.exports = {
    getAll, 
    getOne, 
    create, 
    delete: deleteOne,
    update
};


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id); 
    return skills.find((skill) => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000; 
    // skill.done = false; 
    skills.push(skill); 
}

function deleteOne(id) {
    id = parseInt(id); 
    const skillIdx = skills.findIndex((s) => s.id === id ); 
    skills.splice(skillIdx, 1); 
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
  }