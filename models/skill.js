const skills = [
    {id: 675755, skill: "DOM", mastery: 5}, 
    {id: 453344, skill: "Stubbing up a function", mastery: 4},
    {id: 232322, skill: "Styling with CSS", mastery: 6,}
];

module.exports = {
    getAll, 
    getOne, 
    create, 
    delete: deleteOne
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
    skill.done = false; 
    skills.push(skill); 
}

function deleteOne(id) {
    id = parseInt(id); 
    const skillIdx = skills.findIndex((t) => skill.id === id ); 
    skills.splice(todoIdx, 1); 
}