// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    home: ExportHome;
  }
}
