const Skill = require('../models/skills'); 

module.exports = {
    index
};

function index(req, res) {
    const skills = Skill.getAll(); 
    res.render('skills/index', {skills});
}