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
  getAllPlatforms = this.addressLibraryAddress + "/platforms.json"

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
  getIsWanActive = this.wanAddress + "/wan-status.json";

  /* WL */
  wlAddress = "/assets";
  getWLChannels = this.wlAddress + "/wl-channels.json";

  /* Tagam */
  tagamAddress = "/assets";
  getTagamChannels = this.tagamAddress + "/tagam-channels.json";
  getIsTagamActive = this.tagamAddress + "/tagam-status.json";

  /* Shkedia */
  shkediaAddress = "/assets";
  getShkediaChannels = this.shkediaAddress + "/shkd-channels.json";
  getIsShkdActive = this.tagamAddress + "/shkd-status.json";

  constructor() { }
}
