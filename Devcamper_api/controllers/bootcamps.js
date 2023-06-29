//@des      Get all bootcamps
//Aroute    GET /api/v1/bootcamps
//Aaccess   public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all bootcamps" });
};

//@des      Get single bootcamp
//Aroute    GET /api/v1/bootcamps/:id
//Aaccess   public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messsage: `Show bootcamp ${req.params.id}` });
};

//@des      create new  bootcamp
//Aroute    GET /api/v1/bootcamps/:id
//Aaccess   private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
};

//@des      Update bootcamp
//Aroute    GET /api/v1/bootcamps/:id
//Aaccess   private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messsage: `Update bootcamp ${req.params.id}` });
};

//@des      delete bootcamp
//Aroute    GET /api/v1/bootcamps/:id
//Aaccess   private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messsage: `Delete bootcamp ${req.params.id}` });
};
