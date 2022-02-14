import axios from "axios";

export const Client=axios.create({
    baseURLL:"http://localhost:3001/registration"
});