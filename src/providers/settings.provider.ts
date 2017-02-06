import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as _ from "lodash";
import {settings} from "../app/settings/settings"
/*
 Generated class for the Settings provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SettingsProvider {

  constructor(public http: Http) {
  }

  public GetSettings(section: string = null) {
    let __callback = () => {
      let res = {};
      _.has(settings, section) ? res = settings[section] : res = null;
      return res;
    };
    return __callback() || null;
  }

}
