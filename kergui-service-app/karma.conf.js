module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // laisser Jasmine gérer le nettoyage de l'environnement de test
      },
      jasmineHtmlReporter: {
        suppressAll: true // empêcher l'affichage de la sortie et des spécifications de test en double
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/kergui-service-app'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'], // Vous pouvez utiliser n'importe quel navigateur que vous avez installé sur votre système
      singleRun: false,
      restartOnFileChange: true
    });
  };
  