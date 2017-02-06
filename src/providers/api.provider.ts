import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {SettingsProvider} from "./settings.provider"
import "rxjs/add/operator/toPromise";

/*
 Generated class for the ApiProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiProvider {
  private network_section = "network";
  private network_settings = null;

  constructor(public http: Http, private SettingsProv: SettingsProvider) {
    this.network_settings = this.Init();
  }

  private Init() {
    let result = null;
    try {
      result = this.SettingsProv.GetSettings(this.network_section);
    }
    catch (err) {
      console.error("Произошла ошибка", err)
    }
    return result;
  }

  public GetLeng() {
    let __callback = () => {
      let result = null;
      try {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append(this.network_settings.keyparam, this.network_settings.id);
        result = this.http.get(this.network_settings.domain, urlSearchParams)
          .toPromise().then(res => {
            console.info(res)
          }).catch(err => {
            console.error(err)
          });
      }
      catch (err) {
        console.error("Произошла ошибка", err)
      }
    }
  return __callback();
  }

}
