const Student = require('../models/Student');
const express = require('express');
const {
    update
} = require('../models/Student');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
    async index(req, res) {
        try {
            const {limite, pagina, nome} = req.query;
            const limit = limite ? +limite : 25;
            const offset = pagina ? ((pagina-1) * limit) : 0;
            var condicao = nome ? {nome: { [Op.like]: `%${nome}%` } } : null;
            
            const students = await Student.findAll({
                limit, offset, where: condicao
            });
            return res.status(200).json(students);

        } catch(error){
            return res.status(400).json({
                error: error.message
            });
        }
    },


    async store(req, res) {
        try {
            const { rga, nome, curso, situacao } = req.body;
            const student = await Student.create({
                rga,
                nome,
                curso,
                situacao
            });

            return res.status(201).json(student);
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    },

    async findById(req, res) {
        try{
            const id = req.params.id_aluno;
            const student = await Student.findByPk(id);
            if(student){
                return res.status(200).json(student);
            }
            else {
                throw new Error('estudante nao encontrado')
            } 
            
        } catch(error){
            return res.status(404).send(error.message);
        }
        
        
    },

    async update(req, res) {
        try {
            const studentId = req.params.id_aluno;
            const [updated] = await Student.update(req.body, {
                where: {
                    id: studentId
                }
            });

            if (updated) {
                const updatedPost = await Student.findOne({
                    where: {
                        id: studentId
                    }
                });
                return res.status(200).json({
                    post: updatedPost
                });
            } else {
                throw new Error('estudante nao encontrado')
            }
        }
        catch(error){
            return res.status(404).send(error.message);
        }
    },

    async delete (req, res) {
        try {
          const studentId = req.params.id_aluno;
          const student = await Student.findOne({
              where: {
                  id: studentId
              }
          })

          const deleted = await Student.destroy({
            where: { id: studentId }
          });

          if (student && deleted) {
            return res.status(200).json(student);
          }

          else{
            throw new Error("Estudante nao encontrado");
          }

        } catch (error) {
          return res.status(404).send(error.message);
        }
      }
};