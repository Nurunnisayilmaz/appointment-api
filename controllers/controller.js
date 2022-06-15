
const booking = async (req, res) => {
    try {
        return res.status(200).json({status: 'success'})
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

const getAllPhotos = async (req, res) => {
    try {
        return res.status(200).json({status: 'success'})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}

const getAllComments = async (req, res) => {
    try {
        return res.status(200).json({status: 'success'})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}

module.exports = {booking,getAllPhotos,getAllComments};