'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const path = require('path')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the wonderful ${chalk.red('generator-my-vue')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: '请输入项目名称，默认为(demo):',
        default: 'demo'
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入项目描述，默认为空:'
      },
      {
        type: 'input',
        name: 'author',
        message: '请输入作者 :'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  defaults() {
    if (path.basename(this.destinationPath()) !== this.props.appName) {
      mkdirp(this.props.appName);
      this.destinationRoot(this.destinationPath(this.props.appName));
    }
  }
  writing() {
    
    //创建文件夹
    // mkdirp('build');
    // mkdirp('config');
    // mkdirp('static');
    // mkdirp('src/assets');
    // mkdirp('src/store');
    // mkdirp('src/tool/pubService');
    // mkdirp('src/tool/resource');
    // mkdirp('src/components');
    // mkdirp('src/components/basic');
    // mkdirp('src/components/frame');
    console.log(this.templatePath('**'))

    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath()
    )

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath()
    )
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        appName: this.props.appName,
        description: this.props.description,
        author: this.props.author
      }
    )
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        appName: this.props.appName,
        description: this.props.description
      }
    )

    
  }
};
