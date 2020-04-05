import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  /* SystemInformation */
  systemInfomationAddress = "/assets";
  getVersion = this.systemInfomationAddress + "/version.json"

  /* AddressLibrary */
  addressLibraryAddress = "/assets";
  getCurrentPlatform = this.addressLibraryAddress + "/platform.json";

  constructor() { }
}
