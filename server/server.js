const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Compression middleware
app.use(compression());

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"]
    }
  },
  hsts: { maxAge: 31536000 },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // max 60 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS - configure with your frontend origin
app.use(cors({
  origin: ['https://plannorra.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Routes
// app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/generate', require('./routes/ideaRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

app.get('/', (req, res) => {
    res.send('Planora API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
