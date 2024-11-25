import User from "../../../models/User.js";

export default async(req,res,next) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
            {
                new: true,
                select: 'email firstName lastName photo country online'
            }
        );
        console.log(`User ${updatedUser.email} signed in successfully`);
        return res.status(200).json({
            success: true,
            message: "signed In",
            user: {
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                photo: updatedUser.photo || '',
                country: updatedUser.country
            },
            token: req.token
        })

    } catch (error) {
       next(error) 
    }
}