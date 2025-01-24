import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for donor information
const donorsInfoSchema = new Schema(
  {
  
    fullname: {
      type: String,
      required: true,
    },
   
   
    
  
  },
  {
    timestamps: true,  
  }
);

 
const Donor = mongoose.model("Donor", donorsInfoSchema);

export default Donor;
