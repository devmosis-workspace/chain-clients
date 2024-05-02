import { BinaryWriter } from "../../../binary";
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
export const AdminTypeAmino = AdminType;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.admin.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  admin_accounts?: AdminAccountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.admin.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  admin_accounts: AdminAccountSDKType[];
}
export interface AdminAccount {
  adminType: AdminType;
  adminAddress: string;
}
export interface AdminAccountProtoMsg {
  typeUrl: "/sifnode.admin.v1.AdminAccount";
  value: Uint8Array;
}
export interface AdminAccountAmino {
  admin_type?: AdminType;
  admin_address?: string;
}
export interface AdminAccountAminoMsg {
  type: "/sifnode.admin.v1.AdminAccount";
  value: AdminAccountAmino;
}
export interface AdminAccountSDKType {
  admin_type: AdminType;
  admin_address: string;
}
export interface Params {
  submitProposalFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sifnode.admin.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  submit_proposal_fee?: string;
}
export interface ParamsAminoMsg {
  type: "/sifnode.admin.v1.Params";
  value: ParamsAmino;
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
  typeUrl: "/sifnode.admin.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.adminAccounts = object.admin_accounts?.map(e => AdminAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.adminAccounts) {
      obj.admin_accounts = message.adminAccounts.map(e => e ? AdminAccount.toAmino(e) : undefined);
    } else {
      obj.admin_accounts = message.adminAccounts;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseAdminAccount(): AdminAccount {
  return {
    adminType: 0,
    adminAddress: ""
  };
}
export const AdminAccount = {
  typeUrl: "/sifnode.admin.v1.AdminAccount",
  encode(message: AdminAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      adminType: isSet(object.adminType) ? adminTypeFromJSON(object.adminType) : -1,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : ""
    };
  },
  fromPartial(object: Partial<AdminAccount>): AdminAccount {
    const message = createBaseAdminAccount();
    message.adminType = object.adminType ?? 0;
    message.adminAddress = object.adminAddress ?? "";
    return message;
  },
  fromAmino(object: AdminAccountAmino): AdminAccount {
    const message = createBaseAdminAccount();
    if (object.admin_type !== undefined && object.admin_type !== null) {
      message.adminType = object.admin_type;
    }
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    return message;
  },
  toAmino(message: AdminAccount): AdminAccountAmino {
    const obj: any = {};
    obj.admin_type = message.adminType === 0 ? undefined : message.adminType;
    obj.admin_address = message.adminAddress === "" ? undefined : message.adminAddress;
    return obj;
  },
  fromAminoMsg(object: AdminAccountAminoMsg): AdminAccount {
    return AdminAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminAccountProtoMsg): AdminAccount {
    return AdminAccount.decode(message.value);
  },
  toProto(message: AdminAccount): Uint8Array {
    return AdminAccount.encode(message).finish();
  },
  toProtoMsg(message: AdminAccount): AdminAccountProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.AdminAccount",
      value: AdminAccount.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    submitProposalFee: ""
  };
}
export const Params = {
  typeUrl: "/sifnode.admin.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.submit_proposal_fee !== undefined && object.submit_proposal_fee !== null) {
      message.submitProposalFee = object.submit_proposal_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.submit_proposal_fee = message.submitProposalFee === "" ? undefined : message.submitProposalFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};