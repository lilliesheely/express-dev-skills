const skills = [
    {id: 675755, skill: "CSS"}, 
    {id: 453344, skill: "HTML"},
    {id: 232322, skill: "JAVASCRIPT"},
];

module.exports = {
    getAll, 
    getOne
};


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id); 
    return skills.find((skill) => skill.id === id);
}