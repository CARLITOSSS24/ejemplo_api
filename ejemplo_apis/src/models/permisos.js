import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id_permiso: {
        type: Number,
        required: true,
    },
    rol : {
        type: String,
        required: true,
    },
});

export default mongoose.model("permisos", userSchema);
