const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
            .then(movies => {
                res.render("moviesList",
                {movies})
            })
            .catch(error => console.log(error))
    },
    nueva : (req,res) => {
        db.Pelicula.findAll({order:[["release_date","DESC"]]})
        .then(movies =>{
            res.render("newestMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    recommended : (req,res) => {
        db.Pelicula.findAll({
            where : {
                awards : {
                    [Op.gte] : 8
                }
            }
        })
        .then(movies =>{
            res.render("recommendedMovies",{movies})
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(movie => {
            res.render("moviesDetail",{
                movie
            })
        })
        .catch(error => console.log(error))
    }
}
