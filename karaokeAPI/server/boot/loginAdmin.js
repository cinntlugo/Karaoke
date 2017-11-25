module.exports = function(app) {
  app.models.usuario.create([{
    username: 'alecuellar',
    email: 'alecuellar@admin.mx',
    password: '123'
  }
  ], function(err, instance) {
    console.log(instance);
  });
};
