// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "uploads/")
//     },

//     filename: (req, file, cb){
//         cb(null, `${Date.now()}- %{file.originalname}`)
//     },
// });

// //file filter.....

// const fileFilter = (req, file, cb) =>{
//     const allowedTypes =["image/jpeg", "image/png", "image/jpg"];
//     if(allowedTypes.includes(file.mimetype)){
//         cb(null, true)
//     }
//     else{
//         cb(new Error("Only .jpeg, .jpg, .png are allowed formats"),flase)
//     }
// }

// const upload = multer ({storage, fileFilter})
// export default upload;

import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, .png formats are allowed"), false); // 🔁 fixed "flase" to "false"
  }
};

// Multer instance
const upload = multer({ storage, fileFilter });

export default upload;
