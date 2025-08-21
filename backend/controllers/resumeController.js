// import { response } from 'express';
// import Resume from '../models/resumeModel.js'
// import fs from 'fs'
// import path from 'path'

// export const createResume = async (req, res) =>{
//     try{
//         const {title} = req. body;

//         //DEFAULT BODY
//          // Default template
//         const defaultResumeData = {
//             profileInfo: {
//                 profileImg: null,
//                 previewUrl: '',
//                 fullName: '',
//                 designation: '',
//                 summary: '',
//             },
//             contactInfo: {
//                 email: '',
//                 phone: '',
//                 location: '',
//                 linkedin: '',
//                 github: '',
//                 website: '',
//             },
//             workExperience: [
//                 {
//                     company: '',
//                     role: '',
//                     startDate: '',
//                     endDate: '',
//                     description: '',
//                 },
//             ],
//             education: [
//                 {
//                     degree: '',
//                     institution: '',
//                     startDate: '',
//                     endDate: '',
//                 },
//             ],
//             skills: [
//                 {
//                     name: '',
//                     progress: 0,
//                 },
//             ],
//             projects: [
//                 {
//                     title: '',
//                     description: '',
//                     github: '',
//                     liveDemo: '',
//                 },
//             ],
//             certifications: [
//                 {
//                     title: '',
//                     issuer: '',
//                     year: '',
//                 },
//             ],
//             languages: [
//                 {
//                     name: '',
//                     progress: '',
//                 },
//             ],
//             interests: [''],
//         };


//         const newResume = await Resume.create({
//             userId: req. user. _id,
//             title,
//             ...defaultResumeData,
//             ...req.body
//         })

//         response.status(201).json(newResume)
//     }
//     catch(error){
//         res.status(500).json({message: "Failed to create resume", error: error.message})
//     }
// }

// //GET FUNCTION TO CREATE THE RESUME 
// export const getUserResumes = async (req, res) =>{
//     try{
//         const resumes = await Resume.find({userId: req.user._id}).sort({
//             updatedAt: -1
//         });

//         res.json(resumes)
//     }

//     catch(error){
//         res.status(500).json({message: "Failed to get resumes", error: error.message})
//     }
// }



// //GET RESUEM BY ID
// export const getResumeById = async (req, res) =>{
//     try {
//         const resume = await Resume.findOne({_id: req.params.id, userId: req.user._id})

//         if(!resume){
//             return res.status(404).json({message: "Resume not found"})  
//         }
//         res.json(resume)
//     }catch(error){
//          return res.status(500).json({message: "Failed to get resumes", error: error.message})  

//     }
// }

// //UPDATE RESUME

// export const updateResume = async  (req, res) =>{
//     try{
//         const resume = await Resume.findOne({
//             _id : req.params.id,
//             userId: req.user._id
//         })

//         if(!resume) {
//             return res.status(404).json({message: "Resume not found or not authorize"})
//         }
//         //MERGE UPDATED RESUME....
//         Object.assign(resume, req.body)
//         //SAVE UPDATED RESUME 

//         const savedResume = await resume.save();
//         res.json(savedResume)
//     }
//     catch(error){
//          res.status(500).json({message: "Failed to update  resumes", error: error.message})  

//     }
// }

// //DELETE RESUMES
// export const deleteResume = async (req, res ) =>{
//     try{
//         const resume = await Resume.findOne({
//             _id : req.params.id,
//             userId: req.user._id
//         })

//         if(!resume){
//             return res.status(404).json({message: "Resume not found or not authorize"})
 
//         }

//         ///cCREATE THE UPLOAD FOLDER.....
//         const uploadFolder = path.json(process.cwd(), 'uploads')

//         //DELETE THUMNAI FUC
//         if(resume.thumbnailLink){
//             const oldThumbnail = path.join(uploadFolder, path.basename(resume.thumbnailLink))
//             if(fs.existsSync(oldThumbnail)){
//                 fs.unlinkSync(oldThumbnail)
//             }
//         }

//         if(resume.profileInfo?.profilePreviewUrl){
//             const oldProfile = path.join(
//                 uploadFolder,
//                 path.basename(resume.profileInfo.profilePreviewUrl)
//             )
//             if(fs.existsSync(oldThumbnail)){
//                 fs.unlinkSync(oldThumbnail)
//             }
//         }

//         //DELETE THE DOC..........
//         const deleted  = await Resume.findOneAndDelete({
//            _id : req.params.id,
//             userId: req.user._id  
//         })
//         if(!deleted){
//              return res.status(404).json({message: "Resume not found or not authorize"})
//         }
//         res.json({message:"Resume deleted successfull..."})
//     }
//     catch(error){
//          res.status(500).json({message: "Failed to delete  resumes", error: error.message})  

//     }
// }
//=====================================>
 
    import Resume from '../models/resumeModel.js';
import fs from 'fs';
import path from 'path';

// Create Resume
export const createResume = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user?.id || req.user?._id;

    if (!title || !userId) {
      return res.status(400).json({ message: 'Title and user are required' });
    }

    const defaultResumeData = {
      profileInfo: {
        profileImg: null,
        previewUrl: '',
        fullName: '',
        designation: '',
        summary: '',
      },
      contactInfo: {
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        website: '',
      },
      workExperience: [
        {
          company: '',
          role: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
      education: [
        {
          degree: '',
          institution: '',
          startDate: '',
          endDate: '',
        },
      ],
      skills: [{ name: '', progress: 0 }],
      projects: [
        {
          title: '',
          description: '',
          github: '',
          liveDemo: '',
        },
      ],
      certifications: [
        {
          title: '',
          issuer: '',
          year: '',
        },
      ],
      languages: [{ name: '', progress: '' }],
      interests: [''],
    };

    const newResume = await Resume.create({
      userId,
      title,
      ...defaultResumeData,
      ...req.body,
    });

    res.status(201).json(newResume);
  } catch (error) {
    console.error('Error in createResume:', error);
    res.status(500).json({ message: 'Failed to create resume', error: error.message });
  }
};

// Get all resumes for a user
export const getUserResumes = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const resumes = await Resume.find({ userId }).sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get resumes', error: error.message });
  }
};

// Get resume by ID
export const getResumeById = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const resume = await Resume.findOne({ _id: req.params.id, userId });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get resume', error: error.message });
  }
};

// Update Resume
export const updateResume = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const resume = await Resume.findOne({ _id: req.params.id, userId });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found or not authorized' });
    }

    Object.assign(resume, req.body);
    const savedResume = await resume.save();
    res.json(savedResume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update resume', error: error.message });
  }
};

// Delete Resume
export const deleteResume = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const resume = await Resume.findOne({ _id: req.params.id, userId });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found or not authorized' });
    }

    const uploadFolder = path.join(process.cwd(), 'uploads');

    if (resume.thumbnailLink) {
      const oldThumbnail = path.join(uploadFolder, path.basename(resume.thumbnailLink));
      if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
    }

    if (resume.profileInfo?.previewUrl) {
      const oldProfile = path.join(uploadFolder, path.basename(resume.profileInfo.previewUrl));
      if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
    }

    await Resume.findOneAndDelete({ _id: req.params.id, userId });

    res.json({ message: 'Resume deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete resume', error: error.message });
  }
};
