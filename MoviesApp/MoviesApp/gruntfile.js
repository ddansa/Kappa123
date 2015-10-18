/// <binding BeforeBuild='sass:dist' ProjectOpened='dev' />
/// <vs SolutionOpened='default' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        // SASS
        sass: {
            options: {
                sourcemap: "auto",
                // OUTPUT STYLES: nested, expanded, compact, compressed
                style: "nested"
            },
            dist: {
                expand: true, // Recursive
                cwd: "Content/sass", // Scss Source directory
                src: ["*.scss"], // Source files
                dest: "Content/css", //Destinations
                ext: ".css" // File Extension
            }
        },

        // Autoprefixer
        // Automatically prefixes css styles for browsers
        autoprefixer: {
            options: {
                browsers: ["last 2 versions", "> 5%"],
                map: true
            },
            
            // Files to process
            multiple_files: {
                src: "Content/css/**/*.css"
            }
        },
        
        // Watch task
        watch: {
            css: {
                files: ["Content/sass/**/*.scss"],
                tasks: ["sass", "autoprefixer"],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask("dev", ["watch"]);
    grunt.registerTask("prod", ["sass", "autoprefixer"]);
};