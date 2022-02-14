import axios from "axios";

export const registerClient=axios.create({
    baseURLL:"http://localhost:3001/registration"
});