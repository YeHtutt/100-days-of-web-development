const express = require('express');
const multer = require('multer');
const db = require('../data/database');

/**
 * Multer-Speicherkonfiguration für hochgeladene Bilder.
 * Die Dateien werden im Ordner "images" gespeichert und
 * mit einem Zeitstempel versehen.
 */
const storageConfig = multer.diskStorage({
   /**
   * Legt das Zielverzeichnis für hochgeladene Dateien fest.
   */
  destination: function(req, file, cb) { //cb = callback
    cb(null, 'images');
  },
   /**
   * Legt den Dateinamen der hochgeladenen Datei fest.
   */
  filename: function(req, file, cb) { //cb = callback
    cb(null, Date.now() + '-' + file.originalname)
  }
});

/**
 * Multer-Middleware für Dateiuploads.
 * Verwendet die definierte Speicherkonfiguration.
 */
const upload = multer({ storage: storageConfig });

/**
 * Express Router für Profilrouten.
 */
const router = express.Router();

/**
 * Zeigt alle gespeicherten Benutzerprofile an.
 * Route: GET /
 */
router.get('/', async function(req, res) {
  const users = await db.getDb().collection('users').find().toArray();
  res.render('profiles', { users: users });
});

/**
 * Zeigt das Formular zum Erstellen eines neuen Benutzers an.
 * Route: GET /new-user
 */
router.get('/new-user', function(req, res) {
  res.render('new-user');
});

/**
 * Erstellt einen neuen Benutzer inklusive Bild-Upload.
 *
 * Route: POST /profiles
 *
 * Erwartet:
 * - username (Formularfeld)
 * - image (Dateiupload)
 */
router.post('/profiles', upload.single('image') , async function(req, res) {
  const uploadedImageFile = req.file;

  const userData = req.body;

  await db.getDb().collection('users').insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path
  })

  res.redirect('/');
});

module.exports = router;