import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export enum AdminType {
  CLPDEX = 0,
  PMTPREWARDS = 1,
  TOKENREGISTRY = 2,
  ETHBRIDGE = 3,
  ADMIN = 4,
  MARGIN = 5,
  UNRECOGNIZED = -1,
}
export const AdminTypeSDKType = AdminType;
export function adminTypeFromJSON(object: any): AdminType {
  switch (object) {
    case 0:
    case "CLPDEX":
      return AdminType.CLPDEX;
    case 1:
    case "PMTPREWARDS":
      return AdminType.PMTPREWARDS;
    case 2:
    case "TOKENREGISTRY":
      return AdminType.TOKENREGISTRY;
    case 3:
    case "ETHBRIDGE":
      return AdminType.ETHBRIDGE;
    case 4:
    case "ADMIN":
      return AdminType.ADMIN;
    case 5:
    case "MARGIN":
      return AdminType.MARGIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdminType.UNRECOGNIZED;
  }
}
export function adminTypeToJSON(object: AdminType): string {
  switch (object) {
    case AdminType.CLPDEX:
      return "CLPDEX";
    case AdminType.PMTPREWARDS:
      return "PMTPREWARDS";
    case AdminType.TOKENREGISTRY:
      return "TOKENREGISTRY";
    case AdminType.ETHBRIDGE:
      return "ETHBRIDGE";
    case AdminType.ADMIN:
      return "ADMIN";
    case AdminType.MARGIN:
      return "MARGIN";
    case AdminType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface GenesisState {
  adminAccounts: AdminAccount[];
}
export interface GenesisStateSDKType {
  admin_accounts: AdminAccountSDKType[];
}
export interface AdminAccount {
  adminType: AdminType;
  adminAddress: string;
}
export interface AdminAccountSDKType {
  admin_type: AdminType;
  admin_address: string;
}
export interface Params {
  submitProposalFee: string;
}
export interface ParamsSDKType {
  submit_proposal_fee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    adminAccounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.adminAccounts) {
      AdminAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      adminAccounts: Array.isArray(object?.adminAccounts) ? object.adminAccounts.map((e: any) => AdminAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.adminAccounts = object.adminAccounts?.map(e => AdminAccount.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAdminAccount(): AdminAccount {
  return {
    adminType: 0,
    adminAddress: ""
  };
}
export const AdminAccount = {
  encode(message: AdminAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminType !== 0) {
      writer.uint32(8).int32(message.adminType);
    }
    if (message.adminAddress !== "") {
      writer.uint32(18).string(message.adminAddress);
    }
    return writer;
  },
  fromJSON(object: any): AdminAccount {
    return {
      adminType: isSet(object.adminType) ? adminTypeFromJSON(object.adminType) : 0,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : ""
    };
  },
  fromPartial(object: Partial<AdminAccount>): AdminAccount {
    const message = createBaseAdminAccount();
    message.adminType = object.adminType ?? 0;
    message.adminAddress = object.adminAddress ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    submitProposalFee: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitProposalFee !== "") {
      writer.uint32(10).string(message.submitProposalFee);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      submitProposalFee: isSet(object.submitProposalFee) ? String(object.submitProposalFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.submitProposalFee = object.submitProposalFee ?? "";
    return message;
  }
};