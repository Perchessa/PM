module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '507a1bd0e2dcf3697ecebc5a5dbbfc74'),
    },
  },
});
