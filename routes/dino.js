const express = require("express");
const router = express.Router();
const connection = require("../conf");

router.get("/", (req, res) => {
    connection.query('SELECT * FROM dinossaure', (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'affichage des dinossaures");
      } else {
        res.json(results);
      };
    });
  });

router.put("/", (req, res) => {
    connection.query('SELECT * FROM dinossaure', (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de l'affichage des dinossaures")
        }
    })
})

router.post('/', (req, res) => {
    const createDinossaure = req.body;
  
    connection.query('INSERT INTO dinossaure SET ?', createDinossaure, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la création du dinossaure');
      } else {
        res.sendStatus(200);
      }
    });
  });
  router.delete('/', (req, res) => {
    const id = req.body.idDinossaure;
  
    connection.query('DELETE FROM dinossaure WHERE idDinossaure = ?', [id], err => {
      if (err) {
        res.status(500).send('Erreur lors de la suppression du dinossaure');
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;
