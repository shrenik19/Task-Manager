const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('./task');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter Email id only");
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
        if(value.toLowerCase().includes('password'))
            throw new Error("You cant keep this as your password");
        }
    },
    age: {
        type: Number,
        default: 20,
        validate(value){
            if(value < 0)
                throw new Error('Age must be a positive number');
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
});

userSchema.virtual('tasks', {
    ref:'Task',
    localField: '_id',
    foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
    const user = this;
    const userObj = user.toObject();

    delete userObj.password;
    delete userObj.tokens;
    delete userObj.avatar;

    return userObj;
}

//methods are accessible on instances and thus they are also called as instance method.
userSchema.methods.generateAuthToken = async function() {
    const user = this;

    //if dev runs correct then we should write instead of below this line
    //const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse');
    
    user.tokens = user.tokens.concat({ token });
    await user.save();
    
    return token;
}


//statics methods are called on models and thus they are also called as model methods.
userSchema.statics.findByCredentials = async (email, password) =>{
    const user = await User.findOne({ email });

    if(!user)
        throw new Error('Unable to login');
    
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
        throw new Error('Unable to login');
    return user;
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

// Delete user task when User is removed
userSchema.pre('remove', async function(next){
    const user = this;
    await Task.deleteMany({ owner: user._id});
    next();
});

const User = mongoose.model('User',userSchema);

module.exports = User;