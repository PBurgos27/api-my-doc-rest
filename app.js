import express from 'express';
import { PORT } from './config.js';

import pacienteRoutes from './routes/pacienteRoutes.routes.js';
import authRoutes from './routes/auth.routes.js'
import adminRoutes from './routes/admin.routes.js'
import doctorRoutes from './routes/doctor.routes.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors({origin:'http://127.0.0.1:5173'}))//{    origin:'http://localhost:5173'}

app.use(pacienteRoutes);
app.use(authRoutes);
app.use(adminRoutes);
app.use(doctorRoutes)

app.listen(PORT);
console.log(`Server is running in PORT: ${PORT}`)

export default app