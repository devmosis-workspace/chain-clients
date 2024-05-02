import { BinaryWriter } from "../../../binary";
export declare enum AdminType {
    CLPDEX = 0,
    PMTPREWARDS = 1,
    TOKENREGISTRY = 2,
    ETHBRIDGE = 3,
    ADMIN = 4,
    MARGIN = 5,
    UNRECOGNIZED = -1
}
export declare const AdminTypeSDKType: typeof AdminType;
export declare const AdminTypeAmino: typeof AdminType;
export declare function adminTypeFromJSON(object: any): AdminType;
export declare function adminTypeToJSON(object: AdminType): string;
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const AdminAccount: {
    typeUrl: string;
    encode(message: AdminAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AdminAccount;
    fromPartial(object: Partial<AdminAccount>): AdminAccount;
    fromAmino(object: AdminAccountAmino): AdminAccount;
    toAmino(message: AdminAccount): AdminAccountAmino;
    fromAminoMsg(object: AdminAccountAminoMsg): AdminAccount;
    fromProtoMsg(message: AdminAccountProtoMsg): AdminAccount;
    toProto(message: AdminAccount): Uint8Array;
    toProtoMsg(message: AdminAccount): AdminAccountProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
