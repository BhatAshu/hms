const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/profile",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = getFileExtension(file.originalname);
    const filename = `${uniqueSuffix}.${fileExtension}`;
    cb(null, filename);
  },
});

function getFileExtension(filename) {
  return filename.split(".").pop().toLowerCase();
}

const maxsize = 1024 * 1024 * 2; // 2MB

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/heic", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(null, false); // Reject the file
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: maxsize },
  fileFilter: fileFilter, // Correct the typo here
});

module.exports = { upload };
