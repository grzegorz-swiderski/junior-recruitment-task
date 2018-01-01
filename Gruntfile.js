module.exports = function(grunt) {

  // Project configuration.
  
  grunt.initConfig({
	watch: {
    		scripts: {
        		files: ['frontend/*.sass'],
        		tasks: ['sass'],
        		options: {
            			spawn: false,
        		},
    		} 
	},

	sass: {
      		options: {
        		sourceMap: false
      		},
      		dist: {
        		files: {
          			'frontend/style.css':'frontend/style.sass'
        		}
      		}
    	},
		
	

	browserSync: {
            	bsFiles: {
        		src : 'assets/css/*.css'
    		},
    		options: {
			watchTask: true,
        		server: {
            			baseDir: "./"
       			 }	
    		}
        }
  
  });
  // Load the plugins tasks 

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask("default", ["sass", "watch"]);
};
