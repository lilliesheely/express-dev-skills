const Skill = require('../models/skill'); 

module.exports = {
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill, 
    edit,
    update
};


function index(req, res) {
    const skills = Skill.getAll(); 
    res.render('skills/index', {skills});
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/skills'); 
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill } )
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }