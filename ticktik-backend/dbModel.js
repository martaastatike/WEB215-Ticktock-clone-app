import mongoose from "mongoose";

const ticktokSchema = mongoose.Schema(
    {
        url: String,
        channel: String,
        song: String,
        likes: String,
        messages: String,
        description: String,
        shares: String,
    }
)
//collection inside the database
export default mongoose.model('"ticktokVideos', ticktokSchema);
