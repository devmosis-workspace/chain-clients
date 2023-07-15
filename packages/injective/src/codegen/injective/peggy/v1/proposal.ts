import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface BlacklistEthereumAddressesProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
function createBaseBlacklistEthereumAddressesProposal(): BlacklistEthereumAddressesProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const BlacklistEthereumAddressesProposal = {
  encode(message: BlacklistEthereumAddressesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BlacklistEthereumAddressesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blacklistAddresses: Array.isArray(object?.blacklistAddresses) ? object.blacklistAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal {
    const message = createBaseBlacklistEthereumAddressesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  }
};
function createBaseRevokeEthereumBlacklistProposal(): RevokeEthereumBlacklistProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const RevokeEthereumBlacklistProposal = {
  encode(message: RevokeEthereumBlacklistProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RevokeEthereumBlacklistProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blacklistAddresses: Array.isArray(object?.blacklistAddresses) ? object.blacklistAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal {
    const message = createBaseRevokeEthereumBlacklistProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  }
};