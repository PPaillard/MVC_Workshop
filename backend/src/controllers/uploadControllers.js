const fs = require("fs")

// Ajout de uuid
const { v4: uuidv4 } = require("uuid");

const fileDirectory = process.env.AVATAR_DIRECTORY

const renameFile = (req, res) => {
   // On récupère le nom du fichier
	const { originalname } = req.file;

	// On récupère le nom du fichier
	const { filename } = req.file;

    // on génère un uuid
    const myUuid = uuidv4();

	// On utilise la fonction rename de fs pour renommer le fichier
	fs.rename(`${fileDirectory}${filename}`, `${fileDirectory}${myUuid}-${originalname}`, (err) => {
			if (err) throw err;
			res.status(201).send({filename : `${myUuid}-${originalname}`})
		});
}


module.exports = {
    renameFile
}