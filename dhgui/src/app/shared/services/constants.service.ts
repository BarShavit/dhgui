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

  /* Mivraka */
  mivrakaServerAddress = "/assets";
  getMivrakaLiveliness = this.mivrakaServerAddress + "/mivraka-liveliness.json";

  /* Shob */
  shobAddress = "/assets";
  getShobLiveliness = this.shobAddress + "/shob-liveliness.json";

  /* BUG */
  bugAddress = "/assets";
  getBugLiveliness = this.bugAddress + "/bug-liveliness.json";

  /* Bomb */
  bombAddress = "/assets";
  getBombLiveliness = this.bombAddress + "/bomb-liveliness.json";

  /* WAN */
  wanAddress = "/assets";
  getTopology = this.wanAddress + "/wan-topology.json";
  getTaskForces = this.wanAddress + "/wan-taskforces.json";

  constructor() { }
}
